import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import video from "../assets/myVideos/video3.mp4";

const Adage = () => {
  return (
    <section>
      <div className="flex justify-between  px-6 py-12 items-start">
        <h1 className=" text-[40px] text-gray-900 font-medium leading-none space-y-4 ml-16 w-2/4 mt-20 ">
          BASIC/DEPT <sup>®</sup> is a global branding <br />
          and digital design agency building <br />
          products, services, and eCommerce <br />
          experiences that turn cultural values <br />
          into company value.
          <br />
          <span className=" px-6 py-2 border font-bold border-gray-600 text-[13px] rounded-3xl hover:bg-gray-400">
            SEE THE WORK
          </span>
        </h1>
        <div className="mt-8 md:mt-0 mr-16">
          <h2 className="text-[220px] font-extrabold text-gray-800 ">B/D®</h2>
        </div>
      </div>

      <div className="flex justify-between items-center w-full gap-4">
        <div className="w-1/3 h-4/5  ml-16">
          <img src={pic1} alt="pic1" className="w-full h-full object-cover" />
          <p className="text-[25px]  mt-6 font-bold">PATAGONIA</p>
          <br />
          <p className=" text-[15px] -mt-4 font-medium">
            AN ECOMMERC EXPERIENCE <br />
            DRIVEN BY PATAGONIA'S <br />
            BRAND MISSION
          </p>
        </div>
        <div className="w-1/3 h-4/5 ">
          <img src={pic2} alt="pic2" className="w-full h-full object-cover" />
          <p className=" text-[25px]  mt-6 font-bold">WILSON</p>
          <br />
          <p className=" text-[15px] -mt-4 font-medium ">
            A CENTURY-OLD SPORTS
            <br />
            BRAND FINDING ITS PLACE IN
            <br />
            CULTURE
          </p>
        </div>
        <div className="w-1/3 h-4/5 mt-6 mr-16">
          <a href="/" className="">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src={video} type="video/mp4" />
            </video>
          </a>
          <p className="text-[25px]  mt-6 font-bold">GOOGLE STORE</p>
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
      <div className="flex justify-between  ">
        <p className="ml-24">00</p>
        <p>/05</p>
        <p className="mr-24">●</p>
      </div>
    </section>
  );
};

export default Adage;
