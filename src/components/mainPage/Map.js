import React from 'react'
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '650px'
};

const center = {
  lat: 23.183562,
  lng: -106.333070
};

// 23.183562, -106.333070

const paths = [
  { lat: 23.184278, lng: -106.335250 },
  { lat: 23.182042, lng: -106.334767 },
  { lat: 23.181312, lng: -106.333576 },
  { lat: 23.183532, lng: -106.331179 },

  { lat: 23.183897, lng: -106.331501 },
  { lat: 23.184075, lng: -106.332198 },
  { lat: 23.185041, lng: -106.331750 },
  { lat: 23.185465, lng: -106.331868 },
  { lat: 23.184321, lng: -106.334636 },


  { lat: 23.184278, lng: -106.335250 }
]

// 23.184278, -106.335250
// 23.182042, -106.334767
// 23.181312, -106.333576
// 23.183453, -106.331351
// 23.183532, -106.331179
// 23.183897, -106.331501
// 23.184075, -106.332198
// 23.185041, -106.331750
// 23.185465, -106.331868
// 23.184656, -106.334271
// 23.184321, -106.334636

const options = {
  fillColor: "tomato",
  fillOpacity: .5,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1
}

const onLoad = polygon => {
  console.log("polygon: ", polygon);
}

// 23.185001, -106.333278

export const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDGTF39Ma6syyiAYn2e_3xuc0ZL_uuaB4I"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        className="map"
      >
        { /* Child components, such as markers, info windows, etc. */}
        <Polygon
          onLoad={onLoad}
          paths={paths}
          options={options}
        />
      </GoogleMap>
    </LoadScript>
  )
}

