import React, { useEffect, useState } from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const imageUrls=[
  "https://res.cloudinary.com/dw5wdcchx/image/upload/v1754748501/strawberry_tonrbv.webp",
  "https://res.cloudinary.com/dw5wdcchx/image/upload/v1754748501/watermelon_kwn067.webp",
  "https://res.cloudinary.com/dw5wdcchx/image/upload/v1754748500/mango_ojrctk.webp",
  "https://res.cloudinary.com/dw5wdcchx/image/upload/v1754748500/pineapple_svktvj.webp",
  "https://res.cloudinary.com/dw5wdcchx/image/upload/v1754748500/apple_yslxya.webp"
]
const RegistrationForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    useEffect(()=>{
      Aos.init({
        duration:1500
      })
    },[])
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        const res=await axios.post('http://localhost:5000/api/auth/register',{name:username,email:email,password:password,image:imageUrls[Math.floor(Math.random() * imageUrls.length)]},
      {
        headers:{
         "Content-Type": "application/json"
        }
      });
        toast(res.data.message)
        setEmail("");
        setPassword("");
        setUsername("");
      }catch(err){
        toast.error(err?.response?.data?.error || "Some error occured")
        console.log("Error : ",err)
      }
    }
  return (
    <>
    <ToastContainer position="top-center"/>
      <div data-aos="flip-right" className="relative p-4 z-10 w-full max-w-md mx-4">
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 border border-[#27ddfd]/50 shadow-2xl shadow-[#27ddfd]/20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl min-[250px]:text-3xl font-bold bg-gradient-to-r from-[#803cf7] to-[#27ddfd] text-transparent mb-4 tracking-wider bg-clip-text" >
              REGISTER
            </h1>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#27ddfd] to-transparent"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-[#ffffff] text-lg font-medium"
              >
                Username
              </label>
              <br />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-400/50 border-gray-600 text-white placeholder-gray-400 h-12 rounded-lg focus:border-[#27ddfd] focus:ring-[#27ddfd]/20 transition-all duration-300 w-full shadow-[inset_0_4px_3px_black] px-2"
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[#ffffff] text-lg font-medium"
                >
                Email
              </label>
              <br />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-400/50 border-gray-600 text-white placeholder-gray-400 h-12 rounded-lg focus:border-[#27ddfd] focus:ring-[#27ddfd]/20 transition-all duration-300 w-full shadow-[inset_0_4px_3px_black] px-2"
                placeholder=""
                />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-[#ffffff] text-lg font-medium"
              >
                Password
              </label>
              <br />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-400/50 border-gray-600 text-white placeholder-gray-400 h-12 rounded-lg focus:border-[#27ddfd] focus:ring-[#27ddfd]/20 transition-all duration-300 w-full shadow-[inset_0_4px_3px_black] px-2"
                placeholder=""
              />
            </div>
<div className="flex justify-center">

            <button
              className="px-4 min-[200px]:px-12 h-12 rounded-xl bg-gradient-to-r from-[#803cf7] to-[#27ddfd] hover:from-[#803cf6] hover:to-[#0057f8] text-white font-semibold text-lg shadow-lg shadow-[#803cf7]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#27ddfd]/40 border-0"
              type="submit"
              >
              Register
            </button>
              </div>
          </form>
          <div className="text-center mt-8">
            <Link to={'/login'} className="text-[#ffffff]/70 hover:text-[#27ddfd] transition-colors duration-300 text-lg">
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
