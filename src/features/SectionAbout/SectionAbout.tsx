import { AccordionSkills } from "@/components/SectionAbout/AccordionSkills";
import SectionTitle from "@/components/SectionTitle";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const SectionAbout = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="flex flex-col items-center justify-center bg-border gap-10 pt-20 pb-30 relative px-5 tablet:px-10 laptop:px-30">
      {/* <img
        src="https://tomoliverharrison.co.uk/wp-content/themes/toh2025/dist/images/sketchy-border.png"
        alt=""
        className={cn(
          "h-10 tablet:h-20 absolute top-0 left-0 w-full bg-border",
          theme === "dark" && "rotate-x-180 bg-primary"
        )}
      /> */}
      <SectionTitle tipo="dark" className="self-center">
        SOBRE MIM
      </SectionTitle>
      <div className="grid grid-cols-1 tablet:grid-rows-2 items-start gap-0">
        <article className="flex flex-col gap-6 relative">
          <blockquote className="border-l-4 border-primary/40 pl-4 text-lg leading-relaxed text-primary font-base font-normal text-justify">
            Sou João Gabriel Ribeiro, desenvolvedor frontend com 3 anos de
            experiência criando interfaces digitais modernas e intuitivas. Ao
            longo da minha jornada, participei de mais de 20 projetos — de
            e-commerces a sistemas financeiros — sempre com foco em performance,
            usabilidade e entrega de valor. Acredito que tecnologia é sobre
            transformar ideias em soluções que realmente fazem diferença para
            pessoas e negócios, e é nesse equilíbrio entre técnica e
            criatividade que concentro meu trabalho.
          </blockquote>
        </article>
        <AccordionSkills />
      </div>
    </section>
  );
};

export default SectionAbout;
