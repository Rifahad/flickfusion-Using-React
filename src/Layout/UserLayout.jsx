import { Outlet } from "react-router-dom";
import ButtonGradient from "../assets/svg/ButtonGradient";


import Header from '../Components/Header';

function UserLayout() {
  return (
    <div>
      <ButtonGradient />
        <Header/>
      <Outlet/>

    </div>
  )
}

export default UserLayout
