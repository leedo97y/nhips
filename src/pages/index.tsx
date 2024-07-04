import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
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
    <>
      <Header />
      <Layout>
        <div></div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
