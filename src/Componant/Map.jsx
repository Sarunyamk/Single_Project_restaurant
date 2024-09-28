import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

import logo from '../img/imgBg/myLogo.png';


const logoIcon = new L.Icon({
  iconUrl: logo,
  iconSize: [60, 60], 
});


const ZoomToMarker = ({ position }) => {
  const map = useMap();
  
  const handleZoom = () => {
    map.flyTo(position, 18, { duration: 2 }); 
  };

  return (
    <Marker position={position} icon={logoIcon} eventHandlers={{ click: handleZoom }}>
      <Popup>M&M Restaurant</Popup>
      <Tooltip>M&M Restaurant</Tooltip>
    </Marker>
  );
};

const Map = () => {
  const mapRef = useRef();

  const defaultPosition = [13.7583265, 100.5349709]; 
  const defaultZoom = 10; 
  return (
    <div className="h-96 overflow-hidden">
      <MapContainer
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
        center={defaultPosition}
        zoom={defaultZoom}
      >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomToMarker position={defaultPosition} />
      </MapContainer>
    </div>
  );
};
export default Map;
