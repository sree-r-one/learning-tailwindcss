import React from "react";
import { heroBanner } from "../assets";

const Home = () => {
  return (
    <div className="pt-12">
      {/* Parallax Image Section with Overlay */}
      <div className="relative h-96 overflow-hidden rounded-md">
        <div
          className="parallax absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="mb-4 flex flex-col items-center text-center text-4xl font-extrabold text-white dark:text-white md:flex-row md:items-start md:text-left md:text-6xl lg:text-7xl">
            <span className="to-brightRed bg-gradient-to-r from-red-700 bg-clip-text text-transparent">
              Better Data
            </span>
            Scalable <span className="text-brightRed">AI</span>
          </h1>
          <p className="p-8 text-center text-xl font-light leading-relaxed tracking-wide text-white dark:text-gray-400 md:text-left lg:text-3xl">
            Here at lutap.ai, we focus on markets where technology, innovation,
            and capital can
            <mark className="bg-brightRed mx-2 rounded px-2 font-bold text-white dark:bg-blue-500">
              unlock
            </mark>
            long-term value and drive economic growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
