import Image from "../assets/Categories/Action.jpg";
import { FaPlay } from "react-icons/fa";


function DetailedView() {
    const findMovie=[]
  return (
    <div className="flex  justify-center items-center h-screen   ">
    <div className="w-[1300px] h-[600px] rounded-lg opacity-80 bg-color-1 bg-opacity-15 shadow-color-1 shadow-md transition ease-in duration-300 hover:scale-105 hover:opacity-100 flex ">

      <div className="w-[480px] overflow-hidden bg-transparent">
        <img
          src={Image}
          alt=""
          className="w-full h-auto rounded-l-lg"
        />
      </div>
      <div className="w-3/5 h-full rounded-r-lg flex flex-col items-center justify-evenly">
        <h1 className="text-white font-code text-4xl m-4">{findMovie.title}JOHNWICK</h1>
        <div className="text-white font-code text-xl  px-10 leading-5  text-center">
          <p>
            The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal, was gunned down by....
          </p>
        
        </div>
        <div className="pl-10 mt-8">
          <a
            href="https://youtu.be/rR_2ti4l3nM?si=ViyC-JYwOtO4KVGp"
            target="_blank"
            className=" w-[300px] font-code bg-no-repeat bg-size-[12px] px-10 py-2 rounded transition-all duration-500 hover:text-black hover:bg-red-500 flex shadow-color-1 shadow-md"
          >
            <FaPlay />WATCH TRAILER
          </a>
        </div>
        <div className="pl-10 pt-2">
          <ul className="list-none flex space-x-10 text-gray-300 font-code text-sm">
            <li>2003</li>
            <li>111 min</li>
            <li>Action</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}

export default DetailedView
