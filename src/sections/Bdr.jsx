import React from "react";
import google from "../assets/images/google.png";
import kfc from "../assets/images/kfc.png";
import at from "../assets/images/at.png";
import wilison from "../assets/images/wilison.png";
import patagonia from "../assets/images/patagonia.jpg";

const Bdr = () => {
  return (
    <section className="px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">FEATURED ENGAGEMENT</h1>
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap space-x-6">
          <div className="flex-shrink-0 w-64">
            <img
              src={google}
              alt="google"
              className="w-full h-full object-cover"
            />
            <div className="border-b border-gray-600 mt-4 mx-auto"></div>
            <p className="text-[25px] mt-6 font-bold">Google</p>
          </div>
          <div className="flex-shrink-0 w-64">
            <img src={kfc} alt="kfc" className="w-full h-full object-cover" />
            <div className="border-b border-gray-600 mt-4 mx-auto"></div>
            <p className="text-[25px] mt-6 font-bold">KFC</p>
          </div>
          <div className="flex-shrink-0 w-64">
            <img src={at} alt="at" className="w-full h-full object-cover" />
            <div className="border-b border-gray-600 mt-4 mx-auto"></div>
            <p className="text-[25px] mt-6 font-bold">AT</p>
          </div>
          <div className="flex-shrink-0 w-64">
            <img
              src={wilison}
              alt="wilison"
              className="w-full h-full object-cover"
            />
            <div className="border-b border-gray-600 mt-4 mx-auto"></div>
            <p className="text-[25px] mt-6 font-bold">Wilison</p>
          </div>
          <div className="flex-shrink-0 w-64">
            <img
              src={patagonia}
              alt="patagonia"
              className="w-full h-full object-cover"
            />
            <div className="border-b border-gray-600 mt-4 mx-auto"></div>
            <p className="text-[25px] mt-6 font-bold">Patagonia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bdr;
