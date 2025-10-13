import BackgroundPattern from "@/components/BackgroundPattern";
import Header from "./Header";
import BoxDescription from "@/components/SectionIntro/BoxDescription";
import BoxName from "@/components/SectionIntro/BoxName";
import FooterIntro from "@/components/SectionIntro/FooterIntro";

const SectionIntro = () => {
  return (
    <section
      id="home"
      className="grid grid-rows-[auto_1fr] overflow-hidden h-screen place-items-center relative"
    >
      <Header />
      <div className="overflow-x-hidden w-full h-full absolute top-0 left-0">
        <BackgroundPattern />
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <BoxName />
        <div className="h-px w-9/10 bg-primary laptop:w-140"></div>
        <BoxDescription />
      </div>
      <FooterIntro />
    </section>
  );
};

export default SectionIntro;
