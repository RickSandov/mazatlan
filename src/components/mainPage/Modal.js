import React from 'react'

export const Modal = ({ id }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <h3> {`Terreno no. ${id}`} </h3>
            </div>
        </div>
    )
}
