import Image from "next/image";

const MainHome = () => {
  return (
    <div className="w-[100vw] h-[100%] p-0">
      <div className="w-[100vw] h-80 mt-10 bg-MAIN_BG_LIGHT dark:bg-MAIN_BG_DARK p-8 flex flex-col justify-center items-center gap-2">
        <h4>Nhips = News + Chips !</h4>
        <p className="text-lg">뉴스도 간식처럼 즐길 수 있지 있을까? 하는 생각으로 만들어졌어요.</p>
        <p className="text-lg">아래 버튼을 클릭해서 각 Topic에 맞는 뉴스를 즐겨보세요!</p>
      </div>
      <div className="w-[100%] h-[100%] flex gap-10 justify-center items-center p-8 mt-10">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="rounded-full bg-BLACK hover:animate-bounce">
            <a
              className="w-full h-full"
              target="_blank"
              href="/social"
              aria-label="Social News page link"
            >
              <Image
                src={"/images/social.png"}
                alt={"Social News page icon"}
                height={100}
                width={100}
                priority
              />
            </a>
          </div>
          <span className="font-HAKGYO">Social</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="rounded-full bg-BLACK hover:animate-bounce">
            <a target="_blank" href="/economy" aria-label="Economy News page link">
              <Image
                src={"/images/economy.png"}
                alt={"Economy News page icon"}
                height={100}
                width={100}
                priority
              />
            </a>
          </div>
          <span className="font-HAKGYO">Economy</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="rounded-full bg-BLACK hover:animate-bounce">
            <a target="_blank" href="/world" aria-label="World News page link">
              <Image
                src={"/images/world.png"}
                alt={"World News page icon"}
                height={100}
                width={100}
                priority
              />
            </a>
          </div>
          <span className="font-HAKGYO">World</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="rounded-full bg-BLACK hover:animate-bounce">
            <a target="_blank" href="/politics" aria-label="Politics News page link">
              <Image
                src={"/images/politics.png"}
                alt={"Politics News page icon"}
                height={100}
                width={100}
                priority
              />
            </a>
          </div>
          <span className="font-HAKGYO">Politics</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="rounded-full bg-BLACK hover:animate-bounce">
            <a target="_blank" href="/it_science" aria-label="IT/Science News page link">
              <Image
                src={"/images/it.png"}
                alt={"IT/Science News page icon"}
                height={100}
                width={100}
                priority
              />
            </a>
          </div>
          <span className="font-HAKGYO">IT/Science</span>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
