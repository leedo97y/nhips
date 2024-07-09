import Image from "next/image";

const Header = () => {
  return (
    <div className="w-[100vw] h-2 dark:bg-BLACK static top-0 md:h-20 flex justify-start items-center">
      <a href="/">
        <div className="flex items-center pl-[20px] gap-[5px]">
          <div className="hidden md:flex w-[40px] h-[40px] bg-BLACK rounded-full">
            <Image src={"/images/logo.png"} alt="nhips logo image" width={100} height={100} />
          </div>
          <h1 className="hidden text-2xl font-HAKGYO md:flex dark:text-white">Nhips</h1>
        </div>
      </a>
    </div>
  );
};

export default Header;
