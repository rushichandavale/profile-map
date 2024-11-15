import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  // Basic validation for profile data
  if (!profile || !profile.name || !profile.location) {
    return (
      <div className="bg-red-200 p-4 rounded-lg">
        <p className="text-red-600">Profile data is incomplete. Please contact the administrator.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={profile.photo || '/default-profile.jpg'} // Use a fallback image if the photo is missing
        alt={profile.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{profile.name}</h3>
        <p className="text-gray-600 mb-4">{profile.description}</p>
        <div className="flex space-x-4">
          <Link
            to={`/profile/${profile.id}`}
            className="text-indigo-500 hover:text-indigo-700 font-semibold"
          >
            View Profile
          </Link>
          <Link
            to={`/map/${profile.id}`}
            className="text-green-500 hover:text-green-700 font-semibold"
          >
            Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
