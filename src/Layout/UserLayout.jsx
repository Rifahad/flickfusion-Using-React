import { Outlet } from "react-router-dom";
import ButtonGradient from "../assets/svg/ButtonGradient";


import Header from '../Components/Header';
import BackgroundVid from '../Components/Background';

function UserLayout() {
  return (
    <div>
      <ButtonGradient />
         <BackgroundVid/>
        <Header/>
      <Outlet/>

    </div>
  )
}

export default UserLayout
