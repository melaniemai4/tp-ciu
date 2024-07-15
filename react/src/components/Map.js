import React, { useState } from 'react';

const Map = () => {
  const [map, setMap] = useState(null);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  return (
    <GoogleMap
      id="map"
      onLoad={handleMapLoad}
      center={{ lat: 37.7749, lng: -122.4194 }}
      zoom={12}
    >
      {map && (
        <Marker
          position={{ lat: 37.7749, lng: -122.4194 }}
          icon={{
            url: 'https://maps.google.com/mapfiles/kml/shapes/placemark_circle.png',
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      )}
    </GoogleMap>
  );
};

export default Map;
