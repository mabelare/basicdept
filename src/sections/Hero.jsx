import React from "react";
import adage from "../assets/images/adage.png";
import webby from "../assets/images/webby1.jpg";
import campaign from "../assets/images/campaignlogo.webp";
const Hero = () => {
  return (
    <section className="mt-64">
      <div className="flex justify-between items-center  ">
        <div className="ml-48">
          <img src={adage} alt="adage logo" width={200} />
          <p className="text-center text-[12px] -mb-4 mt-12 font-semibold">
            DESIGN AND BRANDING
          </p>
          <br />
          <p className="text-center text-[12px] font-semibold">
            AGENCY OF THE YEAR
          </p>
        </div>
        <div className="mr-10">
          <img src={webby} alt="webby logo" width={200} />
          <p className="text-center text-[12px] mt-8 font-semibold">
            AGENCY OF THE YEAR
          </p>
        </div>
        <div className="mr-48">
          <img src={campaign} alt="campaign logo" width={200} />
          <p className="text-center text-[12px] -mb-4 mt-12 font-semibold">
            DIGITAL INNOVATION AGENCY
          </p>
          <br />
          <p className="text-center text-[12px] font-semibold">
            OF THE YEAR FINALIST
          </p>
        </div>
      </div>
      <div className="w-9/10 border-b border-gray-600 mt-56 ml-16"></div>
    </section>
  );
};
export default Hero;
