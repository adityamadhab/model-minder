import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-screen text-white p-4 border-b-2 border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-yellow-600 cursor-pointer">
          Model Minder
        </Link>
        <button 
          onClick={toggleMenu}
          className="md:hidden text-yellow-600 focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link to="/about" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
            About
          </Link>
          <Link to="/faq" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
            FAQ
          </Link>
          <Link to="/support" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
            Support
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4 text-right">
            <Link to="/about" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              About
            </Link>
            <Link to="/faq" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              FAQ
            </Link>
            <Link to="/support" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

