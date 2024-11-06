import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <div className="w-[100vw] h-full flex flex-col mb-20">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
