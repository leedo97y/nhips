"use client";

import Image from "next/image";
import NewsCard from "./NewsCard";
import { useRouter } from "next/router";
import { usePathImage } from "../../../utils/usePathImage";
import { useNewsDatas } from "../../../hooks/useNewsDatas";

const NewsRack = () => {
  const router = useRouter();
  const pathname = router.pathname.split("/").join("").split("_")[0];

  const { data, isLoading } = useNewsDatas(pathname);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[100vw] h-full p-4 flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] rounded-full bg-BLACK">
          <Image
            src={usePathImage(pathname)}
            alt={`${pathname} news page icon`}
            width={100}
            height={100}
            priority
          />
        </div>
        <h3 className="font-HAKGYO text-[23px] capitalize">{pathname} News</h3>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-5">
        {data && data.map((item, idx) => <NewsCard key={idx} {...item} />)}
      </div>
    </div>
  );
};

export default NewsRack;
