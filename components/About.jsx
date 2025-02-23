import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white py-16 scroll-mt-20 animate-fadeInUp"
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col justify-center text-center md:text-left">
        
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-blue-500 inline-block">
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="space-y-10 text-lg leading-relaxed md:leading-loose text-gray-300">
          <p>
            My journey as a developer began with a deep passion for{" "}
            <span className="text-cyan-400">web design</span>, which evolved into a love for{" "}
            <span className="text-blue-400">coding</span> and{" "}
            <span className="text-blue-400">problem-solving</span>. Over time, I have gained expertise in{" "}
            <span className="text-cyan-400">React.js, Next.js, Redux, and Node.js</span>, building both{" "}
            <span className="text-cyan-400">front-end</span> and{" "}
            <span className="text-cyan-400">full-stack applications</span>.
          </p>

          <p>
            I specialize in crafting{" "}
            <span className="text-blue-400">dynamic, interactive, and responsive applications</span> using{" "}
            <span className="text-cyan-400">Tailwind CSS, Axios, and API integrations</span>. Additionally, I have honed my{" "}
            <span className="text-blue-400">version control skills</span> with GitHub, ensuring{" "}
            <span className="text-cyan-400">efficient project management</span> and{" "}
            <span className="text-cyan-400">seamless collaboration</span>.
          </p>

          {/* 🔥 Optimized Quote Box */}
          <blockquote className="mt-14 p-6 italic border-l-4 border-cyan-500 bg-gray-900 rounded-lg shadow-md text-gray-200 leading-relaxed">
            "As a dedicated and proactive learner, I continuously expand my{" "}
            <span className="text-cyan-400">JavaScript expertise</span>, focusing on modern frameworks, UI/UX development,{" "}
            and innovative problem-solving. My{" "}
            <span className="text-blue-400">resilience, adaptability, and commitment</span> 
            to staying at the forefront of technology make me an{" "}
            <span className="text-cyan-400">exceptional problem solver and developer</span>."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
