import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ProfileCard from '../components/ProfileCard'; // Import ProfileCard component
import { profilesData } from '../data/profiles'; // Assuming profilesData is your profile data

const Home = () => {
  return (
    <div className="relative container mx-auto p-6">
      {/* Navbar with Admin Button */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-10 p-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800">Profile Location App</h2>
        <Link
          to="/admin"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Admin Panel
        </Link>
      </div>

      {/* Content Section */}
      <div className="pt-20"> {/* Added padding-top to avoid navbar overlap */}
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
    </div>
  );
};

export default Home;
