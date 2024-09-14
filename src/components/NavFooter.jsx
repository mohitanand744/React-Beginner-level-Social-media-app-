import React from "react";

const NavFooter = () => {
  return (
    <div className="flex navfooteroptionContainer items-center gap-16 fixed top-[89vh] bg-white py-4 px-16 rounded-full border-2 border-[#84d6ff]">
      <div className="navfooteroption drop-shadow-lg rounded-full cursor-pointer hover:scale-125 active:scale-[0.88] transition-all duration-300 ease-out ">
        <i className="fa-brands fa-facebook-messenger text-6xl text-[#84d6ff]"></i>
      </div>
      <div className="navfooteroption drop-shadow-lg rounded-full cursor-pointer hover:scale-125 active:scale-[0.88] transition-all duration-300 ease-out ">
        <i className="fa-solid fa-circle-plus text-6xl text-[#84d6ff]"></i>
      </div>
      <div className="navfooteroption drop-shadow-lg rounded-full cursor-pointer hover:scale-125 active:scale-[0.88] transition-all duration-300 ease-out ">
        <i className="fa-solid fa-heart text-6xl text-red-600"></i>
      </div>
      <div className="navfooteroption drop-shadow-lg rounded-full cursor-pointer hover:scale-125 active:scale-[0.88] transition-all duration-300 ease-out ">
        <i className="fa-solid fa-images text-6xl text-[#84d6ff]"></i>
      </div>
      <div className="navfooteroption drop-shadow-lg rounded-full cursor-pointer hover:scale-125 active:scale-[0.88] transition-all duration-300 ease-out ">
        <i className="fa-solid fa-circle-play text-6xl text-[#84d6ff]"></i>
      </div>
    </div>
  );
};

export default NavFooter;
