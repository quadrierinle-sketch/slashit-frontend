import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      {/* Top Navigation */}
      <div className="mb-6">
        <Link to="/" className="text-dark">
          <ArrowLeft size={24} />
        </Link>
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark mb-2">SlashIt</h1>
        <h2 className="text-xl font-semibold text-dark">Join SlashIt</h2>
        <p className="text-gray-500 text-sm">Create an account to start group buying</p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            placeholder="e.g. 08043289704" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Action Button */}
        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl mt-4 shadow-md hover:bg-opacity-90 transition">
          Create Account
        </button>
      </form>

      {/* Footer Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/signin" className="text-primary font-semibold">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;