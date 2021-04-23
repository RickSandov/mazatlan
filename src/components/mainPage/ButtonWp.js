import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export const ButtonWp = () => {

    const {formFields} = useContext(UserContext);

    const sendWp = () => {
        const wpMsg = formFields.active ? `https://api.whatsapp.com/send/?phone=%2B526181479256&text=Buen día, quisiera pedir informes sobre el terreno número ${formFields.lotId} de la manzana ${formFields.manzana} del proyecto Colinas del Mar` : "https://api.whatsapp.com/send/?phone=%2B526181479256&text=Buen día, quisiera pedir informes sobre el proyecto Colinas del Mar";

        window.open(wpMsg);
    }


    return (
        <span className="btn-wp" onClick={sendWp}>
            <svg><use href="./assets/svg/wp.svg#wp" ></use></svg>
        </span>
    )
}
