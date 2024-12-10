"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import React, { useState } from "react";

import { Anchor, UnstyledButton } from "@mantine/core";

interface GoogleMapProps {
  apiKey: string;
}

const MapComponent: React.FC<GoogleMapProps> = ({ apiKey }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 23.685, lng: 90.3563 });
  const [mapZoom, setMapZoom] = useState(7);

  const openGoogleMaps = () => {
    setMapCenter({ lat: 23.8135, lng: 90.4242 });
    setMapZoom(15);
  };
  return (
    <>
      <UnstyledButton onClick={openGoogleMaps} fz={"xs"} c={"#15AABF"} pb={5}>
        House: 17, Road: 3/2, Block: D, Haque Residential Society, Bashabo,
        Dhaka-1214
      </UnstyledButton>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          id="street-view"
          mapContainerStyle={{
            height: "25vh",
            width: "100%",
          }}
          center={mapCenter}
          zoom={mapZoom}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapComponent;
