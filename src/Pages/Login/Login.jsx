import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../Components/Button";
import { FaUserCircle, FaLock } from "react-icons/fa";

function Login({ users }) {
  const navigate = useNavigate(); // Move the useNavigate hook here

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username == username || u.email == username && u.password == password);
    if (!username && !password) {
      setError('All Fields Required');
    }else if (user) { 
      console.log("Login successful!");
      navigate('/welcome'); 
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-4xl mb-6 text-white">Welcome</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-bold text-white">
              <FaUserCircle className="inline-block mr-2 text-cyan-500" />
              Email / Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold text-white">
              <FaLock className="inline-block mr-2 text-cyan-500" />
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex gap-5">
            <Buttons type="submit" ButtonContent="Login" className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-md transition-colors duration-300" />
            <Buttons navigate="/signup" ButtonContent="Sign Up" className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-md transition-colors duration-300" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
