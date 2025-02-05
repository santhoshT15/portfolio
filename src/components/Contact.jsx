import React from "react";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center items-center my-11 bg-[#E4F9F5]"
      id="contact"
    >
      <div className="flex flex-col sm:flex-row w-1/2 justify-center items-center">
        <h1 className="text-3xl font-bold my-4 ">
          CONTACT <span className="text-[#4c80ba]">ME</span>
          <hr className="bg-[#4c80ba] h-[1.5px] border-none" />
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center my-6">
        <a href="tel:+918122968854">
          <div className="w-1/2 flex flex-row ">
            <div className=" mx-2">
              <i className="fa-solid fa-phone fa-2x text-[#11999E]"></i>
            </div>
            <div className="mx-1">
              <h2 className="text-base flex flex-col">
                <span className="font-medium">Phone</span>
                <span className="text-gray-500 text-sm">8122968854</span>
              </h2>
            </div>
          </div>
        </a>
        <a href="mailto:ramsanthoshbms@gmail.com">
          <div className="w-1/2 flex flex-row ">
            <div className="w-auto mx-2">
              <i className="fa-solid fa-envelope fa-2x text-[#11999E]"></i>
            </div>
            <div className="w-3/4">
              <h2 className="text-base flex flex-col">
                <span className="font-medium">Email</span>
                <span className="text-gray-500 text-sm">
                  ramsanthoshbms@gmail.com
                </span>
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
