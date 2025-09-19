import React, { createContext, useContext, useState, useEffect } from 'react';
import { validateCredentials, findClientById } from './clientData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('alliance_user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('alliance_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    const user = validateCredentials(email, password);
    if (user) {
      // Update last login time
      user.lastLogin = new Date().toISOString();
      
      // Save to localStorage
      localStorage.setItem('alliance_user', JSON.stringify(user));
      
      // Update state
      setCurrentUser(user);
      setIsAuthenticated(true);
      
      return { success: true, user, redirectTo: user.id };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('alliance_user');
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  // Get user by ID (for coach access)
  const getUserById = (id) => {
    return findClientById(id);
  };

  // Check if current user is a coach (for future role-based access)
  const isCoach = () => {
    // For now, we'll implement a simple coach check
    // In the future, this could be based on user role or email domain
    return currentUser && currentUser.id === 'coach';
  };

  // Update user profile
  const updateUserProfile = (updates) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      setCurrentUser(updatedUser);
      localStorage.setItem('alliance_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    currentUser,
    isAuthenticated,
    isLoading,
    login,
    logout,
    getUserById,
    isCoach,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
