import Header from "@/components/Header";
import Layout from "@/components/Layout";
import EconomyNewsRack from "@/economy/EconomyNewsRack";

const EconomyPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <EconomyNewsRack key="Economy" />
      </Layout>
    </>
  );
};

export default EconomyPage;
