import { useState } from "react";
import { Link } from "react-router-dom";

// Componente Sidebar (Barra lateral)
const Sidebar = () => {
  let [selectedItem, setSelectedItem] = useState('Home');

  const navItems = [
    { name: 'Inicio', icon: 'Home', active: true, componentName: '/' },
    { name: 'Biblioteca', icon: 'Library', active: false, componentName: '/library' },
    { name: 'Compartido', icon: 'Share2', active: false, componentName: '/playboard'  }, // this is only for testing
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
            <Link
              id={item.icon}
              to={item.componentName}
              key={item.name}
              onClick={(e) => setSelectedItem(e.target.id)}
              className={`flex items-center p-2 rounded-lg text-sm font-medium ${
                item.icon === selectedItem
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {/* Icon Placeholder, replace with actual icons */}
              <span className="w-5 h-5 mr-3"></span> 
              {item.name}
            </Link>
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

export default Sidebar;