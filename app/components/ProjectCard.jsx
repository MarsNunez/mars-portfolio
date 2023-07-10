import TechBadge from "./TechBadge";

const ProjectCard = () => {
  return (
    <div className="max-w-[35rem] group cursor-pointer">
      <figure className="h-72 rounded-2xl overflow-hidden relative">
        <img
          src="/img/test.jpg"
          alt="project thumbnail"
          className="h-full w-full object-cover object-center group-hover:grayscale duration-300"
        />
        <div className="top-0 group-hover:-top-12 relative duration-200 ease-in-out left-5 flex gap-3">
          <TechBadge name={"NextJS"} />
        </div>
      </figure>
      <h3 className="mt-4 group-hover:text-[#2cec8c] group-hover:underline underline-offset-4 duration-200">
        Project 01
      </h3>
    </div>
  );
};

export default ProjectCard;
