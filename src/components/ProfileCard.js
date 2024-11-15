import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  if (!profile || !profile.name || !profile.location) {
    return (
      <div className="bg-red-200 p-4 rounded-lg">
        <p className="text-red-600">Profile data is incomplete.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-100  hover:shadow-lg  mx-auto">
      {/* Profile Image */}
      <div className="flex justify-center mt-4">
        <img
          src={profile.photo || '/default-profile.jpg'} // Fallback image
          alt={profile.name}
          className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500 shadow-md"
        />
      </div>

      {/* Profile Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">{profile.name}</h3>
        <p className="text-sm text-gray-600 mb-2 text-center">{profile.description}</p>

        {/* Links */}
        <div className="flex justify-around mt-2">
          <Link
            to={`/profile/${profile.id}`}
            className="bg-indigo-500 text-white px-3 py-1 text-sm rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
          >
            View Profile
          </Link>
          <Link
            to={`/map/${profile.id}`}
            className="bg-green-500 text-white px-3 py-1 text-sm rounded-lg shadow hover:bg-green-700 transition-all duration-300"
          >
            Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
