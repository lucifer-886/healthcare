import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const LiveLocationTracker = () => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setPosition([latitude, longitude]);
    };

    const error = (err) => {
      console.error(err);
    };

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });
  }, []);

  const icon = L.icon({
    iconUrl: "/path-to-your-marker-icon.png", // You can provide a custom marker icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div>
      <h1>Live Location Tracker</h1>
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LiveLocationTracker;
