import React, { useEffect, useRef } from "react";
import video2 from "../assets/myVideos/video2.mp4";

const Featured = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.style.backgroundColor = "#252422";
          } else {
            section.style.backgroundColor = "";
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => {
      if (observer && section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section transition-colors duration-500"
    >
      <div className="flex flex-col lg:flex-row justify-between px-6 py-12 items-start">
        <h1 className="text-[20px] md:text-[25px] order-2 lg:order-1 lg:text-[88px] text-[#f9cdcd] font-semibold leading-none space-y-4 ml-2 md:ml-6 lg:ml-16 w-2/4 mt-20">
          BASIC/DEPT<sup className="lg:text-[50px]">®</sup> <br />
          HELPS BRANDS ●<br />
          CONNECT W/ <br />
          CULTURE
          <br />
          <p className="text-[12px] md:text-[15px] text-pink-300">
            ADWEEK <span className="text-[#f9cdcd]">AGENCY SPOTLIGHT</span>
          </p>
          <div className="mt-6">
            <span className="px-6 py-2 border font-bold border-gray-600 text-[12px] lg:text-[13px] rounded-3xl hover:bg-gray-400">
              ABOUT US
            </span>
          </div>
        </h1>
        <div className="  lg:mr-16 order-1 mt-16 lg:order-2">
          <a href="/" className="">
            <video
              autoPlay
              loop
              muted
              playsInline
              className=" ml-4 md:ml-8 w-11/12 lg:w-full h-full object-cover pointer-events-none"
              controls={false}
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
