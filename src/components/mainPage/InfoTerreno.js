import React from 'react'

export const InfoTerreno = ({ manzana, area = 95, lotNum, available, isCorner = true, type }) => {

    const firstPrice = ((!isCorner ? 677.0833333 : 833.3333) * (area.$numberDecimal ? area.$numberDecimal : area)).toFixed(2);

    const [ints, decs] = firstPrice.split('.');

    const price = `${(+ints).toLocaleString()}.${decs}`;

    const monthly = ((firstPrice - 20000) / 30).toFixed(2);

    const [monthlyInts, monthlyDecs] = monthly.split('.');

    const monthlyPrice = `${(+monthlyInts).toLocaleString()}.${monthlyDecs}`;

    console.log(typeof +monthlyInts);


    return (

        <div className={`lot ${available && 'sold'}`} >
            <h3 className="lot__title">
                Información del Lote
            </h3>

            <p className="lot__field" >Manzana: <strong>{manzana}</strong> </p>
            <p className="lot__field" >Número de lote: <strong>{lotNum}</strong> </p>
            <p className="lot__field area" >Área: <strong>{area.$numberDecimal ? area.$numberDecimal : area}m<sup>2</sup></strong> </p>
            {available && <p className="lot__field">Precio del lote: <strong>${price}mxn</strong></p>}
            {available && (
                <>
                    <p className="lot__field">Enganche: <strong>$20,000.00mxn</strong></p>
                </>
            )}

            {available && (
                <>
                    <p className="lot__field finance">Financiamiento a <u><strong>30 meses sin intereses.</strong></u> </p>
                    <p className="lot__field">Mensualidades de: <strong>${monthlyPrice}mxn</strong></p>
                </>
            )}

            {
                !available && <p className="lot__btn sold">Vendido</p>
            }


            <div className="lot__info">
                <div className="lot__info__item">
                    <p>Red de Agua y Drenaje</p>
                    <svg><use href="./assets/svg/faucet.svg#faucet"></use></svg>
                </div>
                {/* <div className="lot__info__item">
                    <p>Banqueta y Cordonería</p>
                    <svg><use href="./assets/svg/walking.svg#walking"></use></svg>
                </div>
                <div className="lot__info__item">
                    <p>Alumbrado Público</p>
                    <svg><use href="./assets/svg/bulb.svg#bulb"></use></svg>
                </div>
                <div className="lot__info__item">
                    <p>Red eléctrica y Subterránea</p>
                    <svg><use href="./assets/svg/bolt.svg#bolt"></use></svg>
                </div>
                <div className="lot__info__item">
                    <p>Pavimento</p>
                    <svg><use href="./assets/svg/road.svg#road"></use></svg>
                </div> */}
            </div>

            {
                available && <a href="#contacto" className="lot__btn">Pedir información</a>
            }


        </div>
    )
}
