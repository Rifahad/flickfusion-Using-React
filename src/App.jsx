import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import UserLayout from "./Layout/UserLayout";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Genre from "./Pages/Genre";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={< Signup />} />
      <Route path="/login" element={< Login />} />
      <Route path="/about" element={< About />} />
      <Route path="/genre" element={< Genre />} />

    </Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
