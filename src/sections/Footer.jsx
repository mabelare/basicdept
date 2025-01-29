import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" gap-4  bg-zinc-950 pt-10 pb-4">
        <div className=" flex flex-col lg:flex-row justify-between font-bold text-[12px] lg:text-[10px] text-gray-600 hover:text-white">
          <h3 className="lg:ml-12 ml-32 -mt-4 lg:-mt-0 md:ml-64">
            BASIC/DEPT<sup>®</sup>, Inc 10 - 25©
          </h3>
          <h3 className="ml-20 md:ml-52">
            Easy to understand, impossible to ignore.<sup>™</sup>
          </h3>
          <h3 className="lg:mr-12 ml-36 md:ml-[270px]">
            Terms, Privacy Policy
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
