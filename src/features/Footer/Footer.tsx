import { ArrowUpCircle, Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center gap-10 bg-primary py-10 relative text-border w-screen">
      <div className="flex flex-col items-center gap-2 pt-50 pb-15">
        <p className="font-nova text-4xl mobile:text-6xl laptop:text-8xl">VAMOS NOS</p>
        <p className="font-nova text-5xl mobile:text-7xl laptop:text-9xl -mt-3 tablet:-mt-5">CONECTAR!</p>
        <p className=" text-center w-3/4 tablet:w-full font-title text-2xl tablet:text-3xl text-border/50 -mt-3 tablet:-mt-5">
          Adoraria transformar sua ideia em realidade
        </p>
      </div>

      <div className="absolute top-10 left-10 grid grid-cols-[auto_auto_auto] gap-2">
        <a
          href="https://www.linkedin.com/in/joaogrs/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 justify-center w-full h-full rounded-md hover:text-primary hover:bg-border transition-all duration-200 cursor-pointer border border-border"
          title="Linkedin"
        >
          <Linkedin size={25} />
        </a>

        <a
          href="https://github.com/joaogrdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 justify-center w-full h-full rounded-md hover:text-primary hover:bg-border transition-all duration-200 cursor-pointer border border-border"
          title="Github"
        >
          <Github size={25} />
        </a>

        <a
          href="https://github.com/joaogrdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 justify-center w-full h-full rounded-md hover:text-primary hover:bg-border transition-all duration-200 cursor-pointer border border-border"
          title="Github"
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
  className="absolute top-10 right-10 flex flex-col gap-1 items-center justify-center hover:scale-105 cursor-pointer transition-all duration-300 bg-transparent border-none"
>
  <ArrowUpCircle size={30} />
  <span className="font-base text-sm text-center">
    VOLTAR AO <br /> TOPO
  </span>
</button>


      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 w-9/10 font-base text-sm font-medium">
        <span>Desenvolvido por João Gabriel</span>
        <span>2025</span>
      </div>
    </section>
  );
};

export default Footer;
