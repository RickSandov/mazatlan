import React, { useState } from 'react'

export const Calendar = () => {

    let appointment;

    const [month, setMonth] = useState(new Date().getMonth());

    const date = new Date();
    date.setDate(1);
    date.setMonth(month);
    date.getMonth() === new Date().getMonth() && date.setDate(new Date().getDate())
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('es-MX', options);
    const firstDay = date.getDay();
    
    const monthString = dateString.split(' ')[3];

    // Get last day of current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const lastWeekDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    let nextDaysNum = lastWeekDay !== 6 && 7 - lastWeekDay - 1;

    let prevDays = [];
    let days = [];
    let nextDays = [];

    for (let i = 1; i <= lastDay; i++) {
        days.push(i);
    }

    for (let j = firstDay; j > 0; j--) {
        prevDays.push(prevLastDay - j + 1)
    }

    for (let k = 1; k <= nextDaysNum; k++) {
        nextDays.push(k);
    }

    const nextMonth = () => {
        setMonth(month + 1);
    }

    const prevMonth = () => {
        new Date().getMonth() <= month -1 && setMonth(month - 1); 
    }

    const handleSetDay = ({target}, day) => {
        document.querySelector(".today")?.classList.remove("today");
        target.classList.add("today");

        appointment = `${monthString} ${day}`;
        console.log(appointment);
    }

    

    return (
        <div className="calendar">
            <div className="calendar__month">
                <svg 
                className="prev"
                onClick={prevMonth}
                >
                    <use href="./assets/svg/down.svg#down"></use>
                </svg>
                <div className="date">
                    <h4>{monthString}</h4>
                    {/* <p>{dateString}</p> */}
                </div>
                <svg 
                className="next"
                onClick={nextMonth}
                >
                    <use href="./assets/svg/down.svg#down"></use>
                </svg>
            </div>
            <div className="calendar__weekdays">
                <div>Dom</div>
                <div>Lun</div>
                <div>Mar</div>
                <div>Mie</div>
                <div>Jue</div>
                <div>Vie</div>
                <div>Sab</div>
            </div>
            <div className="calendar__days">

                {
                    prevDays.map(day => (
                        <div key={day} className="prev-date" onClick={prevMonth}>{day}</div>
                    ))
                }

                {
                    days.map(day => (
                       (day === new Date().getDate() && date.getMonth() === new Date().getMonth()) 
                        ? 
                        (<div key={day} className="today" onClick={(e) => handleSetDay(e, day)}>{day}</div>) 
                        : 
                        (date.getMonth() === new Date().getMonth() && day < new Date().getDate())
                        ?
                        (<div className="disabled" key={day}>{day}</div>)
                        :
                        (<div key={day} onClick={(e) => handleSetDay(e, day)}>{day}</div>)

                    ))
                }

                {
                    nextDays.map(day => (
                        <div key={day} className="next-date" onClick={nextMonth}>{day}</div>
                    ))
                }

            </div>
        </div>
    )
}
