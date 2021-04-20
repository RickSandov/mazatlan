import React from 'react'

export const InfoTerreno = ({ manzana, area, lotNum, available }) => {
    return (
        <div className="lot">
            <h3 className="lot__title">
                Información del Terreno
            </h3>

            <p className="lot__field" >Manzana: <strong>{manzana}</strong> </p>
            <p className="lot__field" >Número de lote: <strong>{lotNum}</strong> </p>
            <p className="lot__field area" >Área: <strong>{area.$numberDecimal ? area.$numberDecimal : area  }m<sup>2</sup></strong> </p>

            <p className="lot__field svcs">Incluye todos los servicios</p>

            {
                available ? <a href="#contacto" className="lot__btn">Pedir información</a> : <p className="lot__btn sold">Vendido</p>
            }
        </div>
    )
}
