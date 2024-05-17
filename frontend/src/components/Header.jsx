import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="w-screen text-white p-4 border-b-2 border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-extrabold text-yellow-600 cursor-pointer">Model Minder</Link>
        <nav>
          <Link to="/about" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">About</Link>
          <Link to="/faq" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">FAQ</Link>
          <Link to="/support" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">Support</Link>
        </nav>
      </div>
    </header>
  );
};
