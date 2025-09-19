import React, { useState } from 'react';
import { useAuth } from '../features/auth/AuthContext';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!hasAcceptedTerms) {
      setError('You must accept the Terms & Conditions to continue.');
      return;
    }
    
    setIsLoading(true);
    setError('');

    const result = login(email, password);
    
    if (result.success) {
      onLoginSuccess();
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Sign In</h2>
          <p className="mt-2 text-gray-300">Peak Performance Blueprint</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Terms and Conditions Section */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-3">
            <h3 className="text-sm font-semibold text-white mb-2">Terms & Conditions</h3>
            <div className="text-xs text-gray-300 space-y-2">
              <p className="font-medium">By logging in, you agree that:</p>
              <ul className="space-y-1 ml-2">
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>The dashboards, tools, and methods provided are the intellectual property of The Alliance and may not be reproduced, copied, or distributed in any form.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>You are accessing your own private data only; you agree not to attempt to access or share others' information.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>You will keep your login credentials secure and confidential.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>You will not use any content from this platform for commercial or public purposes without written permission.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>The Alliance takes reasonable steps to protect your data, but you are responsible for how you store, use, and safeguard it once accessed.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="terms-checkbox"
                checked={hasAcceptedTerms}
                onChange={(e) => setHasAcceptedTerms(e.target.checked)}
                className="w-4 h-4 text-pink-600 bg-gray-700 border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
              />
              <label htmlFor="terms-checkbox" className="text-xs text-gray-300 cursor-pointer">
                I have read and agree to the Terms & Conditions.
              </label>
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading || !hasAcceptedTerms}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
