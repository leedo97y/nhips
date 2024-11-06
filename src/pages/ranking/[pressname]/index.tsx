"use client";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import RankingNewsRack from "../../components/NewsItems/RankingNewsRack";
import { useRankingDatas } from "src/hooks/useRankingDatas";

const PressRankingNewsPage = () => {
  const router = useRouter();
  const { pressname }: any = router.query;

  const { data, isLoading } = useRankingDatas(pressname);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Layout>
        <>{data && <RankingNewsRack {...data} />}</>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  return { props: { pressname: context.params.pressname } };
}

export default PressRankingNewsPage;
