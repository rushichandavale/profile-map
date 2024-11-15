// src/components/AdminPanel.js
import React, { useState } from 'react';

const AdminPanel = ({ profiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
  });

  const [profileList, setProfileList] = useState(profiles);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addProfile = () => {
    const newProfileObj = {
      id: profileList.length + 1,
      name: newProfile.name,
      description: newProfile.description,
      location: {
        latitude: parseFloat(newProfile.latitude),
        longitude: parseFloat(newProfile.longitude),
      },
    };
    setProfileList((prev) => [...prev, newProfileObj]);
    setNewProfile({
      name: '',
      description: '',
      latitude: '',
      longitude: '',
    });
  };

  const deleteProfile = (id) => {
    setProfileList(profileList.filter((profile) => profile.id !== id));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Add New Profile Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Add New Profile</h3>
        <input
          type="text"
          name="name"
          value={newProfile.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border-2 p-3 rounded-md mb-3 w-full focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="description"
          value={newProfile.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border-2 p-3 rounded-md mb-3 w-full focus:ring-2 focus:ring-indigo-500"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="latitude"
            value={newProfile.latitude}
            onChange={handleInputChange}
            placeholder="Latitude"
            className="border-2 p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="longitude"
            value={newProfile.longitude}
            onChange={handleInputChange}
            placeholder="Longitude"
            className="border-2 p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={addProfile}
          className="bg-indigo-600 text-white p-3 rounded-lg mt-4 w-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Profile
        </button>
      </div>

      {/* Manage Profiles Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Manage Profiles</h3>
        <ul>
          {profileList.map((profile) => (
            <li key={profile.id} className="flex justify-between items-center p-3 mb-3 bg-white rounded-lg shadow-sm hover:bg-gray-50">
              <span className="text-lg font-medium">{profile.name}</span>
              <button
                onClick={() => deleteProfile(profile.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
