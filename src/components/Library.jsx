import CardMazos from "./CardMazos";

const Library = () => {
    const mazos = [
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

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mazos.map((item) => (
                <CardMazos title={item.title} terms={item.terms} bgColor={item.bgColor} />
          ))}
        </div>
    );
}

export default Library;