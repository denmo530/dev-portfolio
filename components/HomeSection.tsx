import React from "react";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Avatar from "@/public/images/profile.png";

const HomeSection = () => {
  return (
    <section className=" text-center mx-auto max-w-2xl scroll-smooth" id="home">
      <div className="isolate aspect-video rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl px-3 py-3">
        <div className="relative bg-gradient-to-b from-trinidad-500 rounded-full w-60 h-60 overflow-hidden mx-auto md:h-96 md:w-96">
          <Image
            src={Avatar}
            fill
            alt="Avatar image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-center">
          <h1
            className="mt-4 uppercase text-4xl font-medium tracking-tight"
            id="test"
          >
            Dennis Moradkhani
          </h1>
          <h3 className="text-lg text-gray-500 opacity-90 md:text-lg">
            Student & Developer
          </h3>
        </div>
        <p className="mt-6 text-lg px-6 leading-8 md:text-lg max-w-xl mx-auto text-gray-600">
          Passionate engineering student with an interest in{" "}
          <span className="font-semibold text-trinidad-600">
            Fullstack Development
          </span>
          ,{" "}
          <span className="font-semibold text-trinidad-600">
            Data Visualization
          </span>{" "}
          and{" "}
          <span className="font-semibold text-trinidad-600">
            Computer Vision
          </span>
          . Let&apos;s innovate and shape the future!
        </p>
        <div className="mt-6 flex gap-x-4 text-5xl justify-center text-gray-700">
          <a target="_blank" href="https://github.com/denmo530">
            <AiFillGithub className="cursor-pointer hover:opacity-70 transition ease-in duration-150 text-trinidad-600" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dennis-moradkhani-5386a8181/"
          >
            <AiFillLinkedin className="cursor-pointer hover:opacity-70 transition ease-in duration-150 text-trinidad-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
