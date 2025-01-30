import React from "react";
import adage from "../assets/images/adage.png";
import webby from "../assets/images/Webby1.jpg";
import campaign from "../assets/images/campaignlogo.webp";
const Hero = () => {
  return (
    <section className="mt-16 md:mt-32 lg:mt-64">
      <div className="flex justify-between items-center  ">
        <div className="mr-4 md:leading-none lg:ml-28  mb-8 lg:leading-none text-gray-600 ">
          <img
            src={adage}
            alt="adage logo"
            className="lg:w-[200px] md:w-[140px] w-[70px] mt-6 ml-14"
          />
          <p className="text-center text-[8px] md:text-[12px] lg:text-[14px] lg:mt-6  ml-12 -mb-6 md:-mb-4 mt-12  md:mt-12 font-semibold">
            DESIGN AND BRANDING
          </p>
          <br />
          <p className="text-center text-[8px] md:text-[12px] lg:text-[14px] ml-10 font-semibold">
            AGENCY OF THE YEAR
          </p>
        </div>
        <div className="mr-4 md:ml-20 md:leading-none lg:ml-8 mb-8 lg:-mt-4 mt-8 text-gray-600">
          <img
            src={webby}
            alt="webby logo"
            className="lg:w-[200px] md:w-[140px] w-[70px] -mt-10 ml-4 md:-mt-14"
          />
          <p className="text-center text-[8px] md:text-[12px] lg:text-[14px] mt-12   md:ml-6 font-semibold">
            AGENCY OF THE YEAR
          </p>
        </div>
        <div className=" md:ml-16 lg:mr-48 md:leading-none lg:leading-none text-gray-600">
          <img
            src={campaign}
            alt="campaign logo"
            className="lg:w-[200px] md:w-[140px] w-[70px] ml-6 "
          />
          <p className="text-center mr-6 text-[8px] md:text-[12px] lg:text-[14px] -mb-6 md:ml-4 lg:ml-8 lg:-mb-2 md:-mb-4 mt-12  font-semibold">
            DIGITAL INNOVATION AGENCY
          </p>
          <br />
          <p className="text-center mr-6 text-[8px] md:text-[12px] lg:text-[14px] md:ml-4 lg:ml-6 font-semibold">
            OF THE YEAR FINALIST
          </p>
        </div>
      </div>
      <div className="w-9/10 border-b border-gray-600 md:mt-24 md:ml-10  lg:mt-56 lg:ml-16 ml-6 mt-6 "></div>
    </section>
  );
};
export default Hero;
