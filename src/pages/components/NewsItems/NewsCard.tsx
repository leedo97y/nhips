import Image from "next/image";
import { NewsContentsType } from "@/types/DataType";

const NewsCard = ({ headline, imgSrc, link, pressInfo, date, content }: NewsContentsType) => {
  return (
    <>
      {headline ? (
        <div className="w-96 max-h-full p-3 flex flex-col gap-4 dark:bg-CARD_BG_DARK bg-CARD_BG_LIGHT rounded-sm">
          <div className="flex flex-col gap-2">
            <a href={link} target="_blank" rel="noreferrer">
              <h4 className="text-lg font-semibold">{headline}</h4>
            </a>
            <p className="flex justify-between text-xs">
              <span>{pressInfo}</span>
              <span>{date}</span>
            </p>
          </div>
          {imgSrc && (
            <a href={link} target="_blank" rel="noreferrer">
              <div className="w-full h-[200px] flex justify-center">
                <Image src={imgSrc} alt="News Image" width={360} height={100} />
              </div>
            </a>
          )}
          <p className="whitespace-pre-wrap text-[13px]">{content}...</p>
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="font-HAKGYO md:text-lg">Loading...</p>
        </div>
      )}
    </>
  );
};

export default NewsCard;
