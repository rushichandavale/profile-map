import React from 'react';
import { useParams } from 'react-router-dom';
import { profilesData } from '../data/profiles'; // Assuming the data is imported

const ProfileDetailsPage = () => {
  const { id } = useParams();
  const profile = profilesData.find(p => p.id === parseInt(id));

  if (!profile) {
    return <p>Profile not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {profile.name}'s Profile
      </h1>

      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        {/* Image */}
        <div className="relative w-48 h-48 mb-4">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-md"
          />
        </div>

        {/* Profile details */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{profile.name}</h2>
        <p className="text-gray-600 text-center mb-4">{profile.description}</p>

        {/* Location (latitude and longitude) */}
        <p className="text-gray-800">
          <strong>Location: </strong>
          {profile.location.latitude}, {profile.location.longitude}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
