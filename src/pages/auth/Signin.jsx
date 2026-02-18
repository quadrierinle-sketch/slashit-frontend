import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signin = () => {
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
        <h1 className="text-2xl font-bold text-dark mb-2">Welcome back!</h1>
        <p className="text-gray-500 text-sm">Sign in to continue slashing prices together</p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col gap-4">
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
        <Link to="/" className="block">
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl mt-4 shadow-md hover:bg-opacity-90 transition">
            Sign In
          </button>
        </Link>
      </form>

      {/* Footer Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-primary font-semibold">
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default Signin;