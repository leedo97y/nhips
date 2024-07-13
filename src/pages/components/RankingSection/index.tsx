import PressBadge from "../PressBadge";

const RankingSection = () => {
  return (
    <div className="md:w-[53%] w-full flex flex-col gap-5">
      <h4 className="font-SAM3 md:text-[28px] text-[23px] md:mb-3 mb-1">Ranking</h4>
      <div className="flex flex-col gap-5 pl-2">
        <div className="w-full flex md:gap-5 gap-3">
          <PressBadge name="SBS" />
          <PressBadge name="KBS" />
          <PressBadge name="MBC" />
        </div>
        <div className="w-full flex md:gap-5 gap-3 md:pl-[50px] pl-[35px]">
          <PressBadge name="YTN" />
          <PressBadge name="MBN" />
          <PressBadge name="JTBC" />
        </div>
        <div className="w-full flex md:gap-5 gap-3">
          <PressBadge name="YH" />
          <PressBadge name="CA" />
          <PressBadge name="HAN" />
        </div>
      </div>
    </div>
  );
};

export default RankingSection;
