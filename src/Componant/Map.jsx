import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import logo from '../img/imgBg/myLogo.png';

const logoIcon = new L.Icon({
  iconUrl: logo,
  iconSize: [60, 60], 
});


const ZoomToMarker = ({ position, setShowButton }) => {
  const map = useMap();

  const handleZoom = () => {
    map.flyTo(position, 18, { duration: 2 }); 
    setShowButton(false);
  };

  
  useMapEvents({
    moveend: () => {
      const currentCenter = map.getCenter();
      const distance = map.distance(currentCenter, position);
      if (distance > 1000) { 
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    },
  });

  return (
    <Marker position={position} icon={logoIcon} eventHandlers={{ click: handleZoom }}>
      <Popup>M&M Restaurant</Popup>
      <Tooltip>M&M Restaurant</Tooltip>
    </Marker>
  );
};

const Map = () => {
  const mapRef = useRef();
  const [showButton, setShowButton] = useState(false); 

  const defaultPosition = [13.7583265, 100.5349709]; 
  const defaultZoom = 10;


  const backToMarker = () => {
    const map = mapRef.current;
    if (map) {
      map.flyTo(defaultPosition, 18, { duration: 2 }); 
    }
  };

  return (
    <div className="h-96 overflow-hidden shadow-2xl rounded-lg relative">
      <MapContainer
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
        center={defaultPosition}
        zoom={defaultZoom}
        className='relative z-[1]'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomToMarker position={defaultPosition} setShowButton={setShowButton} />
      </MapContainer>

      {showButton && (
        <button
          className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg z-[1000] hover:bg-yellow-600"
          onClick={backToMarker}
        >
          Go to M&M Restaurant
        </button>
      )}
    </div>
  );
};

export default Map;
