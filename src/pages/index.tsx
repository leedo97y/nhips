import Header from "@/components/Header";
import Layout from "@/components/Layout";
import MainHome from "@/components/mainHome";

const Home = () => {
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
