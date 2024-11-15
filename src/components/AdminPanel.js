import React, { useState } from 'react';

const AdminPanel = ({ profiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
  });
  const [profileList, setProfileList] = useState(profiles);
  const [editingProfile, setEditingProfile] = useState(null); // Holds the profile being edited

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

  const startEditing = (profile) => {
    setEditingProfile(profile);
    setNewProfile({
      name: profile.name,
      description: profile.description,
      latitude: profile.location.latitude,
      longitude: profile.location.longitude,
    });
  };

  const saveEditedProfile = () => {
    setProfileList((prev) =>
      prev.map((profile) =>
        profile.id === editingProfile.id
          ? {
              ...profile,
              name: newProfile.name,
              description: newProfile.description,
              location: {
                latitude: parseFloat(newProfile.latitude),
                longitude: parseFloat(newProfile.longitude),
              },
            }
          : profile
      )
    );
    setEditingProfile(null);
    setNewProfile({
      name: '',
      description: '',
      latitude: '',
      longitude: '',
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Add or Edit Profile Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">
          {editingProfile ? 'Edit Profile' : 'Add New Profile'}
        </h3>
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
          onClick={editingProfile ? saveEditedProfile : addProfile}
          className={`${
            editingProfile ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white p-3 rounded-lg mt-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          {editingProfile ? 'Save Changes' : 'Add Profile'}
        </button>
        {editingProfile && (
          <button
            onClick={() => {
              setEditingProfile(null);
              setNewProfile({
                name: '',
                description: '',
                latitude: '',
                longitude: '',
              });
            }}
            className="mt-2 bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-lg w-full"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Manage Profiles Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Manage Profiles</h3>
        <ul>
          {profileList.map((profile) => (
            <li
              key={profile.id}
              className="flex justify-between items-center p-3 mb-3 bg-white rounded-lg shadow-sm hover:bg-gray-50"
            >
              <span className="text-lg font-medium">{profile.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditing(profile)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProfile(profile.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;

