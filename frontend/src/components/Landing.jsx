import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-screen bg-white mt-8 mb-8 p-8 md:p-16">
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/landing.jpg"
                    alt="Bike to Work"
                    className="w-full max-w-md rounded-lg"
                />
            </div>
            <div className="md:w-1/2 text-right mt-8 md:mt-0 flex-col justify-end">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Model Minder</h1>
                <p className="text-md text-gray-600 mb-6">
                    Our project is entitled “Model Minder”. It is a pioneering project centered around utilizing the ResNet deep learning architecture for accurate vehicle identification.                </p>
                <Link to={'/about'} className="px-6 py-3 text-lg text-white bg-yellow-500 rounded hover:bg-yellow-600">
                    Read More
                </Link>
            </div>
        </div>
    );
};

