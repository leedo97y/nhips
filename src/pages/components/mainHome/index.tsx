import Image from "next/image";

const MainHome = () => {
  return (
    <div className="w-[100vw] h-[100%] p-0">
      <div className="w-[100vw] h-80 mt-10 bg-MAIN_BG_LIGHT dark:bg-MAIN_BG_DARK p-8 flex flex-col justify-center items-center gap-2">
        <h4>
          Nhips = <span className="hover:">News</span>
          <span></span> + <span>Chips</span> !
        </h4>
        <p className="text-lg">뉴스도 간식처럼 즐길 수 있지 있을까? 하는 생각으로 만들어졌어요.</p>
        <p className="text-lg">아래 버튼을 클릭해서 각 Topic에 맞는 뉴스를 즐겨보세요!</p>
      </div>
      <div className="w-[100%] flex gap-10 justify-center items-center p-8 mt-10">
        <div className="w-30 h-30">
          <a target="_blank" href="/" aria-label="Social News page link">
            <Image
              src={"/images/social.png"}
              alt={"Social News page icon"}
              height={100}
              width={100}
              priority
            />
          </a>
        </div>
        <div className="w-30 h-30">
          <a target="_blank" href="/" aria-label="Economy News page link">
            <Image
              src={"/images/economy.png"}
              alt={"Economy News page icon"}
              height={100}
              width={100}
              priority
            />
          </a>
        </div>
        <div className="w-30 h-30">
          <a target="_blank" href="/" aria-label="World News page link">
            <Image
              src={"/images/world.png"}
              alt={"World News page icon"}
              height={100}
              width={100}
              priority
            />
          </a>
        </div>
        <div className="w-30 h-30">
          <a target="_blank" href="/" aria-label="Politics News page link">
            <Image
              src={"/images/politics.png"}
              alt={"Politics News page icon"}
              height={100}
              width={100}
              priority
            />
          </a>
        </div>
        <div className="w-30 h-30">
          <a target="_blank" href="/" aria-label="IT/Science News page link">
            <Image
              src={"/images/it.png"}
              alt={"IT/Science News page icon"}
              height={100}
              width={100}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
