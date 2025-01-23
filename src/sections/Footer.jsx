import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" gap-4  bg-zinc-950 pt-10 pb-4">
        <div className=" flex justify-between font-bold text-[10px] text-gray-600 hover:text-white">
          <h3 className="ml-12">
            BASIC/DEPT<sup>®</sup>, Inc 10 - 25©
          </h3>
          <h3>
            Easy to understand, impossible to ignore.<sup>™</sup>
          </h3>
          <h3 className="mr-12">Terms, Privacy Policy</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
