import React from "react";
import Johnwick from "../../assets/Johnwick.jpeg";
import Johnwick2 from "../../assets/Johnwick2.png";
import "./welcome.css";
import Header from "../../Components/Header";

function Welcome() {
  return (
    <>
     <Header/>
      <div className="w-100% h-32"></div>
      <div className="relative w-100% h-svh text-white flex justify-center items-center font-mono text-xl">
        <img src={Johnwick} className="absolute top-60 left-0 w-60 h-96" />
        <img src={Johnwick2} className="absolute top-60 right-2 w-60 h-96" />
        <div className="w-4/6 h-5/6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 p-4 rounded-lg shadow-lg rounded-b-lg flex flex-col justify-center gap-20 items-center text-black">
          <p className="reveal-animation">welcome to</p>
          <h3 className="text-6xl">FlickFusion</h3>
          <p className="text-center">
            `Embark on a cinematic voyage, where every frame tells a story.
            Explore a universe of films, tailored just for you. Download now and
            let the silver screen enchant you.`
          </p>
        </div>
      </div>
      <div className="w-100% h-32"></div>
      <div className="relative w-100% h-svh text-white flex justify-center items-center font-mono text-xl">
        <div className="w-4/6 h-5/6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 p-4 rounded-lg shadow-lg rounded-b-lg flex text-black">
          <h1 >Hai there</h1>
        </div>
      </div>
    </>
  );
}

export default Welcome;
