import React from 'react';
import { Settings, Maximize2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
// import UterusIcon from './UterusIcon'; // You'll need an SVG for the uterus icon

const Playboard = () => {
  const { id } = useParams();

  const [tarjeta, setTarjeta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:3000/tarjetas?isRandomUnique=y');
              
              if (!response.ok) {
                  throw new Error(`HTTP error: Status ${response.status}`);
              }
              
              const jsonData = await response.json(); // Parse the JSON response
              console.log(jsonData);
              setTarjeta(jsonData);
              setError(null);
          } catch (err) {
              setError(err.message);
              setTarjeta(null);
          } finally {
              setIsLoading(false); // Set loading to false once the request is complete
          }
      };

      fetchData();
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  // Conditional rendering based on the fetch status
  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <div className='rounded-lg bg-white'>
        {/* Header Section */}
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-3">
            {/* Avatar Placeholder (Letter J) */}
            <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-semibold text-sm">
              J
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Main Title Section */}
        <div className="flex justify-center space-x-4 m-6">
          {/* Uterus Icon Placeholder (assuming you have a component or SVG) */}
          <div className="p-2">
            {/* Replace with actual SVG path data or UterusIcon component */}
            <svg xmlns="www.w3.org" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
              {/* Example simplified Uterus representation path data - you should use the correct SVG */}
              <path d="M12 2a5 5 0 0 0-5 5c0 4-5 5-5 5s4 1 4 4a5 5 0 0 0 10 0c0-3 4-4 4-4s-5-1-5-5a5 5 0 0 0-5-5z"></path>
            </svg>
          </div>
          <h1 className="flex text-2xl items-center font-bold text-gray-800">GINECOLOGÍA ENARM</h1>
        </div>

        {/* Content Card Area */}
        <div className="p-6 h-64 flex flex-col justify-between relative">

          {/* Main Question Text */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-700 text-center text-3xl italic">
              {tarjeta[0].question}
            </p>
          </div>

          {/* Flip Button */}
          <div className="flex justify-center mt-6">
            <button className="px-6 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-50 text-lg font-bold shadow-md">
              Girar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playboard;
