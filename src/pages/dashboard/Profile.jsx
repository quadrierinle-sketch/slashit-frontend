import React from 'react';
import { User, ChevronRight, Shield, CreditCard, Settings, LogOut, HelpCircle } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white p-6 mb-2">
        <h1 className="text-xl font-bold text-dark mb-6">My Profile</h1>
        
        {/* User Info Card */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <User size={32} />
          </div>
          <div>
            <h2 className="font-bold text-lg text-dark">Erinle Quadri</h2>
            <p className="text-gray-500 text-sm">quadrierinle@gmail.com</p>
            <button className="text-primary text-xs font-semibold mt-1">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* Verification Status Card */}
      <div className="mx-6 mt-4 bg-white p-4 rounded-xl shadow-sm border border-red-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-red-50 p-2 rounded-full text-red-500">
            <Shield size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-dark">Identity Unverified</h3>
            <p className="text-xs text-gray-500">Complete verification to remove limits</p>
          </div>
        </div>
        <button className="bg-dark text-white text-xs px-3 py-2 rounded-lg">
          Verify
        </button>
      </div>

      {/* Settings List */}
      <div className="mt-6 px-6 flex flex-col gap-3">
        
        {/* Menu Item: Wallet */}
        <div className="bg-white p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <CreditCard size={20} className="text-gray-400" />
            <span className="text-sm font-medium text-dark">Payment Methods</span>
          </div>
          <ChevronRight size={16} className="text-gray-300" />
        </div>

        {/* Menu Item: Settings */}
        <div className="bg-white p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <Settings size={20} className="text-gray-400" />
            <span className="text-sm font-medium text-dark">App Settings</span>
          </div>
          <ChevronRight size={16} className="text-gray-300" />
        </div>

        {/* Menu Item: Support */}
        <div className="bg-white p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <HelpCircle size={20} className="text-gray-400" />
            <span className="text-sm font-medium text-dark">Help & Support</span>
          </div>
          <ChevronRight size={16} className="text-gray-300" />
        </div>

        {/* Menu Item: Logout */}
        <div className="bg-white p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-red-50 transition mt-4">
          <div className="flex items-center gap-3">
            <LogOut size={20} className="text-red-500" />
            <span className="text-sm font-medium text-red-500">Log Out</span>
          </div>
        </div>

      </div>
      
      <p className="text-center text-xs text-gray-300 mt-8">Version 1.0.0</p>
    </div>
  );
};

export default Profile;