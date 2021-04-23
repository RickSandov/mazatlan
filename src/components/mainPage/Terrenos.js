import React, { useState, useContext } from 'react';
import { InfoTerreno } from './InfoTerreno';
import { UserContext } from '../UserContext';
import { useFetch } from '../../hooks/useFetch';

export const Terrenos = () => {


    const [state, setstate] = useState({
        lotId: 0,
        manzana: 0,
        area: 0,
        available: true,
        isCorner: false,
        type: 'A'
    });

    const [isSelected, setIsSelected] = useState(null);

    const { data } = useFetch('/api/lot');

    const { lotId, manzana, area, available, isCorner, type } = state;

    const { formFields, setFormFields } = useContext(UserContext);

    const handleChange = (id, lotId, manzana) => {
        setFormFields({ ...formFields, _id: id, lotId: lotId, manzana: manzana, active: true })

    }


    const hanldeClick = (lotId, id, manzana, area, available, isCorner) => {

        setstate(
            {
                lotId,
                manzana,
                area,
                available,
                isCorner
            }
        );

        const lote = data?.lots.find(lot => lot._id === id)

        lote.selected = true;

        if (isSelected) {
            data.lots.find(lot => lot._id === isSelected).selected = false
        }

        setIsSelected(lote._id);

    }


    const screenWidth = window.innerWidth;

    return (
        <div id="terrenos">
            <div className="terrenos-title" >
                <h1>Una inversión que te<strong>cambiará la vida</strong></h1>
            </div>

            <div className="terrenos">

                <div className="terrenos__img">

                    <img id='terrenos-img' src="./assets/images/terreno.jpg" alt="terreno"></img>


                    <svg id="lots-container" className="terrenos__base" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

                        {

                            data?.lots.map(({ _id, htmlContent, available, manzana, selected, planId, area, isCorner, type }) =>
                            (

                                screenWidth <= 789 ? (
                                    <a key={_id} href='#info-terrenos'>
                                        <g
                                            className={`${available ? 'available' : 'unavailable'} ${selected && 'selected'}`}
                                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                                            onClick={() => {
                                                hanldeClick(planId, _id, manzana, area, available, isCorner, type);
                                                handleChange(_id, planId, manzana);
                                            }}
                                        ></g>
                                    </a>
                                ) : (
                                    <g
                                        key={_id} className={`${available ? 'available' : 'unavailable'} ${selected && 'selected'}`}
                                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                                        onClick={() => {
                                            hanldeClick(planId, _id, manzana, area, available, isCorner, type);
                                            handleChange(_id, planId, manzana);
                                        }}
                                    ></g>
                                )



                            )
                            )

                        }

                    </svg>
                </div>

                <div className="terrenos__info" id="info-terrenos">
                    {
                        !isSelected ? <h3 className="select-lot" >Selecciona un terreno para ver su información...</h3> : <InfoTerreno manzana={manzana} area={area} lotNum={lotId} available={available} isCorner={isCorner} type={type}></InfoTerreno>
                    }
                </div>



            </div>

        </div>
    )
}
