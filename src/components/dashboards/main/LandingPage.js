import React from 'react';

export default function LandingPage({ onLoginSuccess }) {
  const handleSignIn = () => {
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Glowing Title Banner */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-6 rounded-xl mb-16 max-w-4xl mx-auto shadow-2xl shadow-pink-500/25 border border-pink-400/20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            The Alliance Mastermind
          </h1>
          <p className="text-lg mt-2 text-pink-100">
            Peak Performance Blueprint
          </p>
        </div>

        {/* Glowing Sign In Button */}
        <button 
          onClick={handleSignIn}
          className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 cursor-pointer shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transform hover:scale-105 border border-pink-400/20"
        >
          Sign In
        </button>
      </div>

      {/* Copyright Footer */}
      <footer className="py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 The Alliance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
