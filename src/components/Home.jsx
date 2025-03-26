import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <section id="home" className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 flex justify-center items-center px-6">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Text section with responsive center alignment and padding adjustment */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-lg mx-auto md:mx-0 md:text-center md:items-center transform md:-translate-y-20 pt-10 md:pt-0"> 
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            Full-Stack <span className="text-cyan-400">Software Engineer</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Welcome to my <span className="text-blue-400">JavaScript portfolio</span>! 
            I specialize in creating <span className="text-cyan-400">dynamic</span>, 
            <span className="text-blue-400"> interactive</span>, and 
            <span className="text-cyan-400"> user-friendly</span> web applications.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-2/3 md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur-[45px] opacity-40"></div>
          <img 
            src={HeroImage} 
            alt="Hero Profile" 
            className="relative rounded-2xl w-full object-cover shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-10 md:mt-12">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-50}
              aria-label="View my portfolio"
              className="group px-6 py-3 flex items-center justify-center rounded-md 
                         bg-gradient-to-r from-gray-600 to-gray-400  
                         cursor-pointer hover:shadow-[0px_0px_20px_rgba(160,160,160,0.8)] 
                         transition-all duration-300 text-gray-900 font-bold text-lg tracking-wide 
                         drop-shadow-[1px_1px_4px_rgba(0,0,0,0.6)]"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          {/* Sticky Contact Info Button - Bottom Left */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home; 