import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import { useState } from 'react';

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
      {
        Array.isArray(markers) && markers.map((marker, index) =>{
          return <Marker key={index} position={marker} />
        })
      }
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMaps);
