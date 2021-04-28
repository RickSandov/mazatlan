import React, { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { UserContext } from '../UserContext';
import { Calendar } from './Calendar'

export const ContactForm = () => {

    const initialForm = {
        name: '',
        phone: 0,
        email: '',
        msg: ''
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const { name, phone, email, msg } = formValues;

    const { formFields, setFormFields } = useContext(UserContext);

    const [formFeedback, setFormFeedback] = useState({
        active: false,
        msg: '',
        className: ''
    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormFields({ ...formFields, [target.name]: value });
    }


    const sendWp = () => {
        const wpMsg = `https://api.whatsapp.com/send/?phone=%2B526181479256&text=Buen día, quisiera pedir informes sobre el terreno número ${formFields.lotId} de la manzana ${formFields.manzana} del proyecto Colinas del Mar`;

        window.open(wpMsg);
    }

    const sendForm = async () => {

        const { name, phone, email, msg, lotId, date } = formFields;

        const contactInfo = JSON.stringify(
            {
                name,
                phone,
                email,
                msg,
                _id: lotId,
                date
            }
        )

        const fetchResponse = (await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: contactInfo
        }
        ));

        if (fetchResponse.ok) {
            setFormFeedback({
                active: true,
                msg: 'Datos enviados',
                className: 'res-ok'
            })
            reset();
        } else {
            setFormFeedback({
                active: true,
                msg: 'Ocurrió un problema al enviar la información. Inténtelo de nuevo o envíe por Whatsapp.',
                className: 'res-error'
            })
        }

        setTimeout(()=> {
            setFormFeedback({
                active: false,
                msg: '',
                className: ''
            })
        },2500)

    }

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
                                <input type="input"
                                    value={name}
                                    className="form__field"
                                    onChange={e => {
                                        handleInputChange(e);
                                        handleChange(e);
                                    }}
                                    placeholder="Nombre" name="name" id='name' required />
                                <label htmlFor="name" className="form__label">Nombre</label>
                            </div>

                            <div className="form__group">
                                <input type="number" className="form__field"
                                    onChange={e => {
                                        handleInputChange(e);
                                        handleChange(e);
                                    }}
                                    value={phone}
                                    placeholder="Su número" name="phone" id='phone' required />
                                <label htmlFor="phone" className="form__label">Número de Contacto</label>
                            </div>

                            <div className="form__group">
                                <input type="email"
                                    value={email}
                                    className="form__field"
                                    onChange={e => {
                                        handleInputChange(e);
                                        handleChange(e);
                                    }}
                                    placeholder="Email" name="email" id='email' required />
                                <label htmlFor="email" className="form__label">Email</label>
                            </div>


                            <div className="form__group">
                                <p>Mensaje</p>
                                <textarea name="msg" id="msg" value={msg} onChange={e => {
                                    handleInputChange(e);
                                    handleChange(e);
                                }} ></textarea>
                            </div>

                        </div>

                        <div className="calendar">
                            <Calendar />
                        </div>
                    </div>

                    <div className="contact__buttons">
                        <button onClick={sendForm} className="btn btn-send">Enviar</button>
                        {formFields.active && <button className="btn btn-send-wp" onClick={sendWp} >Enviar por Whatsapp</button>}
                    </div>

                    {formFeedback.active && (
                        <div className={`snackbar ${formFeedback.className}`}>
                            {formFeedback.msg}
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}
