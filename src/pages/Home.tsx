import Footer from "@/features/Footer";
import SectionAbout from "@/features/SectionAbout";
import SectionIntro from "@/features/SectionIntro";
import SectionProjects from "@/features/SectionProjects";

const Home = () => {
  return (
    <main className="w-screen h-screen bg-border overflow-x-hidden">
      <div className="absolute flex flex-col top-0 left-0 w-full h-full overflow-x-hidden">
        <div>
          <SectionIntro />
          <SectionProjects />
          <SectionAbout />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
