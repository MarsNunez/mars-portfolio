import MainAbout from "./MainAbout";
import MainContact from "./MainContact";
import MainIntroduce from "./MainIntroduce";
import MainPortfolio from "./MainPortfolio";
import MainServices from "./MainServices";
import MainSkills from "./MainSkills";

const MainContent = () => {
  return (
    <div className="md:pl-20">
      <MainIntroduce />
      <MainAbout />
      <MainServices />
      <MainSkills />
      <MainPortfolio />
      <MainContact />
    </div>
  );
};

export default MainContent;
