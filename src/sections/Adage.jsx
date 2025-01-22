import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import video from "../assets/myVideos/video3.mp4";

const Adage = () => {
  return (
    <section className="mt-64">
      <div className="flex justify-between items-center w-full gap-4">
        <div className="group w-1/3 h-4/5 ml-16">
          <img
            src={pic1}
            alt="pic1"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />

          <p className="text-[25px] mt-6 font-bold group-hover:underline">
            PATAGONIA
          </p>
          <br />
          <p className="text-[15px] -mt-4 font-medium">
            AN ECOMMERC EXPERIENCE <br />
            DRIVEN BY PATAGONIA'S <br />
            BRAND MISSION
          </p>
        </div>
        <div className="group w-1/3 h-4/5">
          <img
            src={pic2}
            alt="pic2"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />

          <p className="text-[25px] mt-6 font-bold group-hover:underline">
            WILSON
          </p>
          <br />
          <p className="text-[15px] -mt-4 font-medium">
            A CENTURY-OLD SPORTS
            <br />
            BRAND FINDING ITS PLACE IN
            <br />
            CULTURE
          </p>
        </div>
        <div className="group w-1/3 h-4/5 mt-6 mr-16">
          <a href="/" className="">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 pointer-events-none"
            >
              <source src={video} type="video/mp4" />
            </video>
          </a>

          <p className="text-[25px] mt-6 font-bold group-hover:underline">
            GOOGLE STORE
          </p>
          <br />
          <p className="text-[15px] -mt-4 font-medium">
            AN ECOMMERCE EXPERIENCE
            <br />
            HELPING GOOGLE BRING ITS <br />
            HARDWARE TO PEOPLE <br />
            ACROSS THE GLOBE
          </p>
        </div>
      </div>
      <div className="w-9/10 border-b border-gray-600 mt-28 mx-auto"></div>
      <div className="flex justify-between">
        <p className="ml-24">00</p>
        <p>/05</p>
        <p className="mr-24">●</p>
      </div>
    </section>
  );
};

export default Adage;
