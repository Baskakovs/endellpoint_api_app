import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import { useState, useEffect } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 51.507602,
  lng: -0.127816
};


function GoogleMaps() {
  const [markers, setMarkers] = useState([])
  useEffect(() => {
    fetch("/locations", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setMarkers(data)
        })
      }
    })

  }, [])

  console.log(markers, "markers")


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA5D-JAB0rZ2WVfMRgPS1gnsG7g9ciVH9g"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9.5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {Array.isArray(markers) && markers.map((marker, index) => { 
  return !marker.show ? null : (
    <Marker key={index} position={{ lat: marker.latitude, lng: marker.longitude }} />
  )
})}

      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMaps);
