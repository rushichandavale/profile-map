import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ location }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Default coordinates if location is missing or invalid
    const defaultCoordinates = { latitude: 40.7128, longitude: -74.0060 }; // New York

    const latitude = location?.latitude ?? defaultCoordinates.latitude;
    const longitude = location?.longitude ?? defaultCoordinates.longitude;

    if (isNaN(latitude) || isNaN(longitude)) {
      console.error("Invalid coordinates:", { latitude, longitude });
      return;
    }

    // Initialize the Mapbox map
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10,
    });

    
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    
    return () => map.remove();
  }, [location]);

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default MapComponent;
