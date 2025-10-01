// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { getTecnologias } from "@/lib/dados";

// export function AccordionSkills() {
//   const tecnologias = getTecnologias();

//   const categorias = [
//     { id: "frontend", label: "Front-end" },
//     { id: "backend", label: "Back-end" },
//     { id: "ferramentas", label: "Ferramentas" },
//   ];

//   return (
//     <Accordion
//       type="single"
//       collapsible
//       defaultValue="frontend"
//       className="w-full border-none"
//     >
//       {categorias.map((cat) => (
//         <AccordionItem
//           key={cat.id}
//           value={cat.id}
//           className="border rounded-xl border-none"
//         >
//           <AccordionTrigger className="px-4 py-2 text-base font-semibold tracking-wide text-primary hover:no-underline">
//             {cat.label}
//           </AccordionTrigger>

//           <AccordionContent className="grid grid-cols-2 gap-2 px-4 py-2">
//             {tecnologias
//               .filter((t) => t.tipo === cat.id)
//               .map((t) => (
//                 <span
//                   key={t.id}
//                   className="rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-center text-sm text-primary/75 font-medium hover:bg-primary/10 transition-colors"
//                 >
//                   {t.nome}
//                 </span>
//               ))}
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }

// import { getTecnologias } from "@/lib/dados";

// export function AccordionSkills() {
//   const tecnologias = getTecnologias();
//   const categorias = [
//     { id: "frontend", label: "Front-end" },
//     { id: "backend", label: "Back-end" },
//     { id: "ferramentas", label: "Ferramentas" },
//   ];

//   return (
//     <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
//       {categorias.map((cat) => (
//         <div
//           key={cat.id}
//           className="flex flex-col gap-3 p-5 bg-primary/5 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
//         >
//           <h3 className="text-lg font-semibold text-primary">{cat.label}</h3>
//           <div className="flex flex-wrap gap-2">
//             {tecnologias
//               .filter((t) => t.tipo === cat.id)
//               .map((t) => (
//                 <span
//                   key={t.id}
//                   className="px-3 py-1 rounded-full bg-primary/10 text-primary/80 text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
//                 >
//                   {t.nome}
//                 </span>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default AccordionSkills;

// import { getTecnologias } from "@/lib/dados";
// import ScrollVelocity from "../ScrollVelocity";

// export function AccordionSkills() {
//   const tecnologias = getTecnologias();
//   const frontEnd = tecnologias.filter((t) => t.tipo === "frontend");
//   const backEnd = tecnologias.filter((t) => t.tipo === "backend");

//   return (
//     <div className="w-full">
//       <ScrollVelocity
//         texts={[
//           frontEnd.map((t) => t.nome.toUpperCase()).join(" • "),
//           backEnd.map((t) => t.nome.toUpperCase()).join(" • "),
//         ]}
//         velocity={50}
//         className="custom-scroll-text font-base text-2xl font-normal"
//       />
//     </div>
//   );
// }

// import { getTecnologias } from "@/lib/dados";

// export function AccordionSkills() {
//   const tecnologias = getTecnologias();
//   const categorias = ["frontend", "backend", "ferramentas"];

//   return (
//     <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 w-full gap-10">
//       {categorias.map((cat) => (
//         <div key={cat} className="flex flex-col gap-2">
//           <h3 className="text-lg font-bold text-primary/90 uppercase tracking-wider">
//             {cat}
//           </h3>

//           <div className="flex flex-row gap-4 flex-wrap">
//             {tecnologias
//               .filter((t) => t.tipo === cat)
//               .map((t) => (
//                 <div
//                   key={t.id}
//                   className="px-4 py-2 rounded-xl bg-primary/5 text-primary/80 text-sm font-medium transition-transform duration-300 hover:scale-105 hover:bg-primary/10 shadow-sm"
//                 >
//                   {t.nome}
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { getTecnologias } from "@/lib/dados";

// export function AccordionSkills() {
//   const tecnologias = getTecnologias();
//   const categorias = ["frontend", "backend", "ferramentas"];

//   return (
//     <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 w-full gap-12">
//       {categorias.map((cat) => (
//         <div key={cat} className="flex flex-col gap-3">
//           {/* Categoria */}
//           <h3 className="text-lg font-extrabold text-primary/95 uppercase tracking-wider">
//             {cat}
//           </h3>

//           {/* Skills */}
//           <div className="flex flex-row gap-4 flex-wrap">
//             {tecnologias
//               .filter((t) => t.tipo === cat)
//               .map((t) => (
//                 <div
//                   key={t.id}
//                   className="px-5 py-2 rounded-2xl bg-primary/10 text-primary/90 text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 shadow-md hover:shadow-lg cursor-pointer"
//                 >
//                   {t.nome}
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import { getTecnologias } from "@/lib/dados";

export function AccordionSkills() {
  const tecnologias = getTecnologias();
  const categorias = ["frontend", "backend", "ferramentas"];

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 w-full mt-[10vw] mobile:mt-[5vw] tablet:-mt-[12vw] laptop:-mt-[3vw]">
      {categorias.map((cat) => (
        <div key={cat} className="relative flex flex-col gap-4">
          <h3 className="text-lg font-bold text-primary/90 uppercase tracking-wide">
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
