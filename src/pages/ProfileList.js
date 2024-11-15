import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import { profilesData } from '../data/profiles';

const ProfileList = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredProfiles, setFilteredProfiles] = useState(profilesData); 
  const [loading, setLoading] = useState(false);

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase(); 
    setSearchTerm(term);

    
    setLoading(true);
    setTimeout(() => {
      const filtered = profilesData.filter(profile =>
        profile.name.toLowerCase().includes(term) ||
        profile.description.toLowerCase().includes(term)
      );
      setFilteredProfiles(filtered);
      setLoading(false);
    }, 500); 
  };

  useEffect(() => {
  
    setLoading(true);
    setTimeout(() => {
      setFilteredProfiles(profilesData);
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Explore Our Profiles
      </h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Profiles..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
