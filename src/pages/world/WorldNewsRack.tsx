import Image from "next/image";
import NewsCard from "@/components/NewsItems/NewsCard";
import { NewsContentsType } from "@/types/DataType";
import { useEffect, useState } from "react";
import axios from "axios";

const WorldNewsRack = () => {
  const [data, setData] = useState<NewsContentsType[]>([
    { id: 0, imgSrc: "", headline: "", link: "", date: "", pressInfo: "", content: "" },
  ]);

  useEffect(() => {
    axios.get(`/api/world`).then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <div className="w-[100vw] h-full p-4 flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] rounded-full bg-BLACK">
          <Image src={"/images/world.png"} alt="World News page icon" width={100} height={100} />
        </div>
        <h3 className="font-HAKGYO text-[23px]">World News</h3>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-5">
        {data.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WorldNewsRack;
