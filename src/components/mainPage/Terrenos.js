import React, { useState } from 'react';
import { InfoTerreno } from './InfoTerreno';
import { useFetch } from '../../hooks/useFetch';

export const Terrenos = () => {


    const [state, setstate] = useState({
        lotId: 0,
        manzana: 0,
        area: 0,
        available: true
    });

    const [isSelected, setIsSelected] = useState(null);

    const { data } = useFetch('http://189.155.227.107:3000/api/lot');

    const { lotId, manzana, area, available } = state;


    const hanldeClick = (lotId, id, manzana, area, available) => {

        setstate(
            {
                lotId,
                manzana,
                area,
                available
            }
        );

        const lote = data?.lots.find(lot => lot._id === id)

        lote.selected = true;

        if (isSelected) {
            data.lots.find(lot => lot._id === isSelected).selected = false
        }

        setIsSelected(lote._id);

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

                            data?.lots.map(({ _id, htmlContent, available, manzana, selected, planId, area }) =>
                            (
                                <g
                                    key={`${manzana}-${planId}-${_id}`}
                                    className={`${available ? 'available' : 'unavailable'} ${selected && 'selected'}`}
                                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                                    onClick={() => hanldeClick(planId, _id, manzana, area, available)}
                                ></g>
                            )
                            )

                        }

                    </svg>
                </div>

                <div className="terrenos__info">
                    {
                        !isSelected ? <h3 className="select-lot" >Selecciona un terreno para ver su información...</h3> : <InfoTerreno manzana={manzana} area={area} lotNum={lotId} available={available} ></InfoTerreno>
                    }
                </div>


            </div>

        </div>
    )
}
