import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ProfileCard from '../components/ProfileCard'; // Import ProfileCard component
import { profilesData } from '../data/profiles'; // Assuming profilesData is your profile data

const Home = () => {
  return (
    <div className="relative container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to Profile Location App</h2>

      {/* Admin Panel Button positioned at the top right */}
      <div className="absolute top-4 right-4">
        <Link
          to="/admin"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Go to Admin Panel
        </Link>
      </div>

      {/* Display Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {profilesData.map((profile) => (
          <div
            key={profile.id}
            className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl rounded-lg bg-white"
          >
            <ProfileCard key={profile.id} profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
