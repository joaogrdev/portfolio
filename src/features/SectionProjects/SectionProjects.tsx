import SectionTitle from "@/components/SectionTitle";
import { useTheme } from "@/components/ThemeProvider";
import { getProjetos } from "@/lib/dados";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const SectionProjects = () => {
  const { theme } = useTheme();
  const projetos = getProjetos();

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-10 bg-border py-20 relative px-5 tablet:px-10 laptop:px-30"
    >
      {/* <img
        src="https://tomoliverharrison.co.uk/wp-content/themes/toh2025/dist/images/sketchy-border.png"
        alt=""
        className={cn(
          "h-10 tablet:h-20 w-full absolute top-0 left-0 bg-primary border-none",
          theme === "light" && "rotate-x-180 bg-border"
        )}
      /> */}
      <SectionTitle tipo="dark" className="self-start">
        PROJETOS
      </SectionTitle>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-5 mobile:gap-10 laptop:gap-y-10 scrollBlock">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="relative aspect-video">
            <h2 className="top-0 text-primary text-xl font-semibold font-base w-full pb-1 pl-1 grid grid-cols-1 desktop:grid-cols-[auto_auto] place-items-start justify-between gap-1 whitespace-nowrap">
              {projeto.nome.toUpperCase()}
              <ul className="flex gap-2 items-center justify-end pr-1 pb-1">
                {projeto.tecnologias.map((tecnologia) => (
                  <li
                    key={tecnologia}
                    className="border border-primary text-xs text-primary font-base rounded-sm px-2"
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
                className="grayscale-75 hover:grayscale-25 transition-all duration-800 cursor-pointer h-full w-full object-cover hover:scale-105"
              />
              <div className="flex absolute bottom-0 right-0 z-50">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-border p-1.5 rounded-tl-sm"
                >
                  <Github
                    size={20}
                    className="hover:scale-120 cursor-pointer transition-all duration-300"
                  />
                </a>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-border rounded-br-md p-1.5"
                >
                  <ExternalLink
                    size={20}
                    className="hover:scale-120 cursor-pointer transition-all duration-300"
                  />
                </a>
              </div>
            </div>

            {/* <p>{projeto.desc}</p>
            <ul>
              {projeto.tecnologias.map(tecnologia => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionProjects;
