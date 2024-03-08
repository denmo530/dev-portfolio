import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { ImNewTab } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";

const Footer = () => {
  return (
    <section id="contact">
      <div className="mt-16 py-3 flex flex-col items-center scroll-smooth">
        <h1 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Get In Touch
        </h1>
        <ul className="mt-6 grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 mb-3 rounded-3xl mx-auto ">
          <a
            target="_blank"
            href="https://github.com/denmo530"
            className="flex items-center justify-between rounded-md  px-5 py-3 text-lg isolate  bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition hover:text-trinidad-600 hover:scale-110 space-x-16"
          >
            <div className="flex gap-1 items-center">
              <AiFillGithub />
              Github
            </div>
            <ImNewTab />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/dennis-moradkhani-5386a8181"
            className="flex items-center justify-between rounded-md  px-5 py-3 text-lg isolate  bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition hover:text-trinidad-600 hover:scale-110 space-x-16"
          >
            <div className="flex gap-1 items-center">
              <AiFillLinkedin />
              LinkedIn
            </div>
            <ImNewTab />
          </a>
          <a
            target="_blank"
            href="mailto:dennis.moradkhani@gmail.com"
            className="flex items-center justify-between  rounded-md  px-5 py-3 text-lg isolate  bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition hover:text-trinidad-600 hover:scale-110 space-x-16"
          >
            <div className="flex gap-1 items-center">
              <AiFillMail />
              Mail
            </div>
            <ImNewTab />
          </a>
          <a
            href={"CV_DennisMoradkhani.2024.pdf"}
            className="flex items-center justify-between rounded-md  px-5 py-3 text-lg isolate  bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition hover:text-trinidad-600 hover:scale-110 space-x-16"
          >
            <div className="flex gap-1 items-center">
              <TiDocumentText />
              Resumé
            </div>
            <ImNewTab />
          </a>
        </ul>
      </div>
      <div className="mt-6 mb-4 flex justify-center space-x-2 text-md text-gray-500">
        <div>Designed and Developed By Dennis Moradkhani</div>
        <div> • </div>
        <div>© 2024</div>
      </div>
    </section>
  );
};

export default Footer;
