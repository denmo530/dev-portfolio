import React from "react";
import Timeline from "./Timeline";

const ExperienceSection = () => {
  return (
    <section
      className="divide-y divide-trinidad-400 scroll-smooth"
      id="experience"
    >
      <div className="spaxe-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
        <p className="text-lg leading-7 text-gray-600 max-w-xl">
          I&apos;m an open-minded person, always seeking new knowlegde. Here are
          some of my current skills and work experiences. 🧠
        </p>
      </div>
      <div className="px-4 pt-6 rounded-3xl text-base flex flex-col justify-center items-start sm:text-lg ">
        <Timeline />
      </div>
    </section>
  );
};

export default ExperienceSection;
