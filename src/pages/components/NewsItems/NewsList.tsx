import Image from "next/image";
import { PressContentType } from "@/types/DataType";

const NewsList = ({ id, headline, imgSrc, link, viewCount }: PressContentType) => {
  return (
    <div className="md:w-96 w-full max-h-full p-3 flex gap-3 dark:bg-CARD_BG_DARK bg-CARD_BG_LIGHT rounded-sm">
      <span className="md:w-[30px] w-[20px] font-HAKGYO md:text-lg text-base">{id + 1}</span>
      {imgSrc && (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="w-[100px] md:h-[75px] h-[90px] flex justify-center">
            <Image src={imgSrc} alt="News Image" width={100} height={100} />
          </div>
        </a>
      )}
      <div className="flex flex-col gap-3 justify-between">
        <a href={link} target="_blank" rel="noreferrer">
          <h4 className="text-xs">{headline}</h4>
        </a>
        <p className="text-xs flex gap-2">
          <span className="">view</span>
          {viewCount}
        </p>
      </div>
    </div>
  );
};

export default NewsList;
