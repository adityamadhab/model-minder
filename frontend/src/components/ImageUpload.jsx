import React from 'react';

export const ImageUpload = () => {
  return (
    <div className="mx-auto p-8 bg-white rounded-lg">
      <h1 className="text-3xl font-bold text-left text-gray-800 mb-14 ml-44">Give It a Try</h1>
      <div className="mb-6 flex items-center justify-center gap-32">
        <div className="flex flex-col gap-6">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold w-[60vh] py-2 px-6 rounded transition duration-200">
            Upload Image
          </button>
          <input
            type="text"
            placeholder="Specify image URL"
            className="border border-gray-300 p-3 rounded w-[60vh] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col items-center justify-center border-dashed border-2 cursor-pointer border-gray-300 p-6 h-[50vh] w-[70vh] text-gray-500 rounded-lg bg-gray-50 hover:bg-yellow-100 transition duration-200">
          <div className="text-center">
            <p className="mb-2 text-gray-700">Drag image here</p>
            <p className="text-sm text-gray-500">or click to browse</p>
          </div>
        </div>
      </div>
    </div>
  );
};
