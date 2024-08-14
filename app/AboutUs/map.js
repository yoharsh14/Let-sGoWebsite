import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];

const Map = () => {
  const [center, setCenter] = useState({ lat: 28.445223, lng: 77.033129 });
  const [zoom, setZoom] = useState(10);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "75%", height: "200px", margin:"2rem"}}
      center={center}
      zoom={zoom}
    >
      {/* Add markers, polygons, etc. here */}
    </GoogleMap>
  );
};

export default Map;
