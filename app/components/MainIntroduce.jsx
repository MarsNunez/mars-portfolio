import Badge from "./Badge";
import { PiHouseLight } from "react-icons/pi";

const MainIntroduce = () => {
  return (
    <section className="pt-10 mt:pt-4 md:pt-10 pb-6 md:pb-10" id="home">
      <Badge name="introduce" icon={<PiHouseLight />} />
      <h2 className="text-3xl md:text-6xl my-12 text-center md:text-left">
        Say Hi from <span className="text-[#2cec8c]">Mars</span>, <br />
        Software Developer & <br />
        Entrepreneur
      </h2>
      <div className="text-sm text-[#8e8e8e] mb-5 md:mb-12 text-center md:text-left">
        <p>I design and code beautifully simple things and I love what I do.</p>
        <p>Just simple like that!.</p>
      </div>
      <div className="flex gap-6 md:gap-14 justify-center md:justify-start">
        <div className="max-w-[100px] text-center md:text-left">
          <p className="text-3xl md:text-5xl text-[#2cec8c] mb-2">5+</p>
          <p className="uppercase text-xs md:text-sm text-[#8e8e8e]">
            years of experience
          </p>
        </div>
        <div className="max-w-[160px] text-center md:text-left">
          <p className="text-3xl md:text-5xl text-[#2cec8c] mb-2">84+</p>
          <p className="uppercase text-xs md:text-sm text-[#8e8e8e]">
            projects completed on 15 countries
          </p>
        </div>
      </div>
      <div className="w-fit md:ml-auto mx-auto mt-10 md:mt-20">
        <a className="group relative inline-block focus:outline-none" href="/">
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#2cec8c] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            Projects
          </span>
        </a>
      </div>
    </section>
  );
};

export default MainIntroduce;
