import { useState, useEffect } from "react";
import CardMazos from "./CardMazos";
import FireIcon from "./icons/FireIcon";

// Componente MainContent (Contenido principal)
const Home = () => {
  // State for the data, loading status, and any errors
  const [mazos, setMazos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const getMazosResponse = await fetch('http://localhost:3000/mazos?limit=3');
              
              if (!getMazosResponse.ok) {
                  throw new Error(`HTTP error: Status ${getMazosResponse.status}`);
              }
              
              const retrievedMazos = await getMazosResponse.json(); // Parse the JSON response
              setMazos(retrievedMazos);
              setError(null);
          } catch (err) {
              setError(err.message);
              setMazos(null);
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
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 pl-4 flex justify-start">Recientes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mazos.map((item) => (
                    <CardMazos 
                        id={item._id}
                        title={item.title}
                        terms={item.terms}
                        bgColor={item.color}
                    />
            ))}
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

export default Home;