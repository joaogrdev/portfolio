import SocialBar from "../SocialBar";
import { Mouse } from "lucide-react";

const FooterIntro = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-fit flex items-center justify-center tablet:justify-between px-10 py-5">
      <SocialBar />
      <div className="hidden tablet:flex flex-col gap-1 items-center justify-center">
        <Mouse size={30} />
        <span className="font-base text-sm">DESÇA</span>
      </div>
    </div>
  );
};

export default FooterIntro;
