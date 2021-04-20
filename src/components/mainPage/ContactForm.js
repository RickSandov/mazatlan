import React from 'react'
import { Calendar } from './Calendar'

export const ContactForm = () => {
    return (
        <>

        

            <div className="contact-bc"></div>

            <div id="contacto" className="contact-box">
                <div className="contact">
                    <div className="contact__title">
                        <h3>agenda tu cita</h3>
                        <p>Nosotros te llamamos</p>
                    </div>
                    <div className="contact__form">
                        <div className="contact__inputs">
                            <div className="form__group">
                                <input type="input" className="form__field" placeholder="Nombre" name="name" id='name' required />
                                <label htmlFor="name" className="form__label">Nombre</label>
                            </div>

                            <div className="form__group">
                                <input type="number" className="form__field" placeholder="Su número" name="phone" id='phone' required />
                                <label htmlFor="phone" className="form__label">Número de Contacto</label>
                            </div>

                            <div className="form__group">
                                <input type="email" className="form__field" placeholder="Email" name="email" id='email' required />
                                <label htmlFor="email" className="form__label">Email</label>
                            </div>


                            <div className="form__group">
                                <p>Mensaje</p>
                                <textarea name="message" id="message"></textarea>
                            </div>

                        </div>

                        <div className="calendar">
                            <Calendar />
                        </div>
                    </div>
                    <button href="" className="btn btn-send">Enviar</button>
                </div>
            </div>

        </>
    )
}
