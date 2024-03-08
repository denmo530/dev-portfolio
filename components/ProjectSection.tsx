import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/assets/projects";
import { AiOutlineReload } from "react-icons/ai";
const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section
      id="projects"
      className="divide-y divide-trinidad-400 scroll-smooth"
    >
      <div className="spaxe-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-600 ">
          Heres a few of my selected side projects. 👨🏻‍💻
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6  gap-y-6 sm:gap-y-10 rounded-3xl px-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
      {visibleProjects < projects.length && (
        <div className="mt-6 py-4 flex justify-center text-center">
          <button
            className="text-trinidad-500 flex items-center gap-1 rounded-lg border-gray-200 hover:text-trinidad-600  px-5 py-3 text-lg isolate  bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition hover:scale-105"
            onClick={showMoreProjects}
          >
            <AiOutlineReload />
            Show More Projects ({projects.length - visibleProjects})
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
