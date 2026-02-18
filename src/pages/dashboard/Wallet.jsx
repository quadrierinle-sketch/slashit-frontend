import React from 'react';
import { ShieldAlert, Plus, ListFilter, History } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white p-6 pb-4">
        <h1 className="text-xl font-bold text-dark mb-6">My Wallet</h1>

        {/* Green Wallet Card */}
        <div className="bg-primary text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm opacity-90">Total Balance</span>
            <span className="bg-red-500 text-[10px] py-1 px-2 rounded text-white font-bold flex items-center gap-1">
              <ShieldAlert size={10} /> Unverified
            </span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">₦0.00</h2>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-white text-primary py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition">
              Fund Wallet
            </button>
            <button className="flex-1 bg-white/20 text-white py-3 rounded-xl text-sm font-bold backdrop-blur-md hover:bg-white/30 transition">
              Verify ID
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-6 py-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition h-32">
          <div className="bg-green-50 p-3 rounded-full text-primary">
            <Plus size={24} />
          </div>
          <span className="text-sm font-semibold text-dark">Fund Wallet</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition h-32">
          <div className="bg-blue-50 p-3 rounded-full text-blue-600">
            <ListFilter size={24} />
          </div>
          <span className="text-sm font-semibold text-dark">All Transactions</span>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="px-6">
        <h3 className="font-bold text-dark mb-4">Recent Transactions</h3>
        
        {/* Empty State (As seen in your screenshot) */}
        <div className="bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center border border-gray-100 border-dashed">
          <div className="bg-gray-50 p-4 rounded-full mb-3 text-gray-400">
            <History size={32} />
          </div>
          <h4 className="text-dark font-semibold mb-1">No transactions yet</h4>
          <p className="text-sm text-gray-400">
            Fund your wallet to start joining slashes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;