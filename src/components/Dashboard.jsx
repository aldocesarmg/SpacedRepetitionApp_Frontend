import React from 'react';

import FireIcon from './icons/FireIcon';
import SearchIcon from './icons/SearchIcon';

import CardMazos from './CardMazos';
//import { FireIconSVG as SVGIcon} from './svgs/fire-icon.svg';
// Asume que tienes iconos SVG para usar, como de Lucide React o Heroicons
// import { Home, Library, Share2, Users, Star, Plus, Folder, Settings, LogOut, HelpCircle, ChevronRight } from 'lucide-react'; 

// Componente principal del Layout
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

// Componente Sidebar (Barra lateral)
const Sidebar = () => {
  const navItems = [
    { name: 'Inicio', icon: 'Home', active: true },
    { name: 'Biblioteca', icon: 'Library', active: false },
    { name: 'Compartido', icon: 'Share2', active: false },
    { name: 'Amigos', icon: 'Users', active: false },
    { name: 'Favoritos', icon: 'Star', active: false },
    { name: 'Flascard', icon: 'Plus', active: false },
    { name: 'Carpeta', icon: 'Folder', active: false },
    { name: 'Ajustes', icon: 'Settings', active: false },
    { name: 'Cerrar sesión', icon: 'LogOut', active: false },
  ];

  return (
    <div className="w-64 bg-white p-4 flex flex-col justify-between shadow-2xl">
      <div>
        <div className="flex items-center mb-10">
          <div className="w-10 h-10 bg-indigo-200 rounded-full mr-3"></div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center p-2 rounded-lg text-sm font-medium ${
                item.active
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {/* Icon Placeholder, replace with actual icons */}
              <span className="w-5 h-5 mr-3"></span> 
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium cursor-pointer">
        {/* Help Icon Placeholder */}
        <span className="w-5 h-5 mr-3"></span>
        Ayuda
      </div>
    </div>
  );
};

// Componente Header (Encabezado superior)
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-2xl">
      <div className="relative">
        {/* Search Icon Placeholder */}
        <input
          type="search"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-purple-500 text-white text-sm rounded-full hover:bg-purple-600">
          Suscribirse a pro
        </button>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          {/* Plus Icon Placeholder */}
          <span className="w-5 h-5"></span>
        </button>
        <div className="w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center text-sm font-semibold">J</div>
      </div>
    </header>
  );
};

// Componente MainContent (Contenido principal)
const MainContent = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 pl-4 flex justify-start">Recientes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CardMazos title="PEDIATRIA ENARM" terms="240 términos" bgColor="bg-blue-100" />
        <CardMazos title="GINECOLOGÍA ENARM" terms="543 términos" bgColor="bg-pink-100" />
        <CardMazos title="MI ENARM" terms="876 términos" bgColor="bg-yellow-100" />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6 pl-4 flex justify-start">Estadísticas</h1>
      
      {/* Sección de Estadísticas (Gráfico y Resumen) */}
      <div className="flex gap-6">
        {/* Gráfico Placeholder */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          {/* Implementar un gráfico real requeriría una librería externa como Chart.js o Recharts */}
          <div className="h-64 flex items-end justify-around">
            {/* Barras de ejemplo */}
            <div className="w-8 bg-indigo-400 h-1/2 rounded-t"></div>
            <div className="w-8 bg-indigo-400 h-3/4 rounded-t"></div>
            <div className="w-8 bg-indigo-400 h-full rounded-t"></div>
            <div className="w-8 bg-indigo-400 h-1/3 rounded-t"></div>
            <div className="w-8 bg-indigo-400 h-2/3 rounded-t"></div>
            <div className="w-8 bg-indigo-400 h-full rounded-t"></div>
          </div>
          <div className="flex justify-around text-xs mt-2 text-gray-500">
            <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
          </div>
        </div>
        <div className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div className="w-24 h-24 mb-4"><FireIcon /></div>
          <p className="text-3xl font-bold">36 días</p>
        </div>
        <div className="w-1/3 flex flex-col justify-between">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-xl">Tarjetas revisadas hoy:</p>
            <p className='text-3xl font-bold'>148</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-xl">Revisiones promedio por día:</p>
            <p className='text-3xl font-bold'>291</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-xl">Tarjetas aprendidas hoy:</p>
            <p className='text-3xl font-bold'>12</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;