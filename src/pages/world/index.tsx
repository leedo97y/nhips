import Header from "@/components/Header";
import Layout from "@/components/Layout";
import WorldNewsRack from "@/world/WorldNewsRack";

const WorldPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <WorldNewsRack key="World" />
      </Layout>
    </>
  );
};

export default WorldPage;
