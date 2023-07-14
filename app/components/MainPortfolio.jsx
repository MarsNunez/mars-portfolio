// "use client";
import Badge from "./Badge";
import { IoIosApps } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/services";
import { use } from "react";

const MainPortfolio = () => {
  const projects = use(getProjects()) || [];
  return (
    <section className=" pt-10 md:pt-24 pb-8" id="projects">
      <Badge name={"portfolio"} icon={<IoIosApps />} />
      <h2 className="mt-12 mb-8 text-3xl md:text-4xl text-center md:text-left">
        Featured <span className="text-[#2cec8c]">Projects</span>
      </h2>
      <div className="flex flex-col gap-5 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.node.link} projectData={project.node} />
        ))}
      </div>
    </section>
  );
};

export default MainPortfolio;
