import React, { useState, useEffect } from 'react';
import { useClientData } from '../context/ClientDataContext';

const ChatbotDebug = () => {
  const { allClientData, loading } = useClientData();
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    // Debug information
    setDebugInfo({
      allClientDataLength: allClientData?.length || 0,
      loading: loading,
      firstClient: allClientData?.[0] || 'No data',
      clientIds: allClientData?.map(c => c.id) || [],
      hasClientData: !!allClientData,
      clientDataKeys: allClientData?.[0] ? Object.keys(allClientData[0]) : []
    });
  }, [allClientData, loading]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-900 mb-6">🐛 Chatbot Debug Information</h1>
      
      <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
        <h2 className="text-xl font-semibold text-red-800 mb-4">Debug Status</h2>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
            <span><strong>Loading State:</strong> {debugInfo.loading ? 'Loading...' : 'Loaded'}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            <span><strong>Client Data Available:</strong> {debugInfo.hasClientData ? 'Yes' : 'No'}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
            <span><strong>Number of Clients:</strong> {debugInfo.allClientDataLength}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
            <span><strong>First Client:</strong> {JSON.stringify(debugInfo.firstClient, null, 2)}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
            <span><strong>Client IDs:</strong> {debugInfo.clientIds.join(', ')}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></span>
            <span><strong>Data Structure:</strong> {debugInfo.clientDataKeys.join(', ')}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Environment Check</h2>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            <span><strong>OpenAI API Key:</strong> {process.env.REACT_APP_OPENAI_API_KEY ? 'Available' : 'Not Found'}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            <span><strong>API Key Length:</strong> {process.env.REACT_APP_OPENAI_API_KEY ? process.env.REACT_APP_OPENAI_API_KEY.length : 0} characters</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            <span><strong>Node Environment:</strong> {process.env.NODE_ENV}</span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h2 className="text-xl font-semibold text-green-800 mb-4">Raw Client Data</h2>
        
        <pre className="bg-white p-4 rounded border text-xs overflow-auto max-h-96">
          {JSON.stringify(allClientData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ChatbotDebug;
