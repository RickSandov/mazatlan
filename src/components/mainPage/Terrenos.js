import React, { useState } from 'react';
import { lots } from '../../data/data';
import { Modal } from './Modal';

export const Terrenos = () => {


    const [state, setstate] = useState({
        modal: false,
        lotId: 0
    });


    const { modal, lotId } = state;

    const hanldeClick = (id, available) => {

        if (available) {
            setstate(
                {
                    modal: true,
                    lotId: id
                }
            );
        };
    }

    const handleClose = () => {
        setstate(
            {
                modal: false,
                lotId: !lotId
            }
        );
    }


    return (
        <div id="terrenos">
            <div className="terrenos-title" >
                <h1>Una inversión que te<strong>cambiará la vida</strong></h1>
            </div>

            <div className="terrenos">
                <div className="terrenos__img">

                    <img src="./assets/images/terreno.jpg" alt="terreno"></img>


                    <svg id="lots-container" className="terrenos__base" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

                        {

                            lots.map(({ id, htmlContent, available }) =>
                            (
                                <g
                                    key={id}
                                    id={id}
                                    className={available ? 'available' : 'unavailable'}
                                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                                    onClick={() => hanldeClick(id, available)}
                                ></g>
                            )
                            )

                        }

                    </svg>
                </div>
            </div>

            {
                modal && <Modal id={lotId} /> 
            }

            {
                modal && <button onClick={handleClose} className="close">close modal</button>
            }

        </div>
    )
}
