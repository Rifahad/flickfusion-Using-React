import Demo from "../assets/Categories/Action.jpg";
import Btn from "../Components/Button";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";


function Card({
  id,
  title,
  subtitle,
  director,
  releaseDate,
  genre,
  rating,
  description,
  poster,
}) {
  const navigate =useNavigate()
  return (
    <div className="w-[200px] md:w-[360px] h-[450px] rounded-lg bg-color-1 bg-opacity-15 shadow-color-1 shadow-md overflow-hidden flex-col hover:scale-105 hover:opacity-75 relative">
      <div className="image w-100 h-80 bg-cover rounded-lg bg-center overflow-hidden relative">
        <img src={poster} alt="" className="w-full h-full object-cover" />
        <p className="absolute inset-0 p-10 text-white text-sm opacity-0 hover:bg-black hover:bg-opacity-45 hover:opacity-100 transition-opacity duration-300 text-center">
          {description}
        </p>
      </div>

      <div className="flex-col w-100 h-10 items-center text-center justify-center">
        <h1 className="font-black text-2xl font-code">{title}</h1>
        <h3>{genre}</h3>
        <p className="text-sm">{director}</p>
      </div>
      <div className="w-100 h-10 flex items-end justify-evenly mt-12">
        <Btn>{<FaRegPlayCircle />}</Btn>
        <Btn onClick={() => navigate('/details')}>{<IoIosEye />}</Btn>
      </div>
    </div>
  );
}

export default Card;
