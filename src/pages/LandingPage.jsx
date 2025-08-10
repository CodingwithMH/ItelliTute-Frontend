import { useEffect } from "react";
import MainContent from "../components/MainContent"
import Sidebar from "../components/Sidebar"
import Spheres from "../components/Spheres"
import { fetchUser } from "../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate=useNavigate();
  const {userDetails}=useSelector(state=>state.user);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchUser());
  },[dispatch])
  return (
    <>
    {userDetails ? 

      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#1a0b2e] to-[#2d1b69]">
      {/* Floating spheres */}
      <Spheres/>
      <div className="flex w-full overflow-hidden">

        <Sidebar user={userDetails}/>

      {/* Main content */}
        <MainContent/>
      </div>
    </div>:
      navigate('/login')
    
    }
    </>
  )
}
