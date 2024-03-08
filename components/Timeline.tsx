import React from "react";
import experiences from "@/assets/experiences";
import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import Image from "next/image";

const Timeline = () => {
  return (
    <div>
      {experiences.map((element) => {
        return (
          <div key={element.id} className="flex m-4 relative scroll-smooth">
            <div className="hidden items-start w-44 pt-0.5 relative  sm:flex">
              <div className="flex items-center gap-x-1">
                <div className="w-4/5 text-trinidad-500">{element.date}</div>
                <div className="bg-trinidad-500 w-px h-[90%] translate-x-5 translate-y-10 opacity-80"></div>
                <div className={`text-trinidad-500 text-3xl p-1 z-20 `}>
                  {element.icon === "work" ? (
                    <MdOutlineWorkOutline />
                  ) : (
                    <MdOutlineSchool />
                  )}
                </div>
              </div>
              <div className="bg-trinidad-600 h-px w-8 translate-y-5 opacity-60"></div>
            </div>
            <div className="border border-gray-200 rounded-xl px-8 py-4 isolate bg-white/10 shadow-lg ring-1 ring-black/5 w-full text-center z-10 backdrop-blur-3xl sm:w-96">
              <div className="text-xl ml-2 font-semibold tracking-tight">
                {element.title}
              </div>
              <div className="text-gray-500 mb-6 sm:mb-8 tracking-tight sm:text-sm">
                {element.location}{" "}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div className="mb-4 text-left text-sm leading-6">
                {element.description}
              </div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-trinidad-300 text-trinidad-700 rounded-xl px-2 py-1 text-sm m-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className={`text-trinidad-600 text-xl p-1 z-20 absolute left-4 top-4 sm:hidden`}
              >
                {element.icon === "work" ? (
                  <MdOutlineWorkOutline />
                ) : (
                  <MdOutlineSchool />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
