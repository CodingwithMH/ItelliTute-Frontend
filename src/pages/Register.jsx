import React, { useEffect } from 'react'
import RegistrationForm from '../components/RegistrationForm'
import Spheres from '../components/Spheres'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../store/user/userSlice';

const Register = () => {
  const {userDetails}=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
      dispatch(fetchUser());
    },[dispatch])
  return (
    <>{!userDetails ?

      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#1a0b2e] to-[#2d1b69] flex justify-center items-center">
      {/* Floating spheres */}
      <Spheres/>
      <RegistrationForm/>
      </div>:navigate('/')
      }
    </>
  )
}

export default Register
