import React, { useState, useEffect, useRef } from "react";
import { logoLutapiV2 } from "../assets";

const links = [
  { name: "Home", path: "#" },
  { name: "About", path: "#" },
  { name: "Contact", path: "#" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const buttonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleButton = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`fixed start-0 top-0 z-20 w-full rounded-b-lg border-b border-gray-100 bg-white drop-shadow-md transition-all duration-300 dark:border-gray-600 dark:bg-gray-900 ${isScrolled ? "p-2" : "p-4"}`}
    >
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-between space-x-4">
          <img
            src={logoLutapiV2}
            className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-12"} rounded-md`}
            alt="Logo"
          />
          <button
            ref={buttonRef}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={!isHidden}
            onClick={handleToggleButton}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          ref={drawerRef}
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${isHidden ? "hidden" : ""}`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            {links.map((link, index) => (
              <li key={index} className="font-medium hover:text-orange-500">
                <a
                  href={link.path}
                  className="hover:bg-brightRedLight md:hover:text-brightRed block rounded px-3 py-2 text-gray-900 hover:text-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
