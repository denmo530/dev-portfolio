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

export default function Home() {
  return (
    <main className="bg-white px-10 text-gray-800 md:px-20 lg:px-40">
      <nav
        id="navbar"
        className="py-10 mb-12 flex justify-center md:justify-end sticky top-0 z-50 bg-inherit opacity-90"
      >
        <ul className="flex items-center justify-center gap-5 md:gap-10 lg:gap-20 font-medium">
          <li className="cursor-pointer text-xl hover:text-orange-500 transition duration-150">
            <ScrollLink href="#aboutSection">About Me</ScrollLink>
          </li>
          <li className="cursor-pointer text-xl hover:text-orange-500 transition duration-150">
            <ScrollLink href="#skillsSection">My Skills</ScrollLink>
          </li>
          <li className="cursor-pointer text-xl hover:text-orange-500 transition duration-150">
            <ScrollLink href="#projectsSection">My Projects</ScrollLink>
          </li>
        </ul>
      </nav>
      <section className="min-h-screen">
        <div className="text-center p-10">
          <h2 className="text-3xl py-2 text-orange-500 font-semibold md:text-5xl">
            Dennis Moradkhani
          </h2>
          <div className="relative bg-gradient-to-b from-orange-500 rounded-full w-80 h-80 overflow-hidden mt-10 mx-auto md:h-96 md:w-96">
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
      <section id="aboutSection" className="min-h-screen">
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
      <section id="skillsSection" className="min-h-screen">
        <div>
          <h3 className="text-3xl py-1 font-semibold">My Skills</h3>
          <p className="text-md  py-2 leading-8 max-w-2xl md:text-xl mb-10">
            Passionate about{" "}
            <span className="text-orange-500">continuous learning</span> and
            embracing <span className="text-orange-500">new technologies</span>{" "}
            to creatively solve challenges. These are my skills for now, but I
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
      <section id="projectsSection" className="min-h-screen">
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
    </main>
  );
}
