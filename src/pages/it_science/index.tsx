import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ITNewsRack from "@/it_science/ITNewsRack";

const ITPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <ITNewsRack key="it" />
      </Layout>
    </>
  );
};

export default ITPage;
