import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useParams } from 'react-router-dom';
import { profilesData } from '../data/profiles'; // Import the profiles data

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapPage = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const profile = profilesData.find((p) => p.id === parseInt(id)); // Find the profile based on ID

  const mapContainer = useRef(null);

  useEffect(() => {
    // Default coordinates if location is missing or invalid
    const defaultCoordinates = { latitude: 40.7128, longitude: -74.0060 }; // New York

    // Get coordinates from the profile, or use default if not available
    const latitude = profile?.location?.latitude ?? defaultCoordinates.latitude;
    const longitude = profile?.location?.longitude ?? defaultCoordinates.longitude;

    if (isNaN(latitude) || isNaN(longitude)) {
      console.error("Invalid coordinates:", { latitude, longitude });
      return;
    }

    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10,
    });

    // Add a marker to the map at the specified location
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    // Clean up the map when the component is unmounted
    return () => map.remove();
  }, [profile]); // Re-run the effect if the profile changes

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Map View of {profile?.name}'s Location</h2>
      <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default MapPage;
