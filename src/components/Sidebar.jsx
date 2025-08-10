import axios from "axios";
import { History, LogOut, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails } from "../store/user/userSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const BASE_URI = import.meta.env.VITE_BACKEND_URI;
const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="sidebar-root w-[250px] min-h-screen bg-gray-500/50 backdrop-blur-lg drop-shadow-[3px_0_4px_rgba(0,0,0,0.6)] flex flex-col justify-between">
      <div className="relative">
        <div
          data-aos-delay="50"
          data-aos="fade-down"
          className="p-4 absolute top-0 w-full z-[14] bg-white rounded-bl-xl rounded-br-xl drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]"
        >
          <div className="mt-auto flex gap-2 text-white text-xl justify-center items-center">
            <span>
              <img src="./Logo.svg" alt="Logo" />
            </span>
          </div>
        </div>
        <div
          data-aos-delay="100"
          data-aos="fade-down"
          className="p-4 pt-20 absolute top-0 w-full z-[13] bg-gradient-to-tr from-[#7C3ADA] to-[#23B7D3] rounded-bl-xl rounded-br-xl drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col items-center text-lg text-white gap-2">
            <div className="h-20 w-20 mx-auto rounded-full overflow-hidden bg-white">
              <img src={user.image} className="w-full h-full" alt="" />
            </div>
            <span className="text-center break-words whitespace-normal leading-tight flex flex-col-reverse">
              {user.name}
            </span>
          </div>
        </div>

        {/* <div className='p-2 pt-20 absolute top-[185px] w-full z-[11] bg-gradient-to-tr from-[#7C3ADA] to-[#23B7D3] rounded-bl-xl rounded-br-xl drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]'>
            <div className='mt-auto flex gap-2 text-white text-lg items-center'>
<History/>
            <span >
                Chat History
            </span>
            </div>
      </div> */}
      </div>
      <div className="relative">
        <div
          data-aos-delay="100"
          data-aos-anchor=".sidebar-root"
          data-aos="fade-up"
          onClick={() => window.location.reload()}
          className="p-2 cursor-pointer pb-7 absolute bottom-10 w-full z-[11] bg-gradient-to-tr from-[#7C3ADA] to-[#23B7D3] rounded-tl-xl rounded-tr-xl drop-shadow-[0_-3px_4px_rgba(0,0,0,0.6)]"
        >
          <div className="mt-auto flex justify-center gap-2 text-white text-lg items-center">
            <Plus />
            <span>New Chat</span>
          </div>
        </div>
        <div
          data-aos-delay="50"
          data-aos-anchor=".sidebar-root"
          data-aos="fade-up"
          onClick={async () => {
            try {
              await axios.post(
                `${BASE_URI}/api/auth/logout`,
                {},
                { withCredentials: true }
              );
              dispatch(setUserDetails(null));
            } catch (err) {
              console.error("Logout error:", err);
            } finally {
              navigate("/login");
            }
          }}
          className="p-3 cursor-pointer absolute bottom-0 w-full z-[12] bg-gradient-to-tr from-[#7C3ADA] to-[#23B7D3] rounded-tl-xl rounded-tr-xl drop-shadow-[0_-3px_4px_rgba(0,0,0,0.6)]"
        >
          <div className="mt-auto flex justify-center gap-2 text-white text-lg items-center">
            <LogOut />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
