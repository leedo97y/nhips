import Image from "next/image";

const Header = () => {
  return (
    <div className="w-[100vw] h-2 pl-[20px] bg-BLACK sticky top-0 md:static md:h-20 flex justify-start items-center">
      <div className="flex items-center gap-[5px]">
        <div className="w-[35px] h-[35px]">
          <Image src={"/images/logo.png"} alt="nhips logo image" width={100} height={100} />
        </div>
        <h1 className="hidden text-2xl md:flex font-semibold text-white">Nhips</h1>
      </div>
    </div>
  );
};

export default Header;
