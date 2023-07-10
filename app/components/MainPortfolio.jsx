import Badge from "./Badge";
import { IoIosApps } from "react-icons/io";
import ProjectCard from "./ProjectCard";

const MainPortfolio = () => {
  return (
    <section className="pt-24 pb-8">
      <Badge name={"portfolio"} icon={<IoIosApps />} />
      <h2 className="mt-12 mb-8 text-4xl">
        Featured <span className="text-[#2cec8c]">Projects</span>
      </h2>
      <div className="flex flex-col gap-10">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default MainPortfolio;
