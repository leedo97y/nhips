import Image from "next/image";
import Link from "next/link";
import { PressContentType } from "@/types/DataType";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiLink } from "react-icons/fi";

const RankingNewsList = ({
  list_id,
  headline,
  imgSrc,
  link,
  viewCount,
}: PressContentType | any) => {
  return (
    <div className="md:w-96 w-full max-h-full p-3 dark:bg-CARD_BG_DARK bg-CARD_BG_LIGHT rounded-sm">
      {headline ? (
        <div className="flex gap-3">
          <span className="md:w-[30px] w-[20px] font-HAKGYO md:text-lg text-base">
            {list_id + 1}
          </span>
          {imgSrc ? (
            <Link href={link} target="_blank" rel="noreferrer">
              <div className="w-[100px] md:h-[75px] h-[90px] flex justify-center">
                <Image src={imgSrc} alt="News Image" width={100} height={100} priority />
              </div>
            </Link>
          ) : (
            <Link href={link} target="_blank" rel="noreferrer">
              <div className="w-[100px] md:h-[75px] h-[90px] flex text-sm items-center justify-center bg-GRAY_EXTRADARK">
                <FiLink />
              </div>
            </Link>
          )}
          <div className="flex flex-col gap-3 justify-between">
            <a href={link} target="_blank" rel="noreferrer">
              <h4 className="text-xs">{headline}</h4>
            </a>
            <div className="text-xs flex gap-2 flex-row items-center">
              <MdOutlineRemoveRedEye />
              <span className="font-medium">{viewCount}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="font-HAKGYO md:text-lg">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default RankingNewsList;
