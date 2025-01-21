import React from "react";
import video2 from "../assets/myVideos/video2.mp4";

const Featured = () => {
  return (
    <section>
      <div className="flex justify-between  px-6 py-12 items-start">
        <h1 className=" text-[40px] text-gray-900 font-medium leading-none space-y-4 ml-16 w-2/4 mt-20 ">
          BASIC/DEPT <sup>®</sup> <br />
          HELPS
          <br />
          BRANDS ●<br />
          CONNECT W/ <br />
          CULTURE
          <br />
          <p>
            ADWEEK <span>AGENCY SPOTLIGHT</span>
          </p>
          <span className=" px-6 py-2 border font-bold border-gray-600 text-[13px] rounded-3xl hover:bg-gray-400">
            ABOUT US
          </span>
        </h1>
        <div className="mt-8 md:mt-0 mr-16">
          <a href="/" className="">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src={video2} type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
