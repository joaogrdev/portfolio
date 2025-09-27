import Noise from "@/components/Noise";
import Particles from "@/components/Particles";
import { useTheme } from "@/components/ThemeProvider";
import Footer from "@/features/Footer/Footer";
import Header from "@/features/Header/Header";
import SectionIntro from "@/features/SectionIntro/SectionIntro";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="w-screen h-screen overflow-x-hidden relative bg-border">
      {/* <Particles
        particleColors={theme === "dark" ? ["#ffffff"] : ["#000000"]}
        particleCount={700}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
      /> */}

      {/* <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={20}
      /> */}

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern
            id="p"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.3)"
          >
            <path
              data-color="outline"
              fill="none"
              stroke={theme === "dark" ? "#ffffff" : "#000000"}
              stroke-width="0.25"
              d="M50 0v100M100 50H0"
            ></path>
          </pattern>
        </defs>
        <rect
          fill={theme === "dark" ? "#171717" : "#e5e5e5"}
          width="100%"
          height="100%"
        ></rect>
        <rect fill="url(#p)" width="100%" height="100%"></rect>
      </svg>

      <div className="absolute flex flex-col top-0 left-0 w-full h-full z-50">
        <Header />
        <main className="flex-1">
          <SectionIntro />
          <div className="h-200 bg-primary"></div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
