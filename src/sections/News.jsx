import React from "react";

const News = () => {
  return (
    <div className="bg-gray-950 text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <h2 className="font-bold text-3xl mb-32 ml-20 mt-20">B/D®</h2>
        <div></div>

        <div className="font-bold text-3xl mb-32 mr-20 mt-20">
          <p className=" mb-4">
            We collaborate with ambitious brands and people. Let's build.
          </p>
          <a
            href="mailto:biz@basicagency.com"
            className="text-white underline hover:no-underline"
          >
            biz@basicagency.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-medium  mb-4 ml-20">
            ● STAY IN THE KNOW
          </h3>
          <form className="flex items-center border-b border-gray-500 pb-1 mb-16 ml-20">
            <input
              type="email"
              placeholder="Email Address"
              className=" bg-gray-950 text-white w-full focus:outline-none   "
            />
            <button type="submit" className="text-white text-[20px] ml-2">
              &rarr;
            </button>
          </form>
        </div>

        <div className="grid grid-cols-3 gap-4 ml-auto mb-16">
          <div>
            <h4 className="font-medium mb-2">SOCIAL</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">INITIATIVES</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Applied
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Brandbeats
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Moves
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  B/D Good
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">OFFICES</h4>
            <ul>
              <li>San Diego – CA</li>
              <li>New York – NY</li>
              <li>Bay Area – CA</li>
              <li>St. Louis – MO</li>
              <li>Amsterdam –NL</li>
              <li>London – EN</li>
              <li>Berlin – GE</li>
              <li>Argentina – AR</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
