import { NewsContentsType } from "@/types/DataType";
import { useQuery } from "@tanstack/react-query";

const fetchNewsDatas = async (pathname: string): Promise<NewsContentsType[]> => {
  const response = await fetch(`/api/${pathname}`);
  const data = await response.json();

  return data;
};

const useNewsDatas = (pathname: string) => {
  return useQuery({
    queryKey: [pathname],
    queryFn: () => fetchNewsDatas(pathname),
  });
};

export { useNewsDatas, fetchNewsDatas };
