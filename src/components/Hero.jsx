import React from "react";
import { illustrationIntro } from "../assets";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto mt-10 flex flex-col-reverse space-y-0 px-1 md:flex-row">
        {/* left item */}
        <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
          <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
            Bring Everyone Together to Build Better Products
          </h1>
          <p className="max-w-md text-center md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="rounded-full bg-brightRed px-6 py-4 text-white hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mx-auto mb-10 flex w-1/2 items-center justify-center pb-10">
          <img src={illustrationIntro} alt="" />
        </div>

        {/* Right Item */}
      </div>
    </section>
  );
};

export default Hero;
