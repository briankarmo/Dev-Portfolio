import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"; // Toggle Arrows

const SocialLinks = () => {
  const [open, setOpen] = useState(false); // Toggle menu state

  const links = [
    { id: 1, text: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/briankarmo/", external: true },
    { id: 2, text: "Email", icon: <HiOutlineMail />, href: "mailto:BrianKarmo@hotmail.com", external: true },
    { id: 3, text: "Resume", icon: <BsFillPersonLinesFill />, href: "/Brian-Karmo.pdf", download: true, external: false },
    { id: 4, text: "Upwork", icon: <SiUpwork className="text-[#14A800]" />, href: "https://www.upwork.com/freelancers/briankarmo", external: true },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start">
      {/* Mobile Toggle Button to Open/Close Icons */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center justify-center bg-gradient-to-r from-black to-gray-600 text-white 
                   w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                   hover:scale-105 fixed bottom-4 left-4"
      >
        {open ? <FiArrowLeft size={20} /> : <FiArrowRight size={20} />}
      </button>

      {/* Mobile View: Left-Aligned Icons (Toggled by Button) */}
      {open && (
        <div className="md:hidden flex flex-col items-start space-y-2 bg-gray-900 p-2 rounded-md shadow-lg absolute bottom-16 left-4">
          {links.map(({ id, icon, href, external, download }) => (
            <a
              key={id}
              href={href}
              className="flex items-center space-x-3 text-white text-sm bg-gray-800 p-3 rounded-md w-full hover:bg-gray-700 transition-all duration-300"
              {...(download ? { download: "Brian-Karmo.pdf" } : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="text-xl">{icon}</span> {/* Small icon size on mobile */}
            </a>
          ))}
        </div>
      )}

      {/* Desktop & Tablet - Left-Aligned Icons Expand on Click */}
      <div
        className={`hidden md:flex flex-col bg-gray-900 p-3 rounded-lg shadow-lg transition-all duration-300 
                    ${open ? "w-64 px-4" : "w-20"} overflow-hidden fixed bottom-10 left-4`}
      >
        {links.map(({ id, text, icon, href, download, external }) => (
          <a
            key={id}
            href={href}
            className="flex items-center space-x-4 text-white py-3 px-3 bg-gray-800 rounded-md w-full hover:bg-gray-700 transition-all duration-300 text-lg"
            {...(download ? { download: "Brian-Karmo.pdf" } : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="text-4xl md:text-5xl">{icon}</span> {/* Doubled icon size on desktop */}
            <span className={`transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 hidden"}`}>{text}</span>
          </a>
        ))}

        {/* Toggle Button for Desktop */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-start w-full py-3 mt-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-all duration-300 text-lg px-3"
        >
          {open ? <FiArrowLeft size={24} /> : <FiArrowRight size={24} />}
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
