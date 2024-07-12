import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { RankingType } from "@/types/DataType";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PressRankingRack from "./PressRankingRack";

const PressRankingPage = () => {
  const router = useRouter();
  const { pressname } = router.query;

  const [data, setData] = useState<RankingType>({
    pressName: "",
    pressImgSrc: "",
    pressContent: [],
  });

  useEffect(() => {
    axios.get(`/api/ranking/${pressname}`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <PressRankingRack key="mainhome" {...data} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  return { props: { pressname: context.params.pressname } };
}

export default PressRankingPage;
