import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const SocialLinks = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [
    { id: 1, text: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/briankarmo/", external: true },
    { id: 2, text: "Email", icon: <HiOutlineMail />, href: "mailto:BrianKarmo@hotmail.com", external: true },
    { id: 3, text: "Resume", icon: <BsFillPersonLinesFill />, href: "/Brian-Karmo.pdf", download: true },
    { id: 4, text: "Upwork", icon: <SiUpwork className="text-[#14A800]" />, href: "https://www.upwork.com/freelancers/briankarmo?mp_source=share", external: true },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center bg-gradient-to-r from-black to-gray-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {open ? <FiArrowLeft size={20} /> : <FiArrowRight size={20} />}
      </button>

      <div className={`flex flex-col items-start space-y-2 bg-gray-900 p-2 rounded-md shadow-lg absolute bottom-16 left-4 transition-all duration-300 ${isMobile ? (open ? "block" : "hidden") : "block"}`}>
        {links.map(({ id, icon, text, href, external, download }) => (
          <a
            key={id}
            href={href}
            className={`flex items-center text-white text-sm bg-gray-800 p-3 rounded-md w-full hover:bg-gray-700 transition-all duration-300 ${!isMobile ? 'p-4 scale-125' : ''}`}
            {...(download ? { download: "Brian-Karmo.pdf" } : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className={`text-xl ${!isMobile ? 'text-2xl' : ''}`}>{icon}</span>
            {!isMobile && <span className={`ml-2 transition-width duration-500 ease-in-out ${open ? "inline" : "hidden"}`}>{text}</span>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
