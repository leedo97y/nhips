import { RankingType } from "@/types/DataType";
import { useQuery } from "@tanstack/react-query";

const fetchRankingDatas = async (pressname: string): Promise<RankingType> => {
  const response = await fetch(`/api/ranking/${pressname}`);
  const data = await response.json();

  return data;
};

const useRankingDatas = (pressname: string) => {
  return useQuery({
    queryKey: [pressname],
    queryFn: () => fetchRankingDatas(pressname),
  });
};

export { useRankingDatas, fetchRankingDatas };
