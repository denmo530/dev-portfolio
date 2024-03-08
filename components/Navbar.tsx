"use client";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Logo from "@/components/Logo";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarOffset = 100;
  const mobileNavbarOffset = 120;

  return (
    <header className="sticky z-40 top-0 flex items-center justify-between  bg-transparent py-5 backdrop-blur-md">
      <div>
        <ScrollLink
          offset={navbarOffset}
          href={"#home"}
          className="text-lg px-2 py-1 transition duration-150 sm:block sm:px-3 sm:py-2  text-gray-500 hover:text-trinidad-500 "
        >
          <Logo />
        </ScrollLink>
      </div>
      <div className="flex items-center spaxe-x-4 leading-5 sm:space-x-6 font-semibold">
        <ScrollLink
          href={"#about"}
          offset={navbarOffset}
          className="hidden rounded-2xl px-2 py-1 text-gray-900 transition duration-300 hover:text-trinidad-600 sm:block sm:px-3 sm:py-2 "
        >
          About
        </ScrollLink>
        <ScrollLink
          offset={navbarOffset}
          href={"#experience"}
          className="hidden rounded-2xl px-2 py-1 text-gray-900 transition duration-300 hover:text-trinidad-600 sm:block sm:px-3 sm:py-2"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          offset={navbarOffset}
          href={"#projects"}
          className="hidden rounded-2xl px-2 py-1 text-gray-900 transition duration-300 hover:text-trinidad-600 sm:block sm:px-3 sm:py-2"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          offset={navbarOffset}
          href={"#contact"}
          className="hidden rounded-2xl px-2 py-1 text-gray-900 transition duration-300 hover:text-trinidad-600 sm:block sm:px-3 sm:py-2"
        >
          Contact
        </ScrollLink>
      </div>

      {/* Hamburger menu */}
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu className="text-3xl" />
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed sm:hidden left-0 top-0 z-10 h-screen w-full transform bg-white opacity-95 duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            className="mr-8 mt-11 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <RxCross1 />
          </button>
        </div>
        <div className="fixed mt-8 h-full">
          <div className="px-12 py-4">
            <ScrollLink
              offset={mobileNavbarOffset}
              href="#about"
              onClick={() => setIsOpen(false)}
              className="transition-hover text-2xl font-semibold tracking-widest text-gray-700 duration-300 hover:border-b-2  hover:border-b-trinidad-500 "
            >
              About
            </ScrollLink>
          </div>
          <div className="px-12 py-4">
            <ScrollLink
              offset={mobileNavbarOffset}
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="transition-hover text-2xl font-semibold tracking-widest text-gray-700 duration-300 hover:border-b-2  hover:border-b-trinidad-500 "
            >
              Experience
            </ScrollLink>
          </div>
          <div className="px-12 py-4">
            <ScrollLink
              offset={mobileNavbarOffset}
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="transition-hover text-2xl font-semibold tracking-widest text-gray-700 duration-300 hover:border-b-2  hover:border-b-trinidad-500 "
            >
              Projects
            </ScrollLink>
          </div>
          <div className="px-12 py-4">
            <ScrollLink
              offset={mobileNavbarOffset}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="transition-hover text-2xl font-semibold tracking-widest text-gray-700 duration-300 hover:border-b-2  hover:border-b-trinidad-500 "
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
