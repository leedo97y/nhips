import Image from "next/image";
import { RankingType } from "@/types/DataType";
import NewsList from "@/components/NewsItems/NewsList";

const PressRankingRack = ({ pressName, pressImgSrc, pressContent }: RankingType) => {
  const colLeft = [
    pressContent[0],
    pressContent[1],
    pressContent[2],
    pressContent[3],
    pressContent[4],
    pressContent[5],
    pressContent[6],
    pressContent[7],
    pressContent[8],
    pressContent[9],
  ];
  const colRight = [
    pressContent[10],
    pressContent[11],
    pressContent[12],
    pressContent[13],
    pressContent[14],
    pressContent[15],
    pressContent[16],
    pressContent[17],
    pressContent[18],
    pressContent[19],
  ];

  return (
    <div className="w-[100vw] h-full p-4 flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <div className="md:w-[50px] w-[45px] md:h-[50px] h-[45px] flex flex-col justify-center rounded-full bg-BLACK">
          {pressImgSrc ? (
            <Image
              src={pressImgSrc}
              alt="IT/Science News page icon"
              width={100}
              height={100}
              className="rounded-full"
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <h3 className="font-HAKGYO md:text-[23px] text-lg">{pressName}</h3>
          <p className="md:text-xs text-[11px]">이전 한시간 동안의 1-20위 뉴스를 알려줍니다.</p>
        </div>
      </div>
      <div className="w-full h-full flex md:flex-row flex-col gap-5">
        <div className="w-full h-full flex flex-col flex-wrap justify-center items-end gap-5">
          {colLeft.map((item, idx) => (
            <NewsList key={idx} {...item} list_id={idx} />
          ))}
        </div>
        <div className="w-full h-full flex flex-col flex-wrap justify-center items-start gap-5">
          {colRight.map((item, idx) => (
            <NewsList key={idx} {...item} list_id={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return { props: { pressname: context.params.pressname } };
}

export default PressRankingRack;
