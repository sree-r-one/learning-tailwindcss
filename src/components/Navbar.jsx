import React from "react";
import { logo,logoLutapi } from "../assets";

const Navbar = () => {
  return (
    <nav className="relative mx-auto rounded-b-lg bg-white px-6 py-4 drop-shadow-lg">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logoLutapi} className="h-8" alt="" />
        </div>

        {/* Menu items  */}
        <div className="md:flex hidden items-center justify-center space-x-6">
          <a href="# " className="hover:text-lutapiBlueDark">
            Pricing
          </a>
          <a href="#" className="hover:text-lutapiBlueDark">
            Product
          </a>
          <a href="#" className="hover:text-lutapiBlueDark">
            About Us
          </a>
          <a href="#" className="hover:text-lutapiBlueDark">
            Careers
          </a>
          <a href="#" className="hover:text-lutapiBlueDark">
            Community
          </a>
          <a href="#" className="hover:text-lutapiBlueDark">
            Pricing
          </a>
          {/* Button */}
          <a
            href="#"
            className="bg-lutapiBlue hover:bg-lutapiBlueLight rounded-full px-6 py-2 text-white"
          >
            Chat
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className="hamburger md:hidden block focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
    </nav>
  );
};

export default Navbar;
