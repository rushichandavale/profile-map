import React from 'react';
import { useParams } from 'react-router-dom';
import { profilesData } from '../data/profiles';

const ProfileDetailsPage = () => {
  const { id } = useParams();
  const profile = profilesData.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <p className="text-center text-red-600">Profile not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{profile.name}'s Profile</h1>

      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        {/* Profile Image */}
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-md mb-4"
        />

        {/* Profile Info */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{profile.name}</h2>
        <p className="text-gray-600 text-center mb-4">{profile.description}</p>

        {/* Location */}
        <p className="text-gray-800 mb-2">
          <strong>Location:</strong> {profile.location.latitude}, {profile.location.longitude}
        </p>

        {/* Contact Info */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner w-full md:w-2/3 lg:w-1/2 text-left">
          <h3 className="text-lg font-semibold mb-2">Contact Information:</h3>
          <p>
            <strong>Email:</strong> {profile.contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.contact.phone}
          </p>
        </div>

        {/* Interests */}
        <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-inner w-full md:w-2/3 lg:w-1/2 text-left">
          <h3 className="text-lg font-semibold mb-2">Interests:</h3>
          <ul className="list-disc list-inside">
            {profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
