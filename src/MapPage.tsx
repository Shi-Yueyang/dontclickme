import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const MapPage: React.FC = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Location
      </Typography>
      {position ? (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', iconSize: [38, 95] })}>
            <Popup>
              You are here!
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <Typography variant="body1">Loading your location...</Typography>
      )}
    </Container>
  );
};

export default MapPage;