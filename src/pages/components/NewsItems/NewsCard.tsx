import Image from "next/image";
import { NewsContentsType } from "@/types/DataType";

const NewsCard = ({ headline, imgSrc, link, pressInfo, date, content }: NewsContentsType) => {
  return (
    <div className="w-96 max-h-full p-3 flex flex-col gap-3 dark:bg-CARD_BG_DARK bg-CARD_BG_LIGHT rounded-sm">
      <div className="flex flex-col gap-2">
        <a href={link} target="_blank" rel="noreferrer">
          <h4 className="text-[20px] font-semibold">{headline}</h4>
        </a>
        <p className="flex justify-between text-sm">
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

      <p className="whitespace-pre-wrap text-sm">{content}...</p>
    </div>
  );
};

export default NewsCard;
