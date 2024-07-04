import Layout from "@/pages/components/Layout";
import { NewsContentsType } from "@/types/DataType";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [re, _setRe] = useState(false);
  const [data, setData] = useState<NewsContentsType[]>([
    { id: 0, imgLink: "", headline: "", link: "", date: "", pressInfo: "", content: "" },
  ]);

  useEffect(() => {
    axios.get(`/api/crawler`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [re]);

  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export default Home;
