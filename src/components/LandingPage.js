import React from 'react';

export default function LandingPage({ onLoginSuccess }) {
  const handleSignIn = () => {
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 min-h-screen text-gray-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Glowing Title Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-6 rounded-xl mb-16 max-w-4xl mx-auto shadow-2xl shadow-primary-500/25 border border-primary-400/20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            The Alliance Mastermind
          </h1>
          <p className="text-lg mt-2 text-primary-100">
            Unlock Your Creative Genius
          </p>
        </div>

        {/* Glowing Sign In Button */}
        <button 
          onClick={handleSignIn}
          className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 cursor-pointer shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transform hover:scale-105 border border-primary-400/20"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
