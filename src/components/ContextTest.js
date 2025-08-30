import React from 'react';
import { useClientData } from '../context/ClientDataContext';

const ContextTest = () => {
  const { allClientData, loading } = useClientData();
  
  if (loading) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
        <h3 className="font-bold text-yellow-800">Context Test</h3>
        <p>Loading: Yes</p>
      </div>
    );
  }
  
  if (!allClientData || allClientData.length === 0) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 rounded">
        <h3 className="font-bold text-red-800">Context Test</h3>
        <p>No data available</p>
      </div>
    );
  }
  
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
      <h3 className="font-bold text-yellow-800">Context Test</h3>
      <p>Loading: No</p>
      <p>Data length: {allClientData.length}</p>
      <p>First client: {allClientData[0].name}</p>
      <pre className="text-xs mt-2 bg-white p-2 rounded">
        {JSON.stringify(allClientData.slice(0, 2), null, 2)}
      </pre>
    </div>
  );
};

export default ContextTest;
