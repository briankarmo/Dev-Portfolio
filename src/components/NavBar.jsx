import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-black bg-opacity-90 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 text-white z-50">
      {/* Logo */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-signature font-bold flex-shrink-0">
        Brian Karmo
      </h1>

      {/* Desktop Navigation aligned to the right side of the navbar */}
      <ul className="hidden md:flex flex-grow justify-end items-center space-x-2 md:space-x-3 lg:space-x-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-xs md:text-sm lg:text-lg font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <Link to={link} smooth duration={500} spy={true} offset={-80}>
              {link.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button always to the right */}
      <div className="md:hidden z-50">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-gray-300"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-gray-300 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ cursor: 'pointer' }}
      >
        {links.map(({ id, link }) => (
          <li key={id} className="text-3xl font-semibold capitalize">
            <Link
              onClick={() => setNav(false)}
              to={link}
              smooth
              duration={500}
              spy={true}
              offset={-80}
              className="hover:text-white transition-colors duration-200"
            >
              {link}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
