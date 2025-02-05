import React from "react";
//import { FontAwesomeIcon } from "react-fontawesome";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#E4F9F5] md:pt-14" id="home">
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center ">
        <h1 className="text-[#4c80ba] name text-7xl font-extrabold my-2">
          I'm Santhosh.
        </h1>
        <h3 className="text-[#11999e] name-1 text-3xl font-medium my-1">
          A Full-MERN Stack Developer.
        </h3>
        <div className="w-1/2 flex my-2">
          <a href="https://drive.google.com/file/d/16U2ZG4gbyCacWSYweOFcvtYLWd_YKfdt/view?usp=sharing">
            <button className="bg-white rounded-md flex  mx-5 py-3 px-2 items-center justify-center text-[#66bfbf] hover:text-white hover:bg-[#326e6e]">
              <i className="fa-solid fa-file text-[#66bfbf] "></i>
              <p className="px-1 font-medium">Resume</p>
            </button>
          </a>
          <a href="#contact">
            <button className="bg-white rounded-md flex mx-5 py-3 px-2 items-center justify-center text-[#66bfbf] hover:text-white hover:bg-[#326e6e]">
              <i class="fa-solid fa-address-book text-[#66bfbf]"></i>
              <p className="px-1 font-medium">Contact</p>
            </button>
          </a>
        </div>
        <div className="flex w-1/2 items-center justify-center my-3">
          <a href="https://github.com/santhoshT15">
            <i class="fa-brands fa-square-github fa-2x text-[#3e6fca] mx-5"></i>
          </a>
          <a href="https://www.linkedin.com/in/santhosh-t-863652125">
            <i class="fa-brands fa-linkedin fa-2x text-[#3e6fca] mx-5"></i>
          </a>
          <a href="mailto:ramsanthoshbms@gmail.com">
            <i class="fa-solid fa-envelope fa-2x text-[#3e6fca] mx-5"></i>
          </a>
        </div>
      </div>
      <img
        className="w-full sm:w-1/2"
        src="src\assets\programmer-at-work.png"
        alt=""
      />
    </div>
  );
};

export default Home;
