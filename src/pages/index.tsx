import Header from "@/components/Header";
import Layout from "@/components/Layout";
import MainHome from "@/components/mainHome";
import { useEffect, useState } from "react";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Header />
      {mounted && (
        <Layout>
          <MainHome key="mainhome" />
        </Layout>
      )}
    </>
  );
};

export default Home;
