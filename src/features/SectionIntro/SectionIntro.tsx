import BackgroundPattern from "@/components/BackgroundPattern";
import Header from "../Header/Header";
import BoxDescription from "@/components/SectionIntro/BoxDescription";
import BoxName from "@/components/SectionIntro/BoxName";
import FooterIntro from "@/components/SectionIntro/FooterIntro";

const SectionIntro = () => {
  return (
    <section
      id="home"
      className="grid grid-rows-[auto_1fr] h-screen place-items-center relative overflow-x-hidden"
    >
      <Header />
      <div className="absolute top-0 left-0 w-full h-full overflow-x-hidden">
        <BackgroundPattern />
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <BoxName />
        <div className="h-px w-9/10 laptop:w-140 bg-primary"></div>
        <BoxDescription />
      </div>
      <FooterIntro />
    </section>
  );
};

export default SectionIntro;
