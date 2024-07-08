import { FixedFooter, Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <div className="max-w-4xl flex flex-col gap-28 md:gap-32 md:my-20 my-4 mb-20">{children}</div>
      {children?.key === "mainhome" ? <FixedFooter /> : <Footer />}
    </>
  );
};

export default Layout;
