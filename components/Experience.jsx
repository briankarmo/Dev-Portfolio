import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Vite from "../assets/vite.png";
import NodeJS from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import api from "../assets/api.png";
import chat from "../assets/chatGPT.png";
import redux from "../assets/redux.png";
import next from "../assets/next.png";
import liquid from "../assets/liquid.webp"; // ✅ Added Shopify Liquid
import python from "../assets/python.png"; // ✅ Added Python

const techs = [
  { id: 1, src: html, title: "HTML", style: "shadow-orange-600" },
  { id: 2, src: css, title: "CSS", style: "shadow-blue-600" },
  { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: reactImage, title: "React", style: "shadow-sky-400" },
  { id: 5, src: Vite, title: "Vite", style: "shadow-purple-600" },
  { id: 6, src: github, title: "GitHub", style: "shadow-blue-400" },
  { id: 7, src: NodeJS, title: "Node JS", style: "shadow-green-600" },
  { id: 8, src: tailwind, title: "Tailwind CSS", style: "shadow-cyan-400" },
  { id: 9, src: redux, title: "Redux", style: "shadow-purple-400" },
  { id: 10, src: next, title: "Next.js", style: "shadow-gray-100" },
  { id: 11, src: chat, title: "ChatGPT", style: "shadow-blue-800" },
  { id: 12, src: api, title: "APIs", style: "shadow-red-600" },
  { id: 13, src: liquid, title: "Shopify Liquid", style: "shadow-green-400" },
  { id: 14, src: python, title: "Python", style: "shadow-yellow-400" }, // ✅ Added Python
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black py-20 w-full"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full text-white">
        {/* Title Section */}
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Experience
          </p>
          <p className="py-6 text-gray-300">
            Technologies I’ve worked with to build high-performance applications:
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`relative flex flex-col items-center justify-center shadow-lg ${style} rounded-lg p-4 h-36 transition-transform transform hover:scale-105 hover:shadow-xl duration-300`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-semibold px-4 text-center">
                {title}
              </div>
              <img src={src} alt={title} className="w-16 sm:w-20 mx-auto" />
              <p className="mt-3 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
