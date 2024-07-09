import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PoliticsNewsRack from "@/politics/PoliticsNewsRack";

const politicsPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <PoliticsNewsRack key="politics" />
      </Layout>
    </>
  );
};

export default politicsPage;
