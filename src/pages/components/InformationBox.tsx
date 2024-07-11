import React from "react";
import PressBadge from "./PressBadge";

const InformationBox = () => {
  return (
    <div className="w-full h-[300px] flex p-8">
      <div className="w-[55%] flex flex-col gap-5">
        <h4 className="font-SAM3 text-[28px]">Ranking</h4>
        <div className="flex flex-col gap-5">
          <div className="w-full flex gap-5">
            <PressBadge name="SBS" />
            <PressBadge name="KBS" />
            <PressBadge name="MBC" />
          </div>
          <div className="w-full flex gap-5 pl-[50px]">
            <PressBadge name="YTN" />
            <PressBadge name="MBN" />
            <PressBadge name="JTBC" />
          </div>
          <div className="w-full flex gap-5">
            <PressBadge name="YH" />
            <PressBadge name="CA" />
            <PressBadge name="HAN" />
          </div>
        </div>
      </div>
      <div className="w-[45%] p-5 bg-CARD_BG_DARK rounded-md"></div>
    </div>
  );
};

export default InformationBox;
