import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="md:hidden">
      <a href="/">
        <div className="flex items-center pl-[20px] gap-[5px]">
          <div className="w-[40px] h-[40px] bg-BLACK rounded-full">
            <Image src={"/images/logo.png"} alt="nhips logo image" width={100} height={100} />
          </div>
          <h1 className="text-2xl font-HAKGYO dark:text-white">Nhips</h1>
        </div>
      </a>
    </div>
  );
};

export default MobileHeader;
