import React, { useState } from 'react';
import { useClientData } from '../context/ClientDataContext';
import ClientChatbot from './ClientChatbot';

const ChatbotTest = () => {
  const { allClientData } = useClientData();
  const [selectedClient, setSelectedClient] = useState('rickwatkin');

  const clientOptions = allClientData.map(client => ({
    value: client.id,
    label: `${client.name} (${client.archetype})`
  }));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">🤖 Chatbot Integration Test</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Test Configuration</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Client to Test:
          </label>
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {clientOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-medium text-blue-800 mb-2">Selected Client Data:</h3>
          {allClientData.find(client => client.id === selectedClient) && (
            <div className="text-sm text-blue-700">
              <p><strong>Name:</strong> {allClientData.find(client => client.id === selectedClient).name}</p>
              <p><strong>Archetype:</strong> {allClientData.find(client => client.id === selectedClient).archetype}</p>
              <p><strong>Flow Readiness:</strong> {allClientData.find(client => client.id === selectedClient).flowReadinessScore}/100</p>
              <p><strong>Leadership Leverage:</strong> {allClientData.find(client => client.id === selectedClient).leadershipLeverageScore}/100</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">OpenAI API Status</h2>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
            <span>Environment variable check: {process.env.REACT_APP_OPENAI_API_KEY ? '✅ Available' : '❌ Not found'}</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            <span>API Key length: {process.env.REACT_APP_OPENAI_API_KEY ? process.env.REACT_APP_OPENAI_API_KEY.length : 0} characters</span>
          </div>
          
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
            <span>Client data available: {allClientData.length}/15 clients</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> If the OpenAI API key is not found, the chatbot will fall back to mock responses. 
            Create a <code>.env</code> file in your project root with <code>REACT_APP_OPENAI_API_KEY=your_key_here</code>
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Chatbot Test</h2>
        <p className="text-gray-600 mb-4">
          Test the chatbot with the selected client. Try asking questions like:
        </p>
        <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
          <li>"How am I performing compared to other clients?"</li>
          <li>"What are my key areas for growth?"</li>
          <li>"How can I leverage my archetype strengths?"</li>
          <li>"What specific actions should I take this week?"</li>
        </ul>
        
        <ClientChatbot 
          currentClientId={selectedClient} 
          allClientData={allClientData} 
        />
      </div>
    </div>
  );
};

export default ChatbotTest;
