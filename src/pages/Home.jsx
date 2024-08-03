import React from "react";

const Home = () => {
  return (
    <div className="pt-12">
      <h1 className="mb-4 flex text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
        <span className="to-brightRed bg-gradient-to-r from-red-700 bg-clip-text text-transparent">
          Better Data
        </span>{" "}
        Scalable AI.
      </h1>
      <p className="text-center text-lg font-normal text-gray-500 dark:text-gray-400 md:text-start lg:text-xl">
        Here at lutap.ai, we focus on markets where technology, innovation, and
        capital can
        <mark class="mx-2 rounded bg-blue-600 px-2 font-bold text-white dark:bg-blue-500">
          unlock
        </mark>
        long-term value and drive economic growth.
      </p>
    </div>
  );
};

export default Home;
