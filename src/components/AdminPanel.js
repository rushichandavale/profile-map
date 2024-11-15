import React, { useState } from 'react';

const AdminPanel = ({ profiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
  });
  const [profileList, setProfileList] = useState(profiles);
  const [editingProfile, setEditingProfile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setNewProfile({ name: '', description: '', latitude: '', longitude: '' });
    setEditingProfile(null);
  };

  const addOrEditProfile = () => {
    const updatedProfile = {
      ...editingProfile,
      id: editingProfile ? editingProfile.id : profileList.length + 1,
      name: newProfile.name,
      description: newProfile.description,
      location: {
        latitude: parseFloat(newProfile.latitude),
        longitude: parseFloat(newProfile.longitude),
      },
    };

    setProfileList((prev) =>
      editingProfile
        ? prev.map((profile) =>
            profile.id === editingProfile.id ? updatedProfile : profile
          )
        : [...prev, updatedProfile]
    );

    resetForm();
  };

  const deleteProfile = (id) => {
    setProfileList((prev) => prev.filter((profile) => profile.id !== id));
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

  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Form Section */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          {editingProfile ? 'Edit Profile' : 'Add New Profile'}
        </h3>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2 sm:p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="description"
            value={newProfile.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border p-2 sm:p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="number"
              name="latitude"
              value={newProfile.latitude}
              onChange={handleInputChange}
              placeholder="Latitude"
              className="border p-2 sm:p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              name="longitude"
              value={newProfile.longitude}
              onChange={handleInputChange}
              placeholder="Longitude"
              className="border p-2 sm:p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={addOrEditProfile}
          className={`mt-4 w-full py-2 sm:py-3 rounded-lg text-white ${
            editingProfile
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          {editingProfile ? 'Save Changes' : 'Add Profile'}
        </button>
        {editingProfile && (
          <button
            onClick={resetForm}
            className="mt-2 w-full py-2 sm:py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Profiles List Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Manage Profiles</h3>
        <ul className="space-y-3">
          {profileList.map((profile) => (
            <li
              key={profile.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 space-y-2 sm:space-y-0"
            >
              <span className="text-lg font-medium">{profile.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditing(profile)}
                  className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProfile(profile.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
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
