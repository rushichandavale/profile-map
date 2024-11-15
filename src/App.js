import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileList from './pages/ProfileList';
import AdminPanelPage from './pages/AdminPanelPage';
import ProfileDetailsPage from './pages/ProfileDetailsPage';
import MapPage from './pages/MapPage'; 

const App = () => {
  return (
    
      <div className="p-6">
        <h1 className="text-3xl mb-4 text-center">Profile Location App</h1>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/profiles" element={<ProfileList />} />
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="/profile/:id" element={<ProfileDetailsPage />} />
          <Route path="/map/:id" element={<MapPage />} /> 
        </Routes>
      </div>
    
  );
};

export default App;
