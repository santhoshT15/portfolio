import React from "react";

const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center items-center my-11 pl-7 md:py-16
      "
      id="projects"
    >
      <div className="flex  items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 ">
          <span className="text-[#4c80ba]">My </span>
          Projects
          <hr className="bg-[#4c80ba] h-[1.5px] border-none" />
        </h1>
      </div>
      <div>
        {/* first project */}
        <div className="flex flex-col md:flex-row justify-center w-full my-5">
          <img
            className=" h-auto w-full md:w-1/2 border-solid border-[#E4F9F5] border-[5px] mx-5"
            src="sb-store.PNG"
            alt=""
          />
          <div className="w-full sm:w-1/3 flex flex-col items-center justify-center">
            <h1 className="text-[#11999E] font-bold text-lg">
              E-Commerce Website
            </h1>
            <p className="text-sm/7">
              This E-commerce full stack application allow us to order products.
              Users can able to add product to the cart and can check out the
              product with an intergrated razor pay payment system.
            </p>
            <div className=" flex flex-row bg-[#66bfbf] text-white my-2 rounded-md hover:bg-[#1e8585]">
              <a href="https://sb-store-six.vercel.app/">
                <button className=" w-full mx-2 p-3 rounded-md">
                  <i className="fa-solid fa-code"></i>
                  <span className="px-2">Preview</span>
                </button>
              </a>
            </div>
            <div className=" flex flex-row text-white my-2">
              <a href="https://github.com/santhoshT15/E-Commerce-App-fe.git">
                <button className="mx-2 p-3 rounded-md bg-[#66bfbf] hover:bg-[#1e8585] font-medium text-sm">
                  Front-end code
                </button>
              </a>
              <a href="https://github.com/santhoshT15/E-Commerce-App/tree/main/backend">
                <button className="mx-2 p-3 rounded-md bg-[#66bfbf] hover:bg-[#1e8585] font-medium text-sm">
                  Back-end code
                </button>
              </a>
            </div>
          </div>
        </div>
        <hr className="text-[#11999e]" />
        {/* second project */}
        <div className="flex flex-col md:flex-row justify-center w-full my-5 bg-[#E4F9F5]">
          <div className="w-full sm:w-1/3 flex flex-col items-center justify-center">
            <h1 className="text-[#11999E] font-bold text-lg">Chat Website</h1>
            <p className="text-sm/7">
              This is a Full stack chat app using React JS and Firebase. In this
              chat app you can create an account and chat with your friends. In
              the chat you can also send the images. We will create the
              authentication using Firebase and store the chat images in
              Firebase storage. We will store the chat messages on Firestore
              Database, that send the chat message in Real-time.
            </p>
            <div className=" flex flex-row bg-[#66bfbf] text-white my-2 rounded-md hover:bg-[#1e8585]">
              <a href="https://chat-app-omega-henna.vercel.app/">
                <button className=" w-full mx-2 p-3 rounded-md">
                  <i className="fa-solid fa-code"></i>
                  <span className="px-2">Preview</span>
                </button>
              </a>
            </div>
            <div className=" flex flex-row text-white my-2">
              <a href="https://github.com/santhoshT15/chat-app.git">
                <button className="mx-2 p-3 rounded-md bg-[#66bfbf] hover:bg-[#1e8585] font-medium text-sm">
                  Front-end code
                </button>
              </a>
              {/* <a href="https://github.com/santhoshT15/E-Commerce-App/tree/main/backend">
                <button className="mx-2 p-3 rounded-md bg-[#66bfbf] hover:bg-[#1e8585] font-medium text-sm">
                  Back-end code
                </button>
              </a> */}
            </div>
          </div>
          <img
            className=" h-auto w-full md:w-1/2 border-solid border-[#E4F9F5] border-[5px] mx-5"
            src="chatapp.PNG"
            alt=""
          />
        </div>
        <hr className="text-[#11999e]" />
        {/* third project */}
        <div className="flex flex-col md:flex-row justify-center w-full my-5">
          <img
            className=" h-auto w-full md:w-1/2 border-solid border-[#E4F9F5] border-[5px] mx-5"
            src="vcs.PNG"
            alt=""
          />
          <div className="w-full sm:w-1/3 flex flex-col items-center justify-center">
            <h1 className="text-[#11999E] font-bold text-lg">
              Version Control Website
            </h1>
            <p className="text-sm/7">
              This application allow us to get, verify and update to latest of
              commits. Users can able to add repository, add commit, update
              commit and delete commit on basis of their need on the website.
            </p>
            <div className=" flex flex-row bg-[#66bfbf] text-white my-2 rounded-md hover:bg-[#1e8585]">
              <a href="https://sandyversioncontrolsystem.netlify.app/">
                <button className=" w-full mx-2 p-3 rounded-md">
                  <i className="fa-solid fa-code"></i>
                  <span className="px-2">Preview</span>
                </button>
              </a>
            </div>
            <div className=" flex flex-row text-white my-2">
              <a href="https://github.com/santhoshT15/version-control-system-fe.git">
                <button className="mx-2 p-3 rounded-md bg-[#66bfbf] hover:bg-[#1e8585] font-medium text-sm">
                  Front-end code
                </button>
              </a>
              <a href="https://github.com/santhoshT15/version-control-system-be.git">
                <button className="mx-2 p-3 rounded-md bg-[#66bfbf] hover:bg-[#1e8585] font-medium text-sm">
                  Back-end code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
