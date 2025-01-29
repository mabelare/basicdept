import React from "react";
import press1 from "../assets/images/press1.webp";
import press2 from "../assets/images/press2.webp";
import press3 from "../assets/images/press3.webp";
import press4 from "../assets/images/press4.webp";
import press5 from "../assets/images/press5.webp";
import press6 from "../assets/images/press6.webp";
import press7 from "../assets/images/press7.webp";
import press8 from "../assets/images/press8.webp";
import press9 from "../assets/images/press9.webp";
import press10 from "../assets/images/press10.webp";
import press13 from "../assets/images/press13.webp";
import press12 from "../assets/images/press12.webp";

const Connects = () => {
  return (
    <section>
      <div className="flex justify-between px-6 py-12 items-start">
        <h2 className="text-[25px] ml-6 lg:text-4xl font-bold leading-none lg:ml-12">
          FEATURED <br /> NEWS
        </h2>
        <span className="px-6 py-2 border mr-6 lg:mr-12 font-bold border-black text-[12px] rounded-3xl hover:bg-gray-500">
          VIEW ALL
        </span>
      </div>
      <div className="w-9/10 border-b border-gray-600 mx-auto"></div>

      <div>
        <div className="">
          <div className="flex flex-col lg:flex-row group pb-4">
            <img
              src={press12}
              alt="press12"
              className="w-[500px] transform transition-transform duration-300 hover:scale-105 lg:p-12 p-4 lg:ml-8 "
            />
            <div className="flex flex-col lg:flex-row group-hover:underline gap-64">
              <h3 className="text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2 lg:mt-12">
                TOMORROW'S SHOPPER:FIVE <br />
                WAYS BRANDS CAN REACH GEN <br />
                ALPHA TODAY
              </h3>
              <div className="">
                <span className=" hidden lg:flex text-[30px] lg:text-[50px]  lg:mt-8 lg:-ml-16  ">
                  &rarr;
                </span>
              </div>
            </div>
          </div>

          <div className="w-9/10 border-b border-gray-600 -mt-64 lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row group pb-4">
            <img
              src={press5}
              alt="press5"
              className="  w-[500px] transform transition-transform duration-300 hover:scale-105 lg:p-12 p-6 lg:ml-8 "
            />
            <div className="flex flex-col lg:flex-row group-hover:underline gap-32">
              <h3 className="text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2 lg:mt-12">
                ARE SNACKS THE NEW MEALS IN <br />
                QSR?
              </h3>
              <span className="text-[50px] lg:mt-8  hidden lg:flex lg:ml-12 text-gray-800">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600 lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row group pb-4">
            <img
              src={press6}
              alt="press6"
              className=" w-[500px] transform transition-transform duration-300 hover:scale-105 lg:p-12 p-6 lg:ml-8 "
            />
            <div className="flex flex-col lg:flex-row group-hover:underline gap-32">
              <h3 className="text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2 lg:mt-12">
                DAVE LUCUS OF BASIC/DEPT <br />
                LEADS PANEL DISCUSSION ON <br />
                INCLUSIVE DESIGN AT MACH HAUS <br />
                NYC
              </h3>
              <span className="text-[50px]  hidden lg:flex mt-8 mr-20 text-gray-800">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600   lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row group pb-4">
            <img
              src={press7}
              alt="press7"
              className="  w-[500px] transform transition-transform duration-300 hover:scale-105 lg:p-12 p-6 lg:ml-8 "
            />
            <div className="flex flex-col lg:flex-row group-hover:underline gap-32">
              <h3 className="text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2 lg:mt-12">
                FROM ORDINARY TO <br />
                EXTRAORDINARY:BRINGING THE <br />
                IN-STORE LUXURY EXPERIENCE <br />
                ONLINE
              </h3>
              <span className="text-[50px]  hidden lg:flex text-gray-800 mt-8 lg:ml-10  ">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600  lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row group pb-4">
            <img
              src={press1}
              alt="press1"
              className=" w-[500px] transform transition-transform duration-300 hover:scale-105 lg:p-12 p-6 lg:ml-8  "
            />
            <div className="flex flex-col lg:flex-row group-hover:underline gap-32"></div>
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-32">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                THE 28TH ANNUAL WEBBY <br />
                AWARDS NODS ARE IN
              </h3>
              <span className="text-[50px]  hidden lg:flex text-gray-800  mt-8 lg:ml-30 ml-[160px]  ">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group pb-4">
            <img
              src={press2}
              alt="press2"
              className="  w-[500px]    transform transition-transform duration-300 hover:scale-105   lg:p-12 p-6 lg:ml-8  "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-32">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                GENERATION ALPHA: SAY HELLO <br />
                TO TOMORROW'S SHOPPER
              </h3>
              <span className="text-[50px]  hidden lg:flex text-gray-800 mt-8  ml-[25px]">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group pb-4">
            <img
              src={press3}
              alt="press3"
              className="   w-[500px] transform transition-transform duration-300 hover:scale-105 lg:p-12 p-6 lg:ml-8 "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-20">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                NO LONGER THE AFFORDABLE <br />
                OPTION, QRSS LOOK TO CONNECT <br /> WITH CULTURE
              </h3>
              <span className="text-[50px]  hidden lg:flex group-hover:hidden  text-gray-800  mt-8 ml-6 ">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group pb-4">
            <img
              src={press4}
              alt="press4"
              className="  w-[500px] transform transition-transform duration-300 hover:scale-105  lg:p-12 p-6 lg:ml-8  "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-32">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                THE FUTURE OF FASHION AND AI <br />
                AT GLOSSY'S ECOMMERCE <br />
                SUMMIT
              </h3>
              <span className="text-[50px]   hidden lg:flex text-gray-800  mt-8  ml-4">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group pb-4">
            <img
              src={press8}
              alt="press8"
              className="   w-[500px] transform transition-transform duration-300 hover:scale-105  lg:p-12 p-6 lg:ml-8 "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-32">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                RETAILS NEW PLAYGROUND: <br />
                WHERE PHYSICAL MEETS DIGITAL
              </h3>
              <span className="text-[50px]   hidden lg:flex  text-gray-800 mt-8 mr-6">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group  pb-4">
            <img
              src={press9}
              alt="press9"
              className="   w-[500px] transform transition-transform duration-300 hover:scale-105  lg:p-12 p-6 lg:ml-8  "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-32">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                GEN ALPHA,THE BETA TEST FOR <br />
                HOW BRAND'S CAN REACH A NEW <br />
                GENERATION
              </h3>
              <span className="text-[50px]   hidden lg:flex text-gray-800 mt-8 mr-6">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group pb-4">
            <img
              src={press10}
              alt="press10"
              className="   w-[500px] transform transition-transform duration-300 hover:scale-105  lg:p-12 p-6 lg:ml-8  "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-32">
              <h3 className=" text-[20px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                NEW PROJECTS ON THE PODIUM <br />
                FOR THE 28TH WEBBY AWARDS
              </h3>
              <span className="text-[50px]   hidden lg:flex text-gray-800 mt-8 mr-12">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>

          <div className="flex flex-col lg:flex-row  group pb-4">
            <img
              src={press13}
              alt="press13"
              className="  w-[500px]  transform transition-transform duration-300 hover:scale-105   lg:p-12 p-6 lg:ml-8  "
            />
            <div className="flex flex-col lg:flex-row  group-hover:underline gap-64">
              <h3 className=" text-[15px] lg:text-[35px] ml-6 text-gray-800 font-medium leading-none -mt-2 mb-2  lg:mt-12">
                WHAT SOFIA COPPOLA CAN <br />
                TEACH US ABOUT SHIFTING <br />
                CULTURE
              </h3>
              <span className="text-[50px]  hidden lg:flex text-gray-800 mt-8 -ml-8 ">
                &rarr;
              </span>
            </div>
          </div>
          <div className="w-9/10 border-b border-gray-600    lg:-mt-12 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Connects;
