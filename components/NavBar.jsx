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
    <div className="fixed top-0 left-0 w-full h-20 bg-black bg-opacity-90 backdrop-blur-md flex justify-between items-center px-6 md:px-12 text-white z-50">
      {/* Logo */}
      <div>
        <h1 className="text-4xl md:text-5xl font-signature font-bold">
          Brian Karmo
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-lg font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <Link to={link} smooth duration={500} spy={true} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer text-gray-300 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-gray-300 transition-all duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
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
