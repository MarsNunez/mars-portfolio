import { TbPacman, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaSass,
  FaGitAlt,
  FaPython,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { SiTailwindcss, SiDjango, SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import Badge from "./Badge";

const MainSkills = () => {
  return (
    <section className="pt-32">
      <Badge name={"skills"} icon={<TbPacman />} />
      <h2 className="mt-12 mb-8 text-4xl">
        Some of my <span className="text-[#2cec8c]">Advantages</span>
      </h2>
      <div className="grid grid-cols-4 grid-rows-3 gap-10 w-fit h-fit">
        <div>
          <div className="rounded-xl w-fit text-7xl p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]">
            <IoLogoJavascript />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">JavaScript</p>
        </div>
        <div>
          <div className="rounded-xl w-fit text-7xl p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]">
            <FaSass />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Sass</p>
        </div>
        <div>
          <div className="rounded-xl w-fit text-7xl p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]">
            <BiLogoReact />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">ReactJS</p>
        </div>
        <div>
          <div>
            <TbBrandNextjs className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">NextJS</p>
        </div>
        <div>
          <div>
            <SiTailwindcss className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">TailwindCSS</p>
        </div>
        <div>
          <div>
            <FaGitAlt className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Git</p>
        </div>
        <div>
          <div>
            <FaPython className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Python</p>
        </div>
        <div>
          <div>
            <SiDjango className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Django</p>
        </div>
        <div>
          <div>
            <FaJava className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Java</p>
        </div>
        <div>
          <div>
            <SiRedux className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Redux</p>
        </div>
        <div>
          <div>
            <AiFillHtml5 className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">HTML5</p>
        </div>
        <div>
          <div>
            <FaBootstrap className="rounded-xl w-fit text-[105px] p-4 border border-[#2cec8c] text-[#2cec8c] bg-[#262526]" />
          </div>
          <p className="text-center text-[#8e8e8e] text-sm mt-1">Bootstrap</p>
        </div>
      </div>
    </section>
  );
};

export default MainSkills;
