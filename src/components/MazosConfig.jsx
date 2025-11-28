import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Assuming you have an SVG file for the "Ginecología" icon available in your project, e.g., in src/assets/uterus-icon.svg
// For this example, we'll use a placeholder div or a simple emoji for the icon.

const MazosConfig = () => {
  const { id } = useParams();
  
  return (
    // Main container acting as the app screen
    <div className="flex flex-col h-screen bg-white p-4">
      
      {/* Header Section */}
      <header className="flex justify-between items-center">
        {/* Left header elements: 'J' icon and settings gear */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center h-10 w-10 bg-red-100 rounded-full text-red-600 font-bold text-lg">
            J
          </div>
        </div>
        
        {/* Right header element: Settings gear icon */}
        <div className="flex items-center justify-center h-10 w-10 text-gray-500 hover:text-gray-700 cursor-pointer">
            {/* Placeholder for a settings icon, e.g., a simple gear SVG */}
            <svg xmlns="www.w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.324 1.11.542 1.71.542z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
      </header>

      {/* Title and Icon Section */}
      <main className="flex flex-col items-center justify-center flex-grow">
        {/* Placeholder for the uterus icon SVG */}
        <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-800 mb-16">{id}</h1>

        {/* Buttons Section */}
        <div className="flex flex-col space-y-4 w-full max-w-sm px-4">
          <Link to={"/playboard/"+id} className="py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg shadow-sm border border-blue-200 transition duration-150 ease-in-out">
            Estudiar flashcards
          </Link>
          <button className="py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg shadow-sm border border-gray-200 transition duration-150 ease-in-out">
            Añadir flashcard
          </button>
          <button className="py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg shadow-sm border border-blue-200 transition duration-150 ease-in-out">
            Vista previa
          </button>
        </div>
      </main>
    </div>
  );
};

export default MazosConfig;