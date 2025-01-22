import React, { useEffect, useRef } from "react";
import video2 from "../assets/myVideos/video2.mp4";

const Featured = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const colors = ["#252422"]; // Define your colors here

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.style.backgroundColor = colors[0];
            section.classList.add("in-view");
          } else {
            section.style.backgroundColor = "";
            section.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section transition-colors duration-500"
    >
      <div className="flex justify-between px-6 py-12 items-start">
        <h1 className="text-[88px] text-[#f9cdcd] font-semibold leading-none space-y-4 ml-16 w-2/4 mt-20">
          BASIC/DEPT<sup className="text-[50px]">®</sup> <br />
          HELPS
          <br />
          BRANDS ●<br />
          CONNECT W/ <br />
          CULTURE
          <br />
          <p className="text-[20px] text-pink-300">
            ADWEEK <span className="text-[#f9cdcd]">AGENCY SPOTLIGHT</span>
          </p>
          <span className="px-6 py-2 border font-bold border-gray-600 text-[13px] rounded-3xl hover:bg-gray-400">
            ABOUT US
          </span>
        </h1>
        <div className="md:mt-20 mr-16">
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
