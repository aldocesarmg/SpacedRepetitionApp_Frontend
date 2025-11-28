import { Link } from "react-router-dom";
const CardMazos = ({ id, title, terms, bgColor }) => {
// onClick={onClick}
  return (
    <Link to={"/mazosConfig/"+id} key={title} className={`${bgColor} p-6 rounded-lg shadow-md flex justify-center items-center cursor-pointer hover:shadow-lg transition duration-300`}>
      <div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{terms} terms</p>
        <div className="flex justify-center mt-3 space-x-2">
          <div className="w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center text-xs font-semibold">J</div>
          <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center text-xs font-semibold">K</div>
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold">S</div> 
        </div>
      </div>
      {/* Arrow Right Icon Placeholder */}
      <span className="w-6 h-6 text-gray-500"></span>
    </Link>
  );
};

export default CardMazos;