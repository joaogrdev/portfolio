import { Github, Linkedin } from "lucide-react";

const SocialBar = () => {
  return (
    <div className="grid grid-cols-[auto_auto_auto_auto_auto] place-items-center mt-3 border border-primary/25  rounded-sm">
      <a
        href="https://www.linkedin.com/in/joaogrs/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 justify-center w-full h-full rounded-l-md hover:bg-primary hover:text-secondary transition-all duration-200 cursor-pointer"
        title="Linkedin"
      >
        <Linkedin size={18} />
      </a>

      <div className="w-px h-3/4 bg-primary/25"></div>

      <a
        href="https://github.com/joaogrdev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 justify-center w-full h-full hover:bg-primary hover:text-secondary transition-all duration-200"
        title="Github"
      >
        <Github size={18} />
      </a>

      <div className="w-px h-3/4 bg-primary/25"></div>

      <a
        href="#"
        title="Baixar Currículo"
        className="flex items-center justify-center w-full h-full rounded-r-md font-title text-primary hover:bg-primary hover:text-secondary transition-all duration-200 px-4 pt-2 py-1 text-sm"
      >
        CURRÍCULO
      </a>
    </div>
  );
};

export default SocialBar;
