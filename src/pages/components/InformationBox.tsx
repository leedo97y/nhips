import RankingSection from "./RankingSection";
import WeatherSection from "./WeatherSection";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { fetchRankingDatas } from "../../hooks/useRankingDatas";

const InformationBox = () => {
  return (
    <div className="w-full md:h-[300px] h-[500px] flex justify-center md:mt-5 mt-8">
      <div className="md:w-[850px] w-full h-full flex flex-col md:flex-row md:gap-5 gap-14 md:p-8 p-5">
        <RankingSection />
        <WeatherSection />
      </div>
    </div>
  );
};

// 모든 페이지 데이터 preload
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // prefetch
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["CA"],
      queryFn: () => fetchRankingDatas("CA"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["HAN"],
      queryFn: () => fetchRankingDatas("HAN"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["JTBC"],
      queryFn: () => fetchRankingDatas("JTBC"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["KBS"],
      queryFn: () => fetchRankingDatas("KBS"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["MBC"],
      queryFn: () => fetchRankingDatas("MBC"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["MBN"],
      queryFn: () => fetchRankingDatas("MBN"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["SBS"],
      queryFn: () => fetchRankingDatas("SBS"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["YH"],
      queryFn: () => fetchRankingDatas("YH"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["YTN"],
      queryFn: () => fetchRankingDatas("YTN"),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    // 60초마다 데이터 재검증
    revalidate: 60,
  };
};

export default InformationBox;
