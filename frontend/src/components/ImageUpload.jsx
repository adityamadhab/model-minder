import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

export const ImageUpload = () => {
  const handleRedirect = () => {
    window.location.href = 'https://model-minder-model-4ilyxjmwy7mjbqk6zlzrvr.streamlit.app/';
  };

  return (
    <div className="mx-auto p-8 bg-white rounded-lg shadow-lg max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Give It a Try</h1>
      <p className="text-center text-gray-600 mb-12">
        Discover the power of our tool by launching the application below. Upload your images and explore the possibilities!
      </p>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={handleRedirect}
            className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            data-tooltip-id="launch-tooltip"
          >
            <FaRocket className="text-xl" />
            Launch App
          </button>
          <Tooltip id="launch-tooltip" place="top" effect="solid">
            Click to explore our Streamlit app!
          </Tooltip>
        </div>

      </div>
    </div>
  );
};
