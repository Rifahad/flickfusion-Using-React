  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Login from './Pages/Login/Login';
  import Signup from './Pages/Signup/Signup';
  import WelcomePage from './Pages/Welcome/Welcome'
  import { useState } from 'react';
import Basic from './Pages/Basics/Basics';

  function App() {
    const [users, setUsers] = useState([]);
    console.log(users)
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/basic' element={<Basic/>}/>
          <Route path="/" element={<Login users={users} />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path='/welcome' element={<WelcomePage />}/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
