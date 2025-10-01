import { getTecnologias } from "@/lib/dados";

export function Skills() {
  const tecnologias = getTecnologias();
  const categorias = ["frontend", "backend", "ferramentas"];

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 tablet:gap-8 w-full mt-[10vw] mobile:mt-[5vw] tablet:-mt-[12vw] laptop:-mt-[3.5vw]">
      {categorias.map((cat) => (
        <div key={cat} className="relative flex flex-col gap-2 tablet:gap-4">
          <h3 className="taxt-base tablet:text-lg font-bold text-primary/90 uppercase tracking-wide">
            {cat}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {tecnologias
              .filter((t) => t.tipo === cat)
              .map((t) => (
                <div
                  key={t.id}
                  className="relative px-4 py-2 rounded-md bg-primary/5 text-primary/80 font-medium text-sm overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  {t.nome}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-secondary/20 opacity-0 hover:opacity-50 rounded-xl transition-opacity duration-300"></div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
