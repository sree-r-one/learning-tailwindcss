import React from "react";
import { heroBanner } from "../assets";

const Hero = () => {
  return (
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
  );
};

const Timeline = () => {
  return (
    <ol class="relative border-s border-gray-200 bg-white dark:border-gray-700">
      <li class="mb-10 ms-4">
        <div class="bg-brightRed absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          February 2022
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Application UI code in Tailwind CSS
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
        <a
          href="#"
          class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Learn more{" "}
          <svg
            class="ms-2 h-3 w-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </li>
      <li class="mb-10 ms-4">
        <div class="bg-brightRed absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          March 2022
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Marketing UI design in Figma
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li class="ms-4">
        <div class="bg-brightRed absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          April 2022
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
    </ol>
  );
};

const Jumbotron = () => {
  return (
    <section class="rounded-lg bg-white drop-shadow-md dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
          Here at lutap.ai, we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            class="bg-brightRed hover:bg-brightRedLight inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="dark:hover:bg-gray-70 hover:text-redbg-brightRed rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 sm:ms-4"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};
const Home = () => {
  return (
    <div className="space-y-12 pt-12">
      {/* Parallax Image Section with Overlay */}

      <Hero />
      <Jumbotron />
      <Timeline />
    </div>
  );
};

export default Home;
