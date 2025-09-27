import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import SplitText from "@/components/SplitText";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

const SectionIntro = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-screen pt-45 tablet:pt-35 items-center relative">
      <div className="grid grid-cols-1 tablet:grid-cols-[1fr_1px_1fr] w-full items-center justify-center gap-2 tablet:gap-7 relative">
        <div className="flex flex-col tablet:py-10 items-center tablet:items-end justify-center relative">
          <SplitText
            text="JOÃO"
            delay={30}
            duration={1}
            ease="power3.out"
            splitType="lines"
            rootMargin="-100px"
            from={{ opacity: 1, x: 1100 }}
            to={{ opacity: 1, x: 0 }}
            className={cn("text-8xl laptop:text-[9rem] font-nova -mt-10 pt-10")} ////duvida somente se começa em 7xl
          />
          <SplitText
            text="GABRIEL"
            delay={30}
            duration={1}
            ease="power3.out"
            splitType="lines"
            rootMargin="-100px"
            from={{ opacity: 1, x: 1400 }}
            to={{ opacity: 1, x: 0 }}
            className={cn(
              "text-6xl tablet:text-7xl laptop:text-8xl font-nova -mt-3 tablet:-mt-5"
            )}
          />
        </div>

        <div className="h-px tablet:h-full w-2/3 mx-auto tablet:w-px bg-primary"></div>

        <FadeContent
          blur={false}
          duration={300}
          easing="ease-out"
          initialOpacity={0}
          delay={800}
          className="flex flex-col items-center tablet:items-start justify-center"
        >
          <p className="font-thin font-contrast text-3xl laptop:text-[40px] tablet:-mt-4">
            DESENVOLVEDOR
          </p>
          <p className="font-thin font-contrast text-3xl laptop:text-[40px] -mt-1">
            FRONTEND
          </p>
          <p className="font-base text-muted-foreground text-sm tablet:text-base">
            DANDO VIDA ÀS SUAS IDEIAS
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/joaogrs/"
              target="_blank"
              className="flex p-2 rounded-md items-center justify-center border border-primary/50 hover:scale-105 bg-border cursor-pointer"
              title="Linkedin"
            >
              <Linkedin size={18} className="text-primary" />
            </a>
            <a
              href="https://github.com/joaogrdev"
              target="_blank"
              className="flex p-2 rounded-md items-center justify-center border border-primary/50 hover:scale-105 bg-border cursor-pointer"
              title="Github"
            >
              <Github size={18} className="text-primary" />
            </a>
            <Button className="rounded-md hover:scale-105 bg-primary hover:bg-initial pb-1 font-title text-secondary font-bold">
              CURRÍCULO
            </Button>
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

export default SectionIntro;
