import { Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <div className="w-[100vw] h-full flex flex-col mb-20">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
