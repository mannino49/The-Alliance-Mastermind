import React, { useState } from 'react';
import { AuthProvider, useAuth } from './features/auth/AuthContext';
import { ClientDataProvider } from './shared/context/ClientDataContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/dashboards/main/LandingPage';
import LoginPage from './components/LoginPage';
import PersonalHomepage from './components/dashboards/enhanced/PersonalHomepage';
import RickDashboard from './components/dashboards/clients/RickDashboard';
import BrianDashboard from './components/dashboards/clients/BrianDashboard';
import AmityDashboard from './components/dashboards/clients/AmityDashboard';
import StephanieDashboard from './components/dashboards/clients/StephanieDashboard';
import RickSessinghausDashboard from './components/dashboards/clients/RickSessinghausDashboard';
import BlairDashboard from './components/dashboards/clients/BlairDashboard';
import RobDashboard from './components/dashboards/clients/RobDashboard';
import MichaelDashboard from './components/dashboards/clients/MichaelDashboard';
import JasonDashboard from './components/dashboards/clients/JasonDashboard';
import JamesDashboard from './components/dashboards/clients/JamesDashboard';
import GeofDashboard from './components/dashboards/clients/GeofDashboard';
import AnatoliyDashboard from './components/dashboards/clients/AnatoliyDashboard';
import SandraDashboard from './components/dashboards/clients/SandraDashboard';
import BruceBowserDashboard from './components/dashboards/clients/BruceBowserDashboard';
import CourtneyDashboard from './components/dashboards/clients/CourtneyDashboard';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('landing');
  const { currentUser, isAuthenticated, logout } = useAuth();

  // Simple ClientDashboardHeader component
  const ClientDashboardHeader = ({ clientName }) => (
    <div className="bg-gradient-to-r from-dark-800 to-dark-700 text-white p-6 mb-6 border-b border-dark-600">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">{clientName}'s Dashboard</h1>
        <p className="text-gray-300 mt-2">Flow Mastermind Progress & Insights</p>
      </div>
    </div>
  );


  // Simple navigation component
  const Navigation = () => {
    
    return (
      <nav className="bg-gradient-to-r from-dark-900 to-dark-800 text-white p-4 border-b border-dark-700 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-primary-100">The Alliance Mastermind</div>
          <div className="flex space-x-4">
            <button 
              onClick={() => setCurrentPage('landing')}
              className={`px-3 py-2 rounded transition-colors ${currentPage === 'landing' ? 'bg-primary-700 text-white' : 'hover:bg-dark-700 text-gray-200'}`}
            >
              Home
            </button>
            {isAuthenticated && (
              <>
                <button 
                  onClick={() => {
                    setCurrentPage('homepage');
                  }}
                  className={`px-3 py-2 rounded transition-colors ${currentPage === 'homepage' ? 'bg-primary-700 text-white' : 'hover:bg-dark-700 text-gray-200'}`}
                >
                  Home
                </button>
                {currentPage !== 'homepage' && currentPage !== 'landing' && (
                  <button 
                    onClick={() => setCurrentPage('homepage')}
                    className="px-3 py-2 rounded hover:bg-dark-700 text-gray-200 transition-colors"
                  >
                    Back to Home
                  </button>
                )}
              </>
            )}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Welcome, {currentUser?.firstName}</span>
                <button 
                  onClick={logout}
                  className="px-3 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setCurrentPage('login')}
                className="px-3 py-2 rounded bg-pink-600 hover:bg-pink-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  };



  // Render the appropriate page based on state
  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage onLoginSuccess={() => {
          setCurrentPage('homepage');
        }} />;
      case 'homepage':
        return (
          <ProtectedRoute>
            <PersonalHomepage onViewFullDashboard={() => {
              // Take user directly to their own detailed dashboard
              setCurrentPage(currentUser.id);
            }} />
          </ProtectedRoute>
        );
      case 'rick':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Rick" />
              <RickDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'brian':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Brian" />
              <BrianDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'amity':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Amity" />
              <AmityDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'stephanie':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Stephanie" />
              <StephanieDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'ricksessinghaus':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Rick Sessinghaus" />
              <RickSessinghausDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'blair':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Blair Lukan" />
              <BlairDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'rob':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Rob Finlay" />
              <RobDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'michael':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Michael Whitaker" />
              <MichaelDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'jason':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Jason Tadros" />
              <JasonDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'james':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="James Crowe" />
              <JamesDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'geof':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Geoffrey Garth" />
              <GeofDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'anatoliy':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Anatoliy Otchkovskiy" />
              <AnatoliyDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'sandra':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Sandra Ozols" />
              <SandraDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'bruce':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Bruce Bowser" />
              <BruceBowserDashboard />
            </div>
          </ProtectedRoute>
        );
      case 'courtney':
        return (
          <ProtectedRoute>
            <div>
              <ClientDashboardHeader clientName="Courtney Karnes" />
              <CourtneyDashboard />
            </div>
          </ProtectedRoute>
        );
      default:
        return <LandingPage onLoginSuccess={() => setCurrentPage('login')} />;
    }
  };


  return (
    <div className="App bg-dark-900 min-h-screen">
      <Navigation />
      <div className="pt-4 pb-12">
        {renderPage()}
      </div>
    </div>
  );
}

// Wrap the app with AuthProvider and ClientDataProvider
function App() {
  return (
    <AuthProvider>
      <ClientDataProvider>
        <AppContent />
      </ClientDataProvider>
    </AuthProvider>
  );
}

export default App;
