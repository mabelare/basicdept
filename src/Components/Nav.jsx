import React from "react";
import myVideos from "../assets/myVideos/video1.mp4";

const Nav = () => {
  return (
    <header>
      <nav className="relative w-full h-full">
        <a href="/" className="">
          <video
            controls
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover pointer-events-none"
          >
            <source src={myVideos} type="video/mp4" />
          </video>
        </a>
        <div className=" absolute top-0 left-0 flex-1 flex justify-center items-center gap-16 text-white mt-10 p-5 ">
          <a
            href="#basic/dept"
            className=" max-[435px]:text-xl max-[435px]:-mt-10 lg:text-2xl  lg:ml-24 lg:-mt-2 md:text-[17px]  font-bold "
          >
            BASIC/DEPT
          </a>
          <div className="  ml-28 text-[14px]  font-normal  gap-16 justify-center items-center hidden xl:flex">
            <a href="#home" className="">
              WORK
            </a>
            <a href="#about" className="">
              ABOUT
            </a>
            <a href="#news" className="">
              NEWS
            </a>
            <a href="#thinking" className="">
              THINKING
            </a>
            <a href="#careers" className="">
              CAREERS
            </a>
            <a href="#contact" className="">
              CONTACT
            </a>
          </div>
          <div className="  xl:ml-56  sm:ml-72   lg:ml-96  max-[435px]:ml-36  max-[435px]:-mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
