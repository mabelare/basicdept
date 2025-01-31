import React from "react";
import google from "../assets/images/google.png";
import kfc from "../assets/images/kfc.png";
import at from "../assets/images/at.png";
import wilison from "../assets/images/wilison.png";
import patagonia from "../assets/images/patagonia.jpg";

const Bdr = () => {
  return (
    <section className="lg:px-6 lg:py-12 mt-8 -mb-24">
      <h1 className=" text-[20px] lg:text-[40px] text-gray-900 font-bold -mb-64 lg:mb-6 ml-12">
        FEATURED <br /> ENGAGEMENTS
      </h1>

      <div className="flex overflow-x-auto snap-x snap-mandatory ">
        <div
          className="flex-shrink-0 w-[350px] lg:w-[450px] h-screen snap-start  text-left lg:p-6 lg:border-r 
         flex  flex-col justify-center items-center "
        >
          <img
            src={google}
            alt="google"
            className=" object-cover mb-6 w-20 mr-60 lg:-mt-9 lg:mb-32 "
          />

          <h1 className="lg:text-2xl font-semibold mb-2 mr-60 -mt-8">
            GOOGLE{" "}
          </h1>
          <p className="lg:text-lg ">
            Our embedded partnership with google is <br />
            as deep as its gets. We're the lead creative <br />
            agency for google store and provide <br />
            strategy,design, and prototyping to other <br />
            divisions. Learn more about our <br />
            partnership <span className="underline">here.</span>
          </p>
        </div>

        <div className="flex-shrink-0 w-[350px] lg:w-[450px] h-screen snap-start  text-left lg:p-6  lg:border-r flex  flex-col justify-center items-center">
          <img
            src={kfc}
            alt="kfc"
            className=" object-cover mr-[250px] w-[70px] lg:w-24 "
          />

          <h1 className="lg:text-2xl font-semibold lg:mb-2 mr-72 lg:mr-64  lg:mt-24">
            KFC
          </h1>
          <p className="lg:text-lg mr-10 lg:mr-0">
            An award-winning global,digital <br />
            transformation engagement spanning <br />
            eCommerce,mobile app, and new drive <br />
            thru experiences.Bringing KFC's brand <br />
            story to life while making it easier for <br />
            customers to buy chicken, Learn more <br />
            about our partnership <span className="underline">here.</span>
          </p>
        </div>

        <div className="flex-shrink-0 w-[350px] lg:w-[450px] h-screen snap-start -mt-4 text-left lg:p-6   lg:-mt-6 lg:border-r flex  flex-col justify-center items-center">
          <img
            src={wilison}
            alt="wilison"
            className=" object-cover mr-[280px] -mb-2 w-28 lg:w-34  lg:mb-[180px] "
          />

          <h1 className="lg:text-2xl font-semibold lg:mb-2 mr-[300px]   lg:-mt-20">
            WILSON
          </h1>
          <p className="lg:text-lg mr-10 lg:mr-0">
            A reimagining of Wilson's brand visual <br />
            identity, and brand campaign, to support <br />
            a new product drop and the launch of the <br />
            first brick and mortar retail location in the <br />
            brand's 108-year history.Read our full case study{" "}
            <span className="underline">here.</span>
          </p>
        </div>

        <div className="flex-shrink-0 w-[350px] lg:w-[450px] h-screen snap-start  text-left lg:p-6  lg:border-r flex  flex-col justify-center items-center">
          <img
            src={at}
            alt="at"
            className="object-cover w-12  mr-[280px] lg:-mt-42 mb-4 lg:mb-[121px] "
          />

          <h1 className="lg:text-2xl font-semibold lg:mb-2 mr-[260px]">AT&T</h1>
          <p className="Lg:text-lg mr-10  lg:mr-0">
            Redesigning the digital flagship for the <br />
            largest telecommunications company in <br />
            the world. Creating frictionless paths to <br />
            purchase for a wide range of consumers <br />
            across a vast portfolio of products and <br />
            services.
          </p>
        </div>

        <div className="flex-shrink-0 w-[350px] lg:w-[450px] h-screen snap-start  text-left lg:p-6  lg:border-r flex  flex-col justify-center items-center">
          <img
            src={patagonia}
            alt="patagonia"
            className=" object-cover w-28 lg-w-36 mr-[260px] -mt-42 lg:mb-[120px] "
          />
          <div className="border-b border-gray-600 mt-4 mx-auto"></div>
          <h1 className="lg:text-2xl font-semibold lg:mb-2 mr-[260px] -mt-4">
            PATAGONIA
          </h1>
          <p className="lg:text-lg mr-10  lg:mr-0">
            Ongoing partnership providing strategy, <br />
            branding,experience design, and <br />
            development focused on bringing their mission and offerings to
            consumers <br />
            through brand-led programs and platforms. Read our full case study{" "}
            <span className="underline">here.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bdr;
