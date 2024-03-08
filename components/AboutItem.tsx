import React from "react";

interface AboutItemProps {
  title: string;
  desc: string;
}

const AboutItem = ({ title, desc }: AboutItemProps) => {
  return (
    <li className="rounded-3xl ">
      <div className="flex flex-col rounded-md p-6 isolate aspect-video bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl">
        <h2 className="mt-2 text-justify text-2xl font-semibold leading-8 tracking-tight">
          {title}
        </h2>
        <p className="prose mt-4 max-w-none text-justify text-gray-500 ">
          {desc}
        </p>
      </div>
    </li>
  );
};

export default AboutItem;
