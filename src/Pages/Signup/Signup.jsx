import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../Components/Button';
import { FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';

function Signup({ users, setUsers }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!inputs.username && !inputs.email && !inputs.password && !inputs.confirm_password) {
      setError('All Fields Required');
    } else if (!emailRegex.test(inputs.email)) {
      setError('Invalid Email Format');
    }else if(!passwordRegex.test(inputs.password)){
        setError('Password Format Is Invalid')
    } else if (inputs.password !== inputs.confirm_password) {
      setError('Password and confirm password are not equal');
    } else {
      setUsers((prevUsers) => [...prevUsers, inputs]);
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-4xl mb-6 text-white">Sign Up</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-bold text-white">
              <FaUserCircle className="inline-block mr-2 text-cyan-500" /> Username:
            </label>
            <input
              type="text"
              id="username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-white">
              <FaEnvelope className="inline-block mr-2 text-cyan-500" /> Email:
            </label>
            <input
              type="email"
              id="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold text-white">
              <FaLock className="inline-block mr-2 text-cyan-500" /> Password:
            </label>
            <input
              type="password"
              id="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block mb-2 font-bold text-white">
              <FaLock className="inline-block mr-2 text-cyan-500" /> Confirm Password:
            </label>
            <input
              type="password"
              id="confirm_password"
              value={inputs.confirm_password}
              onChange={(e) => setInputs({ ...inputs, confirm_password: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>
          <div className="flex gap-5">
            <Buttons type="submit" ButtonContent="Submit" className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-md transition-colors duration-300" />
            <Buttons navigate="/" ButtonContent="Login" className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-md transition-colors duration-300" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;