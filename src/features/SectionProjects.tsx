import SectionTitle from "@/components/SectionTitle";
import { getProjetos } from "@/lib/dados";
import { ExternalLink, Github } from "lucide-react";

const SectionProjects = () => {
  const projetos = getProjetos();

  return (
    <section
      id="projects"
      className="flex flex-col py-20 bg-border items-center justify-center gap-10 relative px-10 tablet:px-20 laptop:px-30"
    >
      <SectionTitle tipo="dark" className="self-start">
        PROJETOS
      </SectionTitle>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-5 mobile:gap-10 laptop:gap-y-10 scrollBlock">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="relative aspect-video">
            <h2 className="grid grid-cols-1 w-full pb-1 pl-1 text-primary text-lg tablet:text-xl font-semibold font-base whitespace-nowrap top-0 desktop:grid-cols-[auto_auto] place-items-start justify-between gap-1">
              {projeto.nome.toUpperCase()}
              <ul className="flex pr-1 pb-1 gap-2 items-center justify-end">
                {projeto.tecnologias.map((tecnologia) => (
                  <li
                    key={tecnologia}
                    className="px-1 desktop:px-2 text-xs dektop:text-sm text-primary font-base border border-primary/50 rounded-sm"
                  >
                    {tecnologia.toUpperCase()}
                  </li>
                ))}
              </ul>
            </h2>
            <div className="overflow-hidden h-full w-full rounded-sm relative">
              <img
                src={projeto.img}
                alt={projeto.nome}
                className="object-cover h-full w-full transition-all cursor-pointer grayscale-75 hover:grayscale-25 duration-800 hover:scale-105"
              />
              <div className="flex z-50 absolute bottom-0 right-0">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-border bg-primary rounded-tl-sm"
                >
                  <Github
                    size={20}
                    className="cursor-pointer transition-all hover:scale-120 duration-300"
                  />
                </a>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-border bg-primary rounded-br-md"
                >
                  <ExternalLink
                    size={20}
                    className="cursor-pointer transition-all hover:scale-120 duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionProjects;
