import { StaticImageData } from "next/image";
import politics from "../../public/images/politics.png";
import social from "../../public/images/social.png";
import world from "../../public/images/world.png";
import economy from "../../public/images/economy.png";
import it from "../../public/images/it.png";

const imageMap: { [key: string]: StaticImageData } = {
  politics,
  social,
  world,
  economy,
  it,
};

export const usePathImage = (pathname: string) => {
  return imageMap[pathname] || "";
};
