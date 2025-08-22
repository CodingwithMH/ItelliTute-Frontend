import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import Spheres from '../components/Spheres'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../store/user/userSlice';

const Login = () => {
  const {userDetails,loading}=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
    dispatch(fetchUser());
  },[dispatch])
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#000000] via-[#1a0b2e] to-[#2d1b69]">
        <div className="loader2"></div>
      </div>
    );
  }

  if (userDetails) {
    navigate('/');
    return null;
  }
  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#1a0b2e] to-[#2d1b69] flex justify-center items-center">
      {/* Floating spheres */}
      <Spheres/>
      <LoginForm/>
      </div>
    </>
  )
}

export default Login
