import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserDetailsContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const { register, handleSubmit } = useForm();
  const { users } = useContext(UserDetailsContext);

  const onSubmit = (data) => {
    const user = users.find(
      (user) =>
        user.email === data.email && user.password === data.password
    );
    if (user) {
      console.log('Login successful');
      navigate('/')
    } else {
      console.log('Invalid credentials');
      
    }
  };

  return (
    <div className="text-white w-full h-screen flex items-center justify-center">
      <form
        className="justify-center items-center bg-[#d1e0e0] shadow-md bg-opacity-10 flex gap-5 flex-col h-[200px] w-[350px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-md bg-slate-300 bg-transparent border"
            {...register('email', { required: true })}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="rounded-md bg-slate-300 bg-transparent border"
            {...register('password', { required: true })}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
