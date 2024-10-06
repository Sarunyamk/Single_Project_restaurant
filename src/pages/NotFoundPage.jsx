import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-yellow-500">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-center">
        The page you're looking for doesn't exist. It may have been removed, or the URL might be incorrect.
      </p>
      
      <Link to="/" className="mt-6">
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600">
          Go Home
        </button>
      </Link>
    </div>
  );
};


