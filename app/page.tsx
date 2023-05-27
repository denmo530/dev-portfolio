"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiKotlin,
  SiPython,
  SiGit,
} from "react-icons/si";
import Avatar from "../public/images/avatar.png";
import Project from "../public/images/project.jpg";
import ScrollLink from "@/components/ScrollLink";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: NodeJS.Timeout;

    return function (this: any, ...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

  const handleScroll = debounce(() => {
    const sections = document.querySelectorAll<HTMLDivElement>("section");
    const threshold = 200; // Adjust this value to control the proximity to the section for snapping
    const navBarHeight = document.getElementById("navbar")?.offsetHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const topOffset = rect.top - (navBarHeight ? navBarHeight : 0);
      const bottomOffset = rect.bottom;

      if (topOffset <= threshold && bottomOffset >= -threshold) {
        const sectionId = section.getAttribute("id");
        if (sectionId) {
          const targetElement = document.getElementById(sectionId);
          if (targetElement) {
            const scrollToPosition =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset -
              (navBarHeight || 0); // Adjust the value (-10) to fine-tune the scroll position

            window.scrollTo({
              top: scrollToPosition,
              behavior: "smooth",
            });
          }
        }
      }
    });
  }, 100); // Adjust the debounce wait time as needed

  // Attach the debounced scroll event listener to the window
  window.addEventListener("scroll", handleScroll);

  return (
    <main className="bg-white text-gray-800">
      <nav
        id="navbar"
        className="py-6 mb-12 flex justify-center md:justify-end sticky top-0 z-50 bg-inherit opacity-90  px-10 md:px-20 lg:px-40"
      >
        <ul className="flex items-center justify-center gap-5 md:gap-10 lg:gap-20 font-medium">
          <li className="cursor-pointer text-md hover:text-orange-500 transition duration-150 md:text-xl">
            <ScrollLink href="#aboutSection">About Me</ScrollLink>
          </li>
          <li className="cursor-pointer text-md hover:text-orange-500 transition duration-150 md:text-xl">
            <ScrollLink href="#skillsSection">My Skills</ScrollLink>
          </li>
          <li className="cursor-pointer text-md hover:text-orange-500 transition duration-150 md:text-xl">
            <ScrollLink href="#projectsSection">My Projects</ScrollLink>
          </li>
        </ul>
      </nav>
      <section
        id="homeSection"
        className="min-h-screen  px-10 md:px-20 lg:px-40"
      >
        <div className="text-center py-10 ">
          <h2 className="text-2xl py-2 text-orange-500 font-semibold md:text-5xl">
            Dennis Moradkhani
          </h2>
          <div className="relative bg-gradient-to-b from-orange-500 rounded-full w-60 h-60 overflow-hidden mt-10 mx-auto md:h-96 md:w-96 ">
            <Image
              src={Avatar}
              fill
              alt="Avatar image"
              style={{ objectFit: "cover" }}
            />
          </div>

          <h3 className="text-xl py-2 md:text-2xl">Student & Developer</h3>
          <p className="text-md py-5 leading-8 md:text-xl max-w-2xl mx-auto">
            Passionate engineering student with an interest in{" "}
            <span className="font-semibold">full-stack development</span>,{" "}
            <span className="font-semibold">machine learning</span> and{" "}
            <span className="font-semibold">computer vision</span>. Let's
            innovate and shape the future!
          </p>
          <div className="flex flex-row gap-16 text-5xl justify-center py-3 text-gray-700">
            <Link href="https://github.com/denmo530">
              <AiFillGithub className="cursor-pointer hover:opacity-70 transition duration-150" />
            </Link>
            <Link href="https://www.linkedin.com/in/dennis-moradkhani-5386a8181/">
              <AiFillLinkedin className="cursor-pointer hover:opacity-70 transition duration-150" />
            </Link>
            <Link href="#">
              <AiFillInstagram className="cursor-pointer hover:opacity-70 transition duration-150" />
            </Link>
          </div>
        </div>
      </section>
      <ScrollAnimation reappear={false}>
        <section
          id="aboutSection"
          className="min-h-screen  px-10 md:px-20 lg:px-40"
        >
          <div>
            <h3 className="text-3xl py-1 font-semibold">About Me</h3>
            <p className="text-md  py-2 leading-8 max-w-2xl md:text-xl mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              adipisci vel aspernatur aperiam? Consequuntur nisi ipsum cum
              mollitia ducimus vero quia aliquam quod! Eos, repellendus?
              Cupiditate ipsa at quos obcaecati.
            </p>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation reappear={false}>
        <section
          id="skillsSection"
          className="min-h-screen bg-gradient-to-br from-slate-200 via-orange-200 to-orange-600 py-10 px-10 md:px-20 lg:px-40 "
        >
          <div>
            <h3 className="text-3xl py-1 font-semibold">My Skills</h3>
            <p className="text-md  py-2 leading-8 max-w-2xl md:text-xl mb-10">
              Passionate about{" "}
              <span className="text-orange-500">continuous learning</span> and
              embracing{" "}
              <span className="text-orange-500">new technologies</span> to
              creatively solve challenges. These are my skills for now, but I
              hope to add to these continuously!
            </p>
            <div className="flex flex-row py-5 justify-center text-5xl text-gray-700 gap-5 flex-wrap mb-10 md:text-10xl basis-1/3">
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiTypescript />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiJavascript />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiHtml5 />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiTailwindcss />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiCss3 />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiReact />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiNextdotjs />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiMongodb />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiExpress />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiCplusplus />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiKotlin />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiPython />
              </div>
              <div className=" text-center shadow-md p-3 rounded-lg md:basis-1/6 flex justify-center">
                <SiGit />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation reappear={false}>
        <section
          id="projectsSection"
          className="min-h-screen  pt-10 px-10 md:px-20 lg:px-40"
        >
          <div>
            <h3 className="text-3xl py-1 font-semibold">My Projects</h3>
            <p className="text-md  py-2 leading-8 max-w-2xl md:text-xl">
              Discover my awesome projects! From{" "}
              <span className="text-orange-500">web</span> and{" "}
              <span className="text-orange-500">app</span> development to{" "}
              <span className="text-orange-500">machine learning</span> and{" "}
              <span className="text-orange-500">computer vision</span>, I've got
              the tech wizardry you're looking for.
            </p>
            <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap md:justify-center">
              <div className=" basis-1/3 p-10 shadow-lg rounded-lg">
                <Image
                  src={Project}
                  alt="Project image"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="basis-1/3 p-10 shadow-lg rounded-lg">
                <Image
                  src={Project}
                  alt="Project image"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className=" basis-1/3 p-10 shadow-lg rounded-lg">
                <Image
                  src={Project}
                  alt="Project image"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className=" basis-1/3 p-10 shadow-lg rounded-lg">
                <Image
                  src={Project}
                  alt="Project image"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className=" basis-1/3 p-10 shadow-lg rounded-lg">
                <Image
                  src={Project}
                  alt="Project image"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
