import React from 'react';
import visual from '../assets/visual.png';  // Visual Studio Code
import html from '../assets/html.png';  // HTML
import css from '../assets/css.png';  // CSS
import javascript from '../assets/javascript.png';  // JavaScript
import reactImage from '../assets/react.png';  // React JS
import typescript from '../assets/typescript.png'; // TypeScript
import vue from '../assets/vue.png'; // Vue.js
import redux from '../assets/redux.png'; // Redux
import next from '../assets/next.png'; // Next.js
import reactNative from '../assets/reactnative.png'; // React Native
import vite from '../assets/vite.png';  // Vite
import nodeJS from '../assets/node.png';  // Node.js
import express from '../assets/express.png'; // Express.js
import nest from '../assets/nest.png'; // NestJS
import mongo from '../assets/mongo.png'; // MongoDB
import aws from '../assets/aws.png'; // AWS
import php from '../assets/php.png'; // PHP
import laravel from '../assets/laravel.png'; // Laravel
import python from '../assets/python.png'; // Python
import liquid from '../assets/liquid.webp'; // Shopify Liquid
import github from '../assets/github.webp'; // GitHub
import api from '../assets/api.png'; // REST APIs
import chat from '../assets/chatGPT.png'; // ChatGPT API
import tailwind from '../assets/tailwind.png'; // Tailwind CSS

const techs = [
  { id: 1, src: visual, title: "Visual Studio Code", style: "shadow-purple-500" },
  { id: 2, src: html, title: "HTML5", style: "shadow-orange-600" },
  { id: 3, src: css, title: "CSS3", style: "shadow-blue-600" },
  { id: 4, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
  { id: 5, src: reactImage, title: "React JS", style: "shadow-sky-400" },
  { id: 6, src: typescript, title: "TypeScript", style: "shadow-gray-100" },
  { id: 7, src: vue, title: "Vue.js", style: "shadow-green-600" },
  { id: 8, src: redux, title: "Redux", style: "shadow-purple-400" },
  { id: 9, src: next, title: "Next.js", style: "shadow-gray-100" },
  { id: 10, src: reactNative, title: "React Native", style: "shadow-teal-400" },
  { id: 11, src: vite, title: "Vite", style: "shadow-purple-600" },
  { id: 12, src: nodeJS, title: "Node.js", style: "shadow-green-800" },
  { id: 13, src: express, title: "Express.js", style: "shadow-yellow-700" },
  { id: 14, src: nest, title: "NestJS", style: "shadow-red-600" },
  { id: 15, src: mongo, title: "MongoDB", style: "shadow-green-600" },
  { id: 16, src: aws, title: "AWS", style: "shadow-orange-500" },
  { id: 17, src: php, title: "PHP", style: "shadow-purple-500" },
  { id: 18, src: laravel, title: "Laravel", style: "shadow-blue-500" },
  { id: 19, src: python, title: "Python", style: "shadow-yellow-500" },
  { id: 20, src: liquid, title: "Shopify Liquid", style: "shadow-sky-300" },
  { id: 21, src: github, title: "GitHub", style: "shadow-blue-400" },
  { id: 22, src: api, title: "REST APIs", style: "shadow-red-600" },
  { id: 23, src: chat, title: "ChatGPT API", style: "shadow-blue-800" },
  { id: 24, src: tailwind, title: "Tailwind CSS", style: "shadow-cyan-400" },
];

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black py-20 w-full">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">Experience</p>
          <p className="py-6 text-gray-300">
            Technologies I’ve worked with to build high-performance applications:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`relative flex flex-col items-center justify-center shadow-lg ${style} rounded-lg p-4 h-36 transition-transform transform hover:scale-105 hover:shadow-xl duration-300`}>
              <img src={src} alt={title} className="w-20 h-20 object-contain mx-auto" />
              <p className="mt-3 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
