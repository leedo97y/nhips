import { NewsContentsType } from "@/types/DataType";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/pages/components/Header";
import Layout from "@/pages/components/Layout";
import MainHome from "@/pages/components/mainHome";

const Home = () => {
  const [re, _setRe] = useState(false);
  const [data, setData] = useState<NewsContentsType[]>([
    { id: 0, imgLink: "", headline: "", link: "", date: "", pressInfo: "", content: "" },
  ]);

  useEffect(() => {
    axios.get(`/api/social`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [re]);

  return (
    <>
      <Header />
      <Layout>
        <MainHome key="mainhome" />
      </Layout>
    </>
  );
};

export default Home;
