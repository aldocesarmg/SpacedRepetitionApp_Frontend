import CardMazos from "./CardMazos";
import { useState, useEffect } from "react";

const Library = () => {
    // State for the data, loading status, and any errors
    const [mazos, setMazos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/mazos'); // Replace with your API endpoint
                
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                
                const jsonData = await response.json(); // Parse the JSON response
                setMazos(jsonData);
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

    /* sample data
    const mazos = [ // this will be replaced with actual data fetched from DB
        { title: 'Astrología', terms: '12', bgColor: 'bg-pink-100' },
        { title: 'Pedagogía', terms: '234', bgColor: 'bg-yellow-100' },
        { title: 'Educación', terms: '456', bgColor: 'bg-pink-100' },
        { title: 'Enfermería', terms: '136', bgColor: 'bg-blue-100' },
        { title: 'Ingeniería', terms: '67', bgColor: 'bg-yellow-100' },
        { title: 'Carpintería', terms: '35', bgColor: 'bg-blue-100' },
        { title: 'Biología', terms: '673', bgColor: 'bg-yellow-100' },
        { title: 'Farmacobiología', terms: '1324', bgColor: 'bg-blue-100' },
        { title: 'Mecatrónica', terms: '456', bgColor: 'bg-pink-100' },
        { title: 'Robótica', terms: '84', bgColor: 'bg-yellow-100' },
        { title: 'Política', terms: '234', bgColor: 'bg-pink-100' },
        { title: 'Arquitectura', terms: '672', bgColor: 'bg-blue-100' },
    ];
    */

    return(
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
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
        </main>
    );
}

export default Library;