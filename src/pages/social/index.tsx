import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SocialNewsRack from "@/social/SocialNewsRack";

const SocialPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <SocialNewsRack key="social" />
      </Layout>
    </>
  );
};

export default SocialPage;
