import Banner from "../Components/Banner";
import CategoryCard from "../Components/CategoryCard";
import Action from "../assets/Categories/Action.jpg";
import Comedy from "../assets/Categories/comedy.jpg";
import Science from "../assets/Categories/ScienceFiction.jpg";
import Adventure from "../assets/Categories/Adventure.jpg";

import Gun from "../assets/gun.png";
import GunRight from "../assets/gunRight.png";

const Home = () => {
  return (
    <>
      <div className="w-lvw">
        <Banner />
        <div className="w-full  flex justify-center items-center mb-20">
          <div className=" w-[250px] h-[400px] md:w-[1600px]  rounded-xl flex-col">
              <img
                src={Gun}
                alt=""
                className="hidden md:block w-[80px] absolute bottom-56 rotate-x-45 right-2/4 z-5"
              />
              <img
                src={GunRight}
                alt=""
                className="hidden md:block w-[80px] absolute bottom-56 left-2/4 z-5"
              />
            <div className="w-[100%] h-[50%]  flex items-center justify-evenly">
              <CategoryCard name={"ACTION"} image={Action} />
              <CategoryCard name={"ADVENTURE"} image={Adventure} />
            </div>
            <div className="w-[100%] h-[50%]  flex items-center justify-evenly">
              <CategoryCard name={"COMEDY"} image={Comedy} />
              <CategoryCard name={"SCI-FI"} image={Science} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
