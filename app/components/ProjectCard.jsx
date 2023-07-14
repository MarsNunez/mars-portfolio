import Link from "next/link";
import TechBadge from "./TechBadge";

const ProjectCard = ({ projectData }) => {
  return (
    <Link
      href={projectData.link}
      target="_blank"
      className="w-fit mx-auto md:mx-0"
    >
      <div className="max-w-[25rem] md:max-w-[35rem] group cursor-pointer text-center md:text-left">
        <figure className="md:h-72 rounded-2xl overflow-hidden relative">
          <img
            src={projectData.image.url}
            alt="project thumbnail"
            className="h-full w-full object-cover object-center group-hover:grayscale duration-300"
          />
          <div className="hidden top-0 group-hover:-top-12 relative duration-200 ease-in-out left-5 md:flex gap-3">
            {projectData.technologies.map((tech) => (
              <TechBadge name={tech.name} key={tech.name} />
            ))}
          </div>
        </figure>
        <h3 className="mt-4 group-hover:text-[#2cec8c] group-hover:underline underline-offset-4 duration-200">
          {projectData.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
