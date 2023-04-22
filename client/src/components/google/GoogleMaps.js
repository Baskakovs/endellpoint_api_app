import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
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
  const [selectedMarker, setSelectedMarker] = React.useState(null)

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
      zoom={11}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        zoomControl: true
      }}
    >
      {Array.isArray(markers) && markers.map((marker, index) => { 
        return (
          <Marker
            key={index}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            onClick={() => setSelectedMarker(marker)}
          >
            {selectedMarker === marker && (
              <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
                <div>
                  <h3>{marker.address_name}</h3>
                  <p>{`${marker.building_number} ${marker.street}`}</p>
                  <p>{marker.postcode}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}

      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMaps);
