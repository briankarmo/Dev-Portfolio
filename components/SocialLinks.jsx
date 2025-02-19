import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si"; // Upwork Logo
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"; // Toggle Icons

const SocialLinks = () => {
  const [open, setOpen] = useState(false); // Controls the slide-out effect

  const links = [
    {
      id: 1,
      text: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/briankarmo/",
      external: true,
    },
    {
      id: 2,
      text: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/briankarmo",
      external: true,
    },
    {
      id: 3,
      text: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:BrianKarmo@hotmail.com",
      external: true,
    },
    {
      id: 4,
      text: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/Brian-Karmo.pdf",
      download: true,
      external: false,
    },
    {
      id: 5,
      text: "Upwork",
      icon: <SiUpwork size={30} className="text-[#14A800]" />,
      href: "https://www.upwork.com/freelancers/briankarmo",
      external: true,
    },
  ];

  return (
    <>
      {/* 📌 Social Links - Minimal on All Screens, Expands on Click */}
      <div className="fixed bottom-10 left-4 z-50 flex flex-col items-start">
        {/* Social Links List */}
        <div className="flex flex-col space-y-2">
          {links.map(({ id, text, icon, href, download, external }) => (
            <a
              key={id}
              href={href}
              className={`flex items-center bg-gray-700 text-white h-12 w-12 px-4 rounded-md shadow-md transition-all duration-300 ${
                open ? "w-40 justify-start pl-4" : "justify-center"
              }`}
              {...(download
                ? { download: "Brian-Karmo.pdf" }
                : external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {icon}
              {open && <span className="whitespace-nowrap ml-3">{text}</span>}
            </a>
          ))}
        </div>

        {/* Toggle Button to Slide Out/In */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-700 text-white w-12 h-12 mt-2 flex items-center justify-center rounded-md shadow-md hover:scale-110 transition-all duration-300"
        >
          {open ? <FiArrowLeft size={24} /> : <FiArrowRight size={24} />}
        </button>
      </div>
    </>
  );
};

export default SocialLinks;
