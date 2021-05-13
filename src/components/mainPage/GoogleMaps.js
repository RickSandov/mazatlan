import React from 'react'
import { Map } from './Map'

export const GoogleMaps = () => {
    return (
        <div className="google-maps" id="map">
             <div className="terrenos-title" >
                <h3>Ubicación</h3>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.8169480619783!2d-106.333936255881!3d23.183558388662895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDExJzA0LjciTiAxMDbCsDIwJzAwLjQiVw!5e0!3m2!1ses!2smx!4v1620321611557!5m2!1ses!2smx" width="100%" height="500"  loading="lazy" title="map"></iframe> */}
            <Map />
        </div>
    )
}
