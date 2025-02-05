import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center my-11 md:py-14"
      id="about"
    >
      <div className="flex flex-col sm:flex-row w-1/2 justify-center items-center">
        <h1 className="text-3xl font-bold my-4 ">
          ABOUT <span className="text-[#4c80ba]">ME</span>
          <hr className="bg-[#4c80ba] h-[1.5px] border-none" />
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row px-8 w-full md:w-[90%] my-4">
        <img
          className="w-full md:w-1/4 h-auto md:mx-5"
          src="about_image.png"
          alt=""
        />
        <div className="w-full md:w-1/4 mx-3">
          <p className="text-sm/7">
            Hello, <span className="text-[#4c80ba]">I'm Santhosh T</span>, an
            aspiring Full-Stack Web Developer passionate about creating seamless
            and engaging user experiences. I work across both frontend and
            backend frameworks, always striving to stay updated with the latest
            industry trends and technologies.
            <hr className="border-none my-4" />
            If you're looking for a dedicated and innovative developer to bring
            your ideas to life, feel free to reach out. I'd love to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
