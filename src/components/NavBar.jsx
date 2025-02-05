import React from "react";

const NavBar = () => {
  return (
    <div className="flex fixed items-center justify-evenly w-[100%] font-medium py-5 bg-[#66BFBF] text-white">
      <h2>Santhosh</h2>
      <ul className="hidden sm:flex gap-5 text-md ">
        <li className="flex flex-col items-center gap-1">
          <a href="#home">Home</a>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-white" />
        </li>
        <li className="flex flex-col items-center gap-1 ">
          <a href="#about">About</a>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-white" />
        </li>
        <li className="flex flex-col items-center gap-1">
          <a href="#skills">Skills</a>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-white" />
        </li>
        <li className="flex flex-col items-center gap-1">
          <a href="#projects">Projects</a>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-white" />
        </li>
        <li className="flex flex-col items-center gap-1">
          <a href="#contact">Contact</a>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-white" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
