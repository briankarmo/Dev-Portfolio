import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Front End Software Engineer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Welcome to my JavaScript portfolio! I specialize in creating dynamic, interactive, and user-friendly web applications.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-2/3 md:w-1/2 flex flex-col items-center">
          <div className="absolute w-[90%] h-[90%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg"></div>
          <img
            src={HeroImage}
            alt="Hero Profile"
            className="relative rounded-2xl w-full object-cover shadow-xl hover:scale-105 transition-transform duration-300"
          />

          {/* 📌 Portfolio Button - Directly Beneath Hero Image */}
          <div className="w-full flex justify-center mt-6">
            <Link
              to="portfolio"
              smooth
              duration={500}
              aria-label="Go to portfolio"
              className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
