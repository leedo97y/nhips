import Layout from "@/components/Layout";
import MainHome from "@/components/mainHome";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { fetchNewsDatas } from "../hooks/useNewsDatas";

const Home = () => {
  return (
    <>
      <Layout>
        <MainHome />
      </Layout>
    </>
  );
};

// 모든 페이지 데이터 preload
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // prefetch
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["social"],
      queryFn: () => fetchNewsDatas("social"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["economy"],
      queryFn: () => fetchNewsDatas("economy"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["politics"],
      queryFn: () => fetchNewsDatas("politics"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["it"],
      queryFn: () => fetchNewsDatas("it"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["world"],
      queryFn: () => fetchNewsDatas("world"),
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

export default Home;
