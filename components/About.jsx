import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white py-16 scroll-mt-20 animate-fadeInUp"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-fit">
        
        {/* Centered Title Section */}
        <div className="pb-6 flex items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 text-center">
            About Me
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-300">
          My journey as a developer began with a passion for web design, which evolved into a love for coding and problem-solving. Over time, I have gained expertise in **React.js, Next.js, Redux, and Node.js**, building both front-end and full-stack applications.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          I work extensively with **TailwindCSS, Axios, and API integrations** to create **dynamic, interactive, and responsive applications**. I have also honed my **version control skills** using GitHub, ensuring efficient project management.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mt-6 italic border-l-4 border-cyan-500 pl-4">
          "As a dedicated and enthusiastic learner, I constantly seek to **expand my JavaScript expertise**, focusing on frameworks, UI/UX development, and problem-solving. My resilience and commitment to staying at the cutting edge of technology make me an exceptional developer."
        </p>
      </div>
    </div>
  );
};

export default About;
