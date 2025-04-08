import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white py-16 scroll-mt-20 animate-fadeInUp"
      aria-label="About Me Section"
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col justify-center">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-blue-500 inline-block">
            About Me
          </h2>
        </div>

       {/* About Content */}
    <div className="space-y-8 text-lg leading-relaxed md:leading-loose text-gray-300">
      <p>
        My journey as a developer began with a profound passion for <span className="text-cyan-400">web design</span>, quickly evolving into a deep love for <span className="text-blue-400">coding</span> and <span className="text-blue-400">creative problem-solving</span>. I build dynamic, interactive, and responsive applications using powerful <span className="text-cyan-400">front-end frameworks</span> such as <span className="text-cyan-400">React.js, Next.js</span>, and <span className="text-cyan-400">Vue.js</span>, elegantly paired with <span className="text-cyan-400">Tailwind CSS</span> to create clean, efficient, and visually appealing designs.
      </p>
      <p>
        On the backend, I utilize robust languages like <span className="text-cyan-400">Python, PHP</span>, and <span className="text-cyan-400">Node.js</span>, along with frameworks such as <span className="text-cyan-400">Laravel</span>, to craft reliable and scalable solutions. <span className="text-cyan-400">APIs</span> form the backbone of my applications, enabling seamless integration of external services to significantly enhance functionality and elevate user experiences.
      </p>
      <p>
        Meticulous <span className="text-blue-400">version control</span> practices through <span className="text-cyan-400">GitHub</span> ensure efficient project management, collaborative workflows, and maintainable codebases. My dedication to refining <span className="text-blue-400">UI/UX development</span> is evident in my consistent focus on creating intuitive, user-friendly interfaces that engage and retain users.
      </p>
      <p>
        With specialized expertise in custom <span className="text-cyan-400">Shopify Liquid coding</span>, I enhance eCommerce platforms, showcasing an innovative approach and delivering impactful results within the digital marketplace.
      </p>
      <p>
        My proficiency with <span className="text-cyan-400">Stripe</span> ensures secure payment processing, while <span className="text-cyan-400">Firebase</span> provides robust backend infrastructure for seamless user authentication and data management. Additionally, I leverage <span className="text-cyan-400">AWS</span> for scalable cloud solutions.
      </p>
    </div>

    {/* Quote Box */}
    <blockquote className="mt-12 p-6 italic border-l-4 border-cyan-500 bg-gray-900 rounded-lg shadow-md text-gray-200">
      "As a dedicated and proactive learner, I continuously expand my expertise across diverse <span className="text-cyan-400">technologies and frameworks</span>, focusing on <span className="text-cyan-400">cutting-edge tools</span> and <span className="text-blue-400">UI/UX development</span>. My resilience and commitment to technological advancement highlight me as an <span className="text-cyan-400">exceptional developer</span> and <span className="text-blue-400">problem solver</span>."
    </blockquote>
  </div>
</section>
  );
};

export default About;
