import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useParams } from 'react-router-dom';
import { profilesData } from '../data/profiles'; 

mapboxgl.accessToken = 'pk.eyJ1IjoicnVzaGljaGFuZGF2YWxlIiwiYSI6ImNtM2ozbmpobDA4ZnYyanIyMWFjcnlidTcifQ.WU429gj7K4WW0jlqW8Mbuw';

const MapPage = () => {
  const { id } = useParams(); 
  const profile = profilesData.find((p) => p.id === parseInt(id)); 

  const mapContainer = useRef(null);

  useEffect(() => {
    
    const defaultCoordinates = { latitude: 40.7128, longitude: -74.0060 }; // New York

    
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

    
    return () => map.remove();
  }, [profile]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Map View of {profile?.name}'s Location</h2>
      <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default MapPage;
