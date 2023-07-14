import { PiHouseLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { HiCog } from "react-icons/hi2";
import { TbPacman } from "react-icons/tb";
import { IoIosApps } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="md:ml-auto text-[#2cec8c] border w-fit text-xl rounded-full py-4 px-2 flex justify-center items-center mx-auto md:mx-0 md:flex-col gap-4 border-[#454545] h-fit">
      {/* Home */}
      <a href={"#home"}>
        <PiHouseLight />
      </a>
      {/* About */}
      <a href="#about">
        <AiOutlineUser />
      </a>
      {/* Services */}
      <a href="#services">
        <HiCog />
      </a>
      {/* Skills */}
      <a href="#skills">
        <TbPacman />
      </a>
      {/* Projects */}
      <a href="#projects">
        <IoIosApps />
      </a>
      {/* Contact */}
      <a href="#contact">
        <BsChatDotsFill className="text-base" />
      </a>
    </div>
  );
};

export default Navbar;
