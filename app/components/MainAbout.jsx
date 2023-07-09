import Badge from "./Badge";
import { AiOutlineUser } from "react-icons/ai";

const MainAbout = () => {
  return (
    <section className="py-36">
      <Badge name={"about"} icon={<AiOutlineUser />} />
      <div className="max-w-[35rem]">
        <h2 className="mt-12 mb-8 text-4xl">
          Every great design begin with an even
          <span className="text-[#2cec8c]"> better story</span>
        </h2>
        <p className="text-base text-[#8e8e8e]">
          Since beginning my journey as a freelancer nearly 8 years ago, I've
          done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and costumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone programming problem
          at a time.
        </p>
      </div>
    </section>
  );
};

export default MainAbout;
