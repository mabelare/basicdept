import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import video from "../assets/myVideos/video3.mp4";

const Adage = () => {
  return (
    <section className="mt-16 md:mt-32 lg:mt-64">
      <div className=" flex flex-col lg:flex-row justify-between px-6 py-12 items-start mb-12">
        <p className="text-[20px] md:text-[30px] lg:-mt-24 lg:text-[35px] font-bold text-gray-900 leading-tight ml-8">
          BASIC/DEPT <sup>®</sup>is a global branding <br /> and digital design
          agency building <br />
          products, services, and eCommerce <br /> experiences that turn
          cultural values <br /> into company value.
          <br />
          <div className="md:mt-20 mt-10">
            <span className="px-4 py-2   border font-bold border-gray-600 text-[15px] mt-8 md:text-[15px] lg:text-[13px] rounded-3xl hover:bg-gray-400">
              SEE THE WORK
            </span>
          </div>
        </p>

        <h1 className="text-[70px] mt-10 lg:-mt-16 md:text-[100px] lg:text-[180px] text-gray-900 font-extrabold ml-32 md:ml-[370px] lg:mr-4 md:-mt-4 ">
          B/D®
        </h1>
      </div>

      <div className="flex  overflow-x-auto snap-x snap-mandatory lg:flex-row justify-between items-center w-full gap-4 lg:gap-2 -mt-8 lg:overflow-x-hidden">
        <div className=" flex-shrink-0 lg:group w-[270px] md:w-[420px] md:ml-4 ml-2 lg:w-[30%] h-4/5 lg:ml-20 mt-12 lg:-mt-2">
          <img
            src={pic1}
            alt="pic1"
            className="w-full h-full object-cover  scale-100 lg:transform lg:transition-transform Lg:duration-300 lg:hover:scale-105"
          />

          <p className="text-[20px] lg:text:[20px] md:text-[25px] mt-4  font-bold group-hover:underline">
            PATAGONIA
          </p>
          <br />
          <p className="text-[15px] md:text-[20px] -mt-2 md:-mt-4 font-medium">
            AN ECOMMERC EXPERIENCE <br />
            DRIVEN BY PATAGONIA'S <br />
            BRAND MISSION
          </p>
        </div>
        <div className=" flex-shrink-0 lg:group w-[270px] md:w-[420px] md:ml-4 ml-2   lg:w-[30%] h-4/5 mt-12 lg:mr-2 lg:-mt-2">
          <img
            src={pic2}
            alt="pic2"
            className="w-full h-full object-cover  scale-100 lg:transform lg:transition-transform Lg:duration-300 lg:hover:scale-105"
          />

          <p className=" text-[20px] lg:text-[20px] md:text-[25px] mt-4 md:mt-6 font-bold group-hover:underline">
            WILSON
          </p>
          <br />
          <p className="text-[15px] md:text-[20px] -mt-2 md:-mt-4 font-medium">
            A CENTURY-OLD SPORTS
            <br />
            BRAND FINDING ITS PLACE IN
            <br />
            CULTURE
          </p>
        </div>
        <div className=" flex-shrink-0 lg:group w-[270px] md:w-[420px]   lg:w-[30%] h-4/5 lg:mt-6 md:ml-2  mt-[70px] lg:mr-16">
          <a href="/" className="">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transform   transition-transform duration-300 hover:scale-105 pointer-events-none"
            >
              <source src={video} type="video/mp4" />
            </video>
          </a>

          <p className=" text-[20px] lg:text-[20px] md:text-[25px] mt-4 md:mt-6 font-bold group-hover:underline">
            GOOGLE STORE
          </p>
          <br />
          <p className="text-[15px] md:text-[20px] -mt-2 md:-mt-4 font-medium">
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
