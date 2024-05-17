import React from 'react';

export const ResultDisplay = ({ result }) => {
  return (
    <div className="p-8 text-center">
      {result ? (
        <div>
          <h2 className="text-2xl mb-4 font-bold text-gray-800">Prediction Result</h2>
          <p className="text-xl text-gray-700">{result}</p>
        </div>
      ) : (
        <p className="text-gray-500">No result to display</p>
      )}
    </div>
  );
};
