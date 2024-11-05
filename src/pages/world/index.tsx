import Header from "@/components/Header";
import Layout from "@/components/Layout";
import NewsRack from "@/components/NewsItems/NewsRack";

const WorldPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <NewsRack />
      </Layout>
    </>
  );
};

export default WorldPage;
