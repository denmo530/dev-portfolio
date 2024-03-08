import React from "react";
import projects, { Project } from "@/assets/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className=" rounded-3xl transition duration-300 p-6 isolate bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl hover:scale-105 hover:shadow-md hover:shadow-trinidad-500">
      <div className=" w-full flex flex-col ">
        <div className="mb-4">
          <a href={project.githubSrc} target="_blank">
            <Image
              className="h-[250px] cursor-pointer w-full rounded-xl shadow-md shadow-gray-500 transition-transform duration-500 hover:scale-105 object-contain"
              src={project.img}
              alt={project.title}
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="text-sm bg-spring-green-200 rounded-xl px-2 m-1 py-1 text-spring-green-800 font-medium uppercase"
            >
              {item}
            </span>
          ))}
        </div>
        <h2 className="mt-2 text-trinidad-500 text-2xl font-semibold leading-8 tracking-tight">
          {project.title}
        </h2>
        <div className="prose mt-4 max-w-none  text-gray-500 ">
          {`${project.description}`}
        </div>

        {/* 
        Add read-more when project modal is implemented, substring of 150chars is good on the text
        <div className="text-trinidad-500 cursor-pointer mt-4 text-base font-medium leading-6 hover:text-trinidad-600 hover:underline">
          Read more →
        </div> */}
      </div>
    </li>
  );
};

export default ProjectCard;
