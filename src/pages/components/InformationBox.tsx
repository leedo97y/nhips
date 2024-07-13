import RankingSection from "./RankingSection";
import WeatherSection from "./WeatherSection";

const InformationBox = () => {
  return (
    <div className="w-full md:h-[300px] h-[500px] flex justify-center md:mt-5 mt-8">
      <div className="md:w-[850px] w-full h-full flex flex-col md:flex-row md:gap-5 gap-14 md:p-8 p-5">
        <RankingSection />
        <WeatherSection />
      </div>
    </div>
  );
};

export default InformationBox;
