import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

const Header = () => {
  return (
    <div className="w-full h-20 dark:bg-BLACK static top-0 flex justify-start items-center">
      <Link href="/">
        <div className="flex items-center pl-[20px] gap-[5px]">
          <div className="flex w-[40px] h-[40px] bg-BLACK rounded-full">
            <Image src={logo} alt="nhips logo image" width={100} height={100} priority />
          </div>
          <h1 className="text-2xl font-HAKGYO flex dark:text-white">Nhips</h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
