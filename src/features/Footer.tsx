import { ArrowUpCircle, Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return (
    <section
      id="contact"
      className="flex flex-col w-screen py-10 text-border bg-primary items-center justify-center gap-10 relative"
    >
      <div className="flex flex-col pt-50 pb-15 items-center gap-2">
        <p className="font-super text-4xl mobile:text-6xl laptop:text-8xl">
          VAMOS NOS
        </p>
        <p className="font-super text-5xl mobile:text-7xl laptop:text-9xl -mt-3 tablet:-mt-5">
          CONECTAR!
        </p>
        <p className="w-3/4 text-center font-title  text-border/50 mobile:w-full text-lg tablet:text-2xl laptop:text-3xl -mt-1 leading-none">
          Adoraria transformar sua ideia em realidade
        </p>
      </div>

      <div className="grid grid-cols-[auto_auto_auto] absolute top-10 left-10 gap-2">
        <a
          href="https://www.linkedin.com/in/joaogrs/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          className="flex w-full h-full p-2 rounded-md border border-border transition-all cursor-pointer items-center justify-center hover:text-primary hover:bg-border duration-200"
        >
          <Linkedin size={25} />
        </a>

        <a
          href="https://github.com/joaogrdev"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="flex w-full h-full p-2 rounded-md border border-border transition-all cursor-pointer items-center justify-center hover:text-primary hover:bg-border duration-200"
        >
          <Github size={25} />
        </a>

        <a
          href="mailto:joaogabrielrsousa@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="E-mail"
          className="flex w-full h-full p-2 rounded-md border border-border transition-all cursor-pointer items-center justify-center hover:text-primary hover:bg-border duration-200"
        >
          <Mail size={25} />
        </a>
      </div>

      <button
        onClick={() => {
          const target = document.getElementById("home");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="flex flex-col bg-transparent border-none cursor-pointer transition-all absolute top-10 right-10 gap-1 items-center justify-center hover:scale-105 duration-300"
      >
        <ArrowUpCircle size={30} />
        <span className="font-base text-sm text-center">
          VOLTAR AO <br /> TOPO
        </span>
      </button>

      <div className="flex flex-wrap w-9/10 pt-3 font-base text-sm font-medium border-t border-border items-center justify-between gap-2">
        <span>Desenvolvido por João Gabriel</span>
        <span>2025</span>
      </div>
    </section>
  );
};

export default Footer;
