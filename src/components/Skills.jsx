import React from "react";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-[#E4F9F5] px-14 md:py-16"
      id="skills"
    >
      <div className="flex  items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 ">
          <span className="text-[#4c80ba]">My </span>
          Skills
          <hr className="bg-[#4c80ba] h-[1.5px] border-none" />
        </h1>
      </div>
      <div className="flex w-full md:w-[54vw] h-auto  bg-[#66BFBF] rounded-xl text-white gap-1 my-5">
        <h1 className="skill text-lg font-semibold text-white w-[5%] text-center rotate-180 align-middle py-2 rounded-br-[10px] rounded-tr-[10px]">
          Frontend
        </h1>
        <div className="flex flex-row w-[100%] h-32 justify-around items-center overflow-x-scroll hide-scrollbar">
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="html.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              HTML
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="css-3.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">CSS</h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="js.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              Javascript
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="react.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              React
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img
              className="w-[70px] h-[70px]"
              src="bootstrap-logo.png"
              alt=""
            />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              BootStrap
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="tailwindcss.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              Tailwindcss
            </h2>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-[54vw] h-auto bg-[#66BFBF] rounded-xl text-white gap-1 my-5">
        <h1 className="skill text-lg font-semibold text-white w-[5%] text-center rotate-180 align-middle py-2 rounded-br-[10px] rounded-tr-[10px]">
          Backend
        </h1>
        <div className="flex flex-row w-[100%] h-32 justify-around items-center overflow-x-scroll hide-scrollbar">
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="nodejs.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              Node js
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="expressjs.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              Express js
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="mongodb.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              Mongo db
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="mysql.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              MySQL
            </h2>
          </div>
          <div className="w-[110px] h-[110px] flex flex-col items-center mt-3 rounded-lg p-[5px] bg-[#E4F9F5]">
            <img className="w-[70px] h-[70px]" src="firebase.png" alt="" />
            <h2 className="mt-1 text-base font-semibold text-[#11999e]">
              Firebase
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
