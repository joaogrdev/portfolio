import { Skills } from "@/components/SectionAbout/Skills";
import SectionTitle from "@/components/SectionTitle";

const SectionAbout = () => {
  return (
    <section
      id="about"
      className="flex flex-col pt-10 tablet:pt-20 pb-30 bg-border items-center justify-center gap-10 relative px-10 tablet:px-20 laptop:px-30"
    >
      <SectionTitle tipo="dark" className="self-center">
        SOBRE MIM
      </SectionTitle>
      <div className="grid grid-cols-1 tablet:grid-rows-2 items-start gap-0">
        <article className="flex flex-col gap-6 relative">
          <blockquote className="tablet:pl-4 text-base tablet:text-lg text-primary font-base font-light text-justify border-0 tablet:border-l-4 border-primary/40">
            Desenvolvedor frontend com 3 anos de
            experiência criando interfaces digitais modernas e intuitivas. Ao
            longo da minha jornada, participei de mais de 20 projetos — de
            e-commerces a sistemas financeiros — sempre com foco em performance,
            usabilidade e entrega de valor. Acredito que tecnologia é sobre
            transformar ideias em soluções que realmente fazem diferença para
            pessoas e negócios, e é nesse equilíbrio entre técnica e
            criatividade que concentro meu trabalho.
          </blockquote>
        </article>
        <Skills />
      </div>
    </section>
  );
};

export default SectionAbout;
