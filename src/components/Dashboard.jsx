import React from 'react';

import FireIcon from './icons/FireIcon';
import SearchIcon from './icons/SearchIcon';

import CardMazos from './CardMazos';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
//import { FireIconSVG as SVGIcon} from './svgs/fire-icon.svg';
// Asume que tienes iconos SVG para usar, como de Lucide React o Heroicons
// import { Home, Library, Share2, Users, Star, Plus, Folder, Settings, LogOut, HelpCircle, ChevronRight } from 'lucide-react'; 

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;