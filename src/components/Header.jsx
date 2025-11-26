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

export default Header;