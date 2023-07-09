import { PiHouseLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { HiCog } from "react-icons/hi2";
import { TbPacman } from "react-icons/tb";
import { IoIosApps } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="ml-auto border w-fit text-xl rounded-full py-4 px-2 flex justify-center items-center flex-col gap-4 border-[#454545] text-[#8e8e8e] h-fit">
      {/* Home */}
      <PiHouseLight className="text-[#2cec8c]" />
      {/* About */}
      <AiOutlineUser />
      {/* Services */}
      <HiCog />
      {/* Skills */}
      <TbPacman />
      {/* Projects */}
      <IoIosApps />
      {/* Contact */}
      <BsChatDotsFill className="text-base" />
    </div>
  );
};

export default Navbar;
