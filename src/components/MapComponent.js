import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ location, markerColor = 'blue' }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Default coordinates if location is missing or invalid
    const defaultCoordinates = { latitude: 40.7128, longitude: -74.0060 }; // New York

    // Validate coordinates or fall back to default
    const latitude = location?.latitude ?? defaultCoordinates.latitude;
    const longitude = location?.longitude ?? defaultCoordinates.longitude;

    if (isNaN(latitude) || isNaN(longitude)) {
      console.error("Invalid coordinates:", { latitude, longitude });
      return; // Exit if coordinates are invalid
    }

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10,
    });

    // Create a custom marker element (colored circle)
    const markerElement = document.createElement('div');
    markerElement.style.width = '40px';
    markerElement.style.height = '40px';
    markerElement.style.backgroundColor = markerColor; // Set the color of the marker
    markerElement.style.borderRadius = '50%'; // Make it a circle
    markerElement.style.border = '2px solid white'; // Optional: add a border to make it stand out

    // Create a new marker with the custom colored circle
    new mapboxgl.Marker(markerElement)
      .setLngLat([longitude, latitude])
      .addTo(map);

    // Clean up map resources on component unmount
    return () => map.remove();
  }, [location, markerColor]);

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default MapComponent;
