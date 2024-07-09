import { FixedFooter, Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <div className="w-[100vw] flex flex-col mb-20">{children}</div>
      {children?.key === "mainhome" ? <FixedFooter /> : <Footer />}
    </>
  );
};

export default Layout;
