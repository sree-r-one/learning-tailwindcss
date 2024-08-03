import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="relative mx-auto rounded-b-lg bg-white px-6 py-4 drop-shadow-lg">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>

        {/* Menu items  */}
        <div className="hidden items-center justify-center space-x-6 md:flex">
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
          {/* Button */}
          <a
            href="#"
            className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight"
          >
            Chat
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
