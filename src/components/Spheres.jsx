import React from 'react'

const Spheres = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left sphere */}
        <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#803cf7] to-[#0057f8] opacity-80 blur-sm animate-scale"></div>
        
        {/* Top right sphere */}
        <div className="absolute top-16 right-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#27ddfd] to-[#0057f8] opacity-70 blur-sm animate-scale"></div>
        
        {/* Bottom left sphere */}
        <div className="absolute bottom-32 left-20 w-56 h-56 rounded-full bg-gradient-to-br from-[#27ddfd] to-[#803cf7] opacity-75 blur-sm animate-scale"></div>
        
        {/* Bottom center sphere */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#803cf6] to-[#0057f8] opacity-60 blur-sm animate-scale"></div>
        
        {/* Bottom right sphere */}
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#0057f8] to-[#27ddfd] opacity-80 blur-sm animate-scale"></div>
        
        {/* Additional smaller spheres for depth */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[#803cf7] to-[#27ddfd] opacity-50 blur-md animate-scale"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#0057f8] to-[#803cf6] opacity-60 blur-md animate-scale"></div>
      </div>
    </>
  )
}

export default Spheres
