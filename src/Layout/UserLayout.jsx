import { Outlet } from "react-router-dom";
import { Rings, SideLines } from "../Components/design/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";


import Header from '../Components/Header';
import BackgroundVid from '../Components/Background';

function UserLayout() {
  return (
    <div>
      <ButtonGradient />
        {/* <Rings/> */}
         <BackgroundVid/>
        <SideLines/> 
        <Header/>
      <Outlet/>

    </div>
  )
}

export default UserLayout
