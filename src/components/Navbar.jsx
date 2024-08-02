import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="container relative mx-auto rounded-b-lg bg-gray-200 px-6 py-4">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>

        {/* Menu items  */}
        <div className="md:flex hidden space-x-6">
          <a href="# " className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="bg-brightRed hover:bg-brightRedLight rounded-full px-6 py-2 text-white"
        >
          Chat
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
