import React from "react";

const CTA = () => {
  return (
    <section className="bg-brightRed shadow-md">
      {/* Flex Container */}
      <div className="md:flex-row md:space-y-0 md:px-6 mx-auto mt-12 flex flex-col items-center justify-between space-y-12 px-10 py-12">
        <h2 className="md:text-left md:text-4xl md:max-w-xl text-center text-5xl font-bold text-white">
          Simplify how your team works today
        </h2>
        <a
          href="#"
          className="text-brightRed hover:bg-brightRedLight rounded-full bg-white px-6 py-2 shadow-2xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
