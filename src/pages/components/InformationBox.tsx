import RankingSection from "./RankingSection";

const InformationBox = () => {
  return (
    <div className="w-full md:h-[300px] h-[500px] flex justify-center md:mt-5 mt-8">
      <div className="md:w-[850px] w-full h-full flex flex-col md:flex-row md:gap-0 gap-14 md:p-8 p-5">
        <RankingSection />
        <div className="md:w-[45%] w-full h-full flex flex-col gap-5 p-5 bg-CARD_BG_DARK rounded-md"></div>
      </div>
    </div>
  );
};

export default InformationBox;
