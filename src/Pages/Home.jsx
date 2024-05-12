import ButtonGradient from "../assets/svg/ButtonGradient";
import BackgroundVid from "../Components/BackgroundVid";
import Banner from "../Components/Banner";
import Button from "../Components/Button";
import { Rings, SideLines } from "../Components/design/Header";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <div className="w-lvw h-auto">
      <BackgroundVid/>
        <Header/>
        <Banner/>

      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
