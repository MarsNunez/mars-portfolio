import { HiCog } from "react-icons/hi2";
import Badge from "./Badge";
import { TbWorld } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";

const MainServices = () => {
  return (
    <section className="pb-8">
      <Badge name={"services"} icon={<HiCog />} />
      <h2 className="mt-12 mb-8 text-4xl">
        My <span className="text-[#2cec8c]">Specializations</span>
      </h2>
      <div className="max-w-[35rem] flex flex-col gap-3">
        <div className="border rounded-xl py-7 px-7 hover:border-[#2cec8c] duration-150 ease-in-out group">
          <div className="text-xl flex justify-between items-center">
            <h3 className="mb-1  group-hover:text-[#2cec8c] duration-150 ease-in-out">
              Website Building
            </h3>
            <TbWorld className="text-[#2cec8c] text-2xl" />
          </div>
          <p className="text-sm text-[#8e8e8e] mb-6">
            I created digital products with unique ideas using Figma & Framer
          </p>
          <p>
            <span className="text-[#2cec8c]">Total: </span> 12 projects
          </p>
        </div>
        <div className="border rounded-xl py-7 px-7 hover:border-[#2cec8c] duration-150 ease-in-out group">
          <div className="text-xl flex justify-between items-center">
            <h3 className="mb-1  group-hover:text-[#2cec8c] duration-150 ease-in-out">
              Development
            </h3>
            <FaCode className="text-[#2cec8c]" />
          </div>
          <p className="text-sm text-[#8e8e8e] mb-6">
            I created digital products with unique ideas using Figma & Framer
          </p>
          <p>
            <span className="text-[#2cec8c]">Total: </span> 84 projects
          </p>
        </div>
        <div className="border rounded-xl py-7 px-7 hover:border-[#2cec8c] duration-150 ease-in-out group">
          <div className="text-xl flex justify-between items-center">
            <h3 className="mb-1  group-hover:text-[#2cec8c] duration-150 ease-in-out">
              SEO/Marketing
            </h3>
            <ImStatsDots className="text-[#2cec8c]" />
          </div>
          <p className="text-sm text-[#8e8e8e] mb-6">
            I created digital products with unique ideas using Figma & Framer
          </p>
          <p>
            <span className="text-[#2cec8c]">Total: </span> 9 projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
