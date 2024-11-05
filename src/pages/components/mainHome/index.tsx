import Image from "next/image";
import MobileHeader from "../MobileHeader";
import InformationBox from "../InformationBox";
import politics from "../../../../public/images/politics.png";
import social from "../../../../public/images/social.png";
import world from "../../../../public/images/world.png";
import economy from "../../../../public/images/economy.png";
import it from "../../../../public/images/it.png";

const MainHome = () => {
  return (
    <div className="w-[100vw] h-[100%] p-0">
      <MobileHeader />
      <div className="w-[100vw] h-80 mt-[20px] bg-MAIN_BG_LIGHT dark:bg-MAIN_BG_DARK p-8 flex flex-col justify-center items-center gap-2">
        <p className="md:text-xl text-lg">Nhips = 📰 + 🍪 !</p>
        <p className="md:text-lg text-sm">
          뉴스를 가볍게 간식처럼 즐길 순 없을까? 하는 생각으로 만들었어요.
        </p>
        <p className="md:text-lg text-sm">
          아래 아이콘을 클릭하면 각 Topic 뉴스 페이지로 이동해요!
        </p>
        <p className="md:text-sm text-[11px] md:mt-5 mt-3 md:text-GRAY text-GRAY_DARK">
          ** 아래 아이콘은 각 Topic 영문 첫글자를 따서 만들어졌어요 !
        </p>
      </div>
      <div className="w-[100%] h-[100%] flex flex-col gap-10 md:p-8 p-4 md:mt-10 mt-8">
        <p className="md:hidden flex font-HAKGYO text-lg -mb-5">Topics</p>
        <div className="flex md:gap-10 gap-2 justify-center items-center">
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="md:w-full md:h-full w-[50px] h-[50px] rounded-full bg-BLACK hover:animate-bounce">
              <a className="w-full h-full" href="/social" aria-label="Social News page link">
                <Image
                  src={social}
                  alt={"Social News page icon"}
                  height={100}
                  width={100}
                  priority
                />
              </a>
            </div>
            <span className="md:text-lg text-[11px] font-HAKGYO">Social</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="md:w-full md:h-full w-[50px] h-[50px] rounded-full bg-BLACK hover:animate-bounce">
              <a href="/economy" aria-label="Economy News page link">
                <Image
                  src={economy}
                  alt={"Economy News page icon"}
                  height={100}
                  width={100}
                  priority
                />
              </a>
            </div>
            <span className="md:text-lg text-[11px] font-HAKGYO">Economy</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="md:w-full md:h-full w-[50px] h-[50px] rounded-full bg-BLACK hover:animate-bounce">
              <a href="/world" aria-label="World News page link">
                <Image src={world} alt={"World News page icon"} height={100} width={100} priority />
              </a>
            </div>
            <span className="md:text-lg text-[11px] font-HAKGYO">World</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="md:w-full md:h-full w-[50px] h-[50px] rounded-full bg-BLACK hover:animate-bounce">
              <a href="/politics" aria-label="Politics News page link">
                <Image
                  src={politics}
                  alt={"Politics News page icon"}
                  height={100}
                  width={100}
                  priority
                />
              </a>
            </div>
            <span className="md:text-lg text-[11px] font-HAKGYO">Politics</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="md:w-full md:h-full w-[50px] h-[50px] rounded-full bg-BLACK hover:animate-bounce">
              <a href="/it_science" aria-label="IT/Science News page link">
                <Image
                  src={it}
                  alt={"IT/Science News page icon"}
                  height={100}
                  width={100}
                  priority
                />
              </a>
            </div>
            <span className="md:text-lg text-[11px] font-HAKGYO">IT</span>
          </div>
        </div>
      </div>
      <InformationBox />
    </div>
  );
};

export default MainHome;
