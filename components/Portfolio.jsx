import React from "react";
import Boston from "../assets/portfolio/boston.png";
import ShutterGuide from "../assets/portfolio/shutter.png";
import Shopify from "../assets/portfolio/shopify.png";
import ModernApp from "../assets/portfolio/ModernApp.png";
import beats from "../assets/portfolio/beats.png";
import Three from "../assets/portfolio/three.png";
import bkinctube from "../assets/portfolio/bkinctube.png";
import weather from "../assets/portfolio/weather.png";
import Apple from "../assets/portfolio/Apple.png";
import Globe from "../assets/portfolio/Globe.png";

const portfolios = [
  {
    id: 1,
    src: Boston,
    demo: "https://www.bostoninnovations.org/company",
    description:
      "Boston Innovations - An AI-powered medical cost-reduction platform. Originating from Harvard Medical School, we leverage AI to make healthcare more affordable and efficient.",
  },
  {
    id: 2,
    src: ShutterGuide,
    demo: "https://shutterguide.io/",
    description: "ShutterGuide.IO - A Next.js & Tailwind CSS Web App with Firebase & Stripe.",
  },
  {
    id: 3,
    src: Shopify,
    demo: "https://zazadepotmi.myshopify.com/",
    description: "A Shopify-powered eCommerce store with custom Liquid theme development.",
  },
  {
    id: 4,
    src: ModernApp,
    demo: "https://bk-inc-modern-app.netlify.app/",
    description: "Modern business app built with React and TailwindCSS.",
  },
  {
    id: 5,
    src: Apple,
    demo: "https://briankarmo-appledemo.netlify.app/",
    description: "iPhone advertising landing page using Three.js with a 3D Model at the bottom!",
  },
  {
    id: 6,
    src: weather,
    demo: "https://briankarmo-weathertracker-w-reponsive.netlify.app/",
    description: "Weather tracker fetching live data from OpenWeatherMap API.",
  },
  {
    id: 7,
    src: Three,
    demo: "https://briankarmo-3js-3d.netlify.app/",
    description: "Portfolio built using JavaScript's 3D library, Three.js.",
  },
  {
    id: 8,
    src: bkinctube,
    demo: "https://bkcodetube.netlify.app/",
    description: "A video player app using React Router and YouTube v3 API.",
  },
  {
    id: 9,
    src: beats,
    demo: "https://bklyriks.netlify.app/",
    description: "Music-sharing app fetching data from Shazam Core API.",
  },
  {
    id: 10,
    src: Globe,
    demo: "https://earth-3d-3js.netlify.app/",
    description: "Controllable 3D Globe using Three.js, Orbit Controls & Framer Motion.",
  },
];

// 📌 Reusable Portfolio Item Component
const PortfolioItem = ({ src, demo, description, id }) => (
  <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
    <a href={demo} target="_blank" rel="noopener noreferrer">
      {/* Image with Overlay */}
      <div className="relative">
        <img
          src={src}
          alt="Project Thumbnail"
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 py-6">
          <p
            className={`text-white text-sm md:text-md font-semibold text-center ${
              id === 1 ? "whitespace-normal break-words max-h-auto" : "line-clamp-2"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </a>

    {/* Button Section - Matching Home Section Style */}
    <div className="flex justify-center p-4">
      <a href={demo} target="_blank" rel="noopener noreferrer">
        <button className="bg-gradient-to-r from-gray-600 to-gray-400 text-white font-semibold px-5 py-2 rounded-md 
                         hover:shadow-[0px_0px_15px_rgba(160,160,160,0.8)] hover:scale-105 
                         transition-all duration-300 text-lg tracking-wide drop-shadow-md">
          View Project
        </button>
      </a>
    </div>
  </div>
);

// 📌 Main Portfolio Component
const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-900 w-full py-20 text-white">
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center">
        <div className="pb-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Portfolio</p>
          <p className="py-6 text-gray-400">Check out some of my best projects below!</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {portfolios.map((project) => (
            <PortfolioItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
