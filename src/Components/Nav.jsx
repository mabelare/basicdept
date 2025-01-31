import React, { useEffect } from "react";
import myVideos from "../assets/myVideos/video1.mp4";

const Nav = () => {
  useEffect(() => {
    const cursorContainer = document.querySelector(".custom-cursor-container");
    const videoElement = document.querySelector("video");

    const moveCursor = (e) => {
      cursorContainer.style.left = `${e.clientX}px`;
      cursorContainer.style.top = `${e.clientY}px`;
    };

    const addCursorHover = () => {
      cursorContainer.classList.add("hover");
      cursorContainer.classList.remove("hidden");
    };

    const removeCursorHover = () => {
      cursorContainer.classList.remove("hover");
      cursorContainer.classList.add("hidden");
      const videoRect = videoElement.getBoundingClientRect();
      cursorContainer.style.left = `${videoRect.left + videoRect.width / 2}px`;
      cursorContainer.style.top = `${videoRect.top + videoRect.height / 2}px`;
    };

    // Set initial position to the center of the video
    const setInitialPosition = () => {
      const videoRect = videoElement.getBoundingClientRect();
      cursorContainer.style.left = `${videoRect.left + videoRect.width / 2}px`;
      cursorContainer.style.top = `${videoRect.top + videoRect.height / 2}px`;
    };

    setInitialPosition();

    document
      .querySelector(".nav-container")
      .addEventListener("mousemove", moveCursor);
    document
      .querySelector(".nav-container")
      .addEventListener("mouseenter", addCursorHover);
    document
      .querySelector(".nav-container")
      .addEventListener("mouseleave", removeCursorHover);

    window.addEventListener("resize", setInitialPosition);

    return () => {
      document
        .querySelector(".nav-container")
        .removeEventListener("mousemove", moveCursor);
      document
        .querySelector(".nav-container")
        .removeEventListener("mouseenter", addCursorHover);
      document
        .querySelector(".nav-container")
        .removeEventListener("mouseleave", removeCursorHover);
      window.removeEventListener("resize", setInitialPosition);
    };
  }, []);

  return (
    <header>
      <nav className="relative w-full h-full nav-container">
        <a href="/" className="">
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen  object-cover pointer-events-none"
            controls={false}
          >
            <source src={myVideos} type="video/mp4" />
          </video>
        </a>
        <div className="absolute top-0 left-0 flex-1 flex justify-center items-center gap-16 text-white mt-10 p-5">
          <a
            href="#basic/dept"
            className="max-[435px]:text-xl max-[435px]:-mt-10 lg:text-2xl lg:ml-24 lg:-mt-2 md:ml-12 md:text-[17px] font-bold"
          >
            BASIC/DEPT<sup>®</sup>
          </a>
          <div className="ml-28 text-[14px] font-normal gap-16 justify-center items-center hidden xl:flex">
            <a href="#home" className="hover:underline">
              WORK
            </a>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
            <a href="#news" className="hover:underline">
              NEWS
            </a>
            <a href="#thinking" className="hover:underline">
              THINKING
            </a>
            <a href="#careers" className="hover:underline">
              CAREERS
            </a>
          </div>
          <div className="md:ml-96  lg:ml-96  -mt-10 ml-36 md:mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </svg>
          </div>
        </div>
        <div className="custom-cursor-container fixed pointer-events-none hidden">
          <div className="relative flex flex-col items-center">
            <div className="custom-cursor w-24 h-24 rounded-full bg-white flex justify-center items-center text-black">
              <span className="text-[12px] font-bold ">
                WATCH <br />
                <span className="ml-2">REEL</span>
              </span>
            </div>
            <div className="text-white text-xs mt-2 text-center font-medium">
              BASIC/DEPT <sup>®</sup> <br />
              2010
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
