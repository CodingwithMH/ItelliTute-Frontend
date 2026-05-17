import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import Aos from "aos"
import "aos/dist/aos.css";
const MainContent = () => {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  const handleSpeak = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; 
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };
  useEffect(()=>{
    Aos.init({
duration:1500
    });
    window.speechSynthesis.cancel();

  return () => {
    window.speechSynthesis.cancel();
  };
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setChat((prev) => [
      ...prev,
      {
        query: query,
        message: null,
      },
    ]);
    setQuery("");
    try{
        const res=await axios.post("https://intelli-tute-backend.vercel.app/ask",{query:query})
setChat((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        ...updated[updated.length - 1],
        message: res.data.message,
      };
      return updated;
    });
    }catch(err){
console.log(err)
    }
    
  };
  return (
    <>
      <div data-aos='fade-down' className="relative w-full z-10 flex flex-col items-center justify-center h-screen px-4">
        {!chat.length > 0 ? (
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#ffffff] mb-8 leading-tight">
              Your AI-Powered
              <br />
              Personal Tutor
            </h1>
          </div>
        ) : (
          <div className="h-full w-full order-2 m-4 p-4 bg-gray-500/50 backdrop-blur-lg shadow-[inset_0_3px_4px_rgba(0,0,0,0.6)] rounded-lg overflow-y-auto space-y-5 custom-scrollbar">
            {chat.map((ch, ind) => (
              <div
                key={ind}
                className="space-y-4 border-b border-b-white text-white py-4"
              >
                <div className="flex justify-end">
                  <p className="p-2 inline rounded-sm bg-gradient-to-tr from-[#7C3ADA] to-[#23B7D3] max-w-[50%] break-words whitespace-normal max-[500px]:max-w-[80%]">
                    {ch.query}
                  </p>
                </div>
                {ch.message === null ? (
      <div className="loader"></div>
    ) : (
      <div className="prose max-w-none text-gray-100">
        <ReactMarkdown>{ch.message}</ReactMarkdown>
      </div>
    )}  
{ch.message && <div className="flex gap-4 justify-end">
  {copiedIndex === ind ? (
                  <Check color="limegreen" size={24} />
                ) : (
                  <img
                    className="cursor-pointer"
                    onClick={() => handleCopy(ch.message, ind)}
                    src="./images/Clipboard.png"
                    height={"30px"}
                    width={"30px"}
                    alt="Copy"
                  />
                )}
                <img onClick={()=>handleSpeak(ch.message)} className="cursor-pointer" src="./images/Megaphone.png" height={'30px'} width={'30px'} alt="" />
              </div>}
              </div>
            ))}
          </div>
        )}

        {/* Search input */}
        <div
          className={`w-full max-w-2xl relative transition-all ${
            chat.length > 0 ? "order-2 mb-4" : ""
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center shadow-[inset_0_3px_4px_rgba(0,0,0,0.6)] bg-[#f1eeee] rounded-lg pr-1 backdrop-blur-sm gap-2"
          >
            <textarea
              placeholder="Enter your query..."
              value={query}
              rows={1}
              onChange={(e) => setQuery(e.target.value)}
              className="max-[315px]:p-2 flex-1 resize-none outline-none border-0 bg-transparent text-[#000000] placeholder:text-[#8e8e8e] text-lg px-6 py-4 focus-visible:ring-0 focus-visible:ring-offset-0 custom-scrollbar"
            ></textarea>
            <button
              type="submit"
              className="max-[315px]:px-3 max-[315px]:py-2 rounded-sm bg-gradient-to-r from-[#0057f8] to-[#803cf7] hover:from-[#803cf7] hover:to-[#0057f8] text-[#ffffff] px-6 py-4 shadow-lg transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainContent;
