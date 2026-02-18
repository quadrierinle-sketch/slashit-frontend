import React from 'react';
import { Bell, ShieldCheck } from 'lucide-react';
import SlashCard from '../../components/SlashCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top Header */}
      <div className="bg-white p-6 pb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">SlashIt</h1>
          <div className="relative">
            <Bell size={24} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-primary text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm opacity-90">Wallet Balance</span>
            <span className="bg-red-500 text-xs py-1 px-2 rounded text-white font-bold">Unverified</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">₦56,980.00</h2>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm transition">
              Fund Wallet
            </button>
            <button className="flex-1 bg-white text-primary py-2 rounded-lg text-sm font-bold shadow-sm">
              Verify
            </button>
          </div>
          <p className="text-[10px] mt-3 opacity-80 flex items-center gap-1">
            <ShieldCheck size={12} />
            Complete Level 2 verification to unlock full access.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
        <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">All</button>
        <button className="bg-white text-gray-600 border border-gray-200 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">Trending</button>
        <button className="bg-white text-gray-600 border border-gray-200 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">Ending Soon</button>
      </div>

      {/* Active Slashes List */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-dark">Active slashes</h3>
          <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">3 available</span>
        </div>

        {/* Here we use our component multiple times! */}
        <SlashCard 
          title="Carton of Pasta" 
          price="₦12,800" 
          filled={1} 
          total={4} 
          timeLeft="6 days ago" 
          status="Open" 
        />
        
        <SlashCard 
          title="50kg bag of rice" 
          price="₦72,000" 
          filled={3} 
          total={6} 
          timeLeft="3 days ago" 
          status="Open" 
        />

        <SlashCard 
          title="25L Vegetable Oil" 
          price="₦45,000" 
          filled={5} 
          total={10} 
          timeLeft="2 hours left" 
          status="Ending" 
        />
      </div>
    </div>
  );
};

export default Home;