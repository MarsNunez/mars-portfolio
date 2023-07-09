import MainAbout from "./MainAbout";
import MainIntroduce from "./MainIntroduce";
import MainServices from "./MainServices";
import MainSkills from "./MainSkills";

const MainContent = () => {
  return (
    <div className="pl-20">
      <MainIntroduce />
      <MainAbout />
      <MainServices />
      <MainSkills />
    </div>
  );
};

export default MainContent;
