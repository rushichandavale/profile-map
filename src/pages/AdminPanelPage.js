// pages/AdminPanelPage.js
import React from 'react';
import AdminPanel from '../components/AdminPanel';
import { profilesData } from '../data/profiles';

const AdminPanelPage = () => (
  <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
    <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Panel</h2>
      <AdminPanel profiles={profilesData} />
    </div>
  </div>
);

export default AdminPanelPage;
