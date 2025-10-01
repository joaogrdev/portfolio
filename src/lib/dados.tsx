import printLosPollosFritos from "../assets/mock-los-pollos-fritos.png";
import printPortolioV1 from "../assets/mock-portfoliov1.png";
import printCineradar from "../assets/mock-cineradar.png";
import printTodoList from "../assets/mock-todolist.png";

export const getProjetos = () => {
  return [
    {
      id: 1,
      nome: "Los Pollos Fritos",
      link: "https://los-pollos-fritos.vercel.app",
      github: "https://github.com/joaogrdev/los-pollos-fritos",
      img: printLosPollosFritos,
      desc: "Descrição do Projeto 1",
      tecnologias: ["React", "TypeScript", "Tailwind", "Firebase"],
    },
    {
      id: 2,
      nome: "Advanced Todo List",
      link: "https://joaogrdev.github.io/advanced-todo-list/",
      github: "https://github.com/joaogrdev/advanced-todo-list",
      img: printTodoList,
      desc: "Descrição do Projeto 2",
      tecnologias: ["React", "Tailwind", "Zustand"],
    },
    {
      id: 3,
      nome: "CineRadar",
      link: "https://joaogrdev.github.io/cineradar/",
      github: "https://github.com/joaogrdev/cineradar",
      img: printCineradar,
      desc: "Descrição do Projeto 3",
      tecnologias: ["React", "API Rest"],
    },
    {
      id: 4,
      nome: "Portfólio Versão 1",
      link: "https://joaogrdev.github.io/portfolio/",
      github: "https://github.com/joaogrdev/portfolio",
      img: printPortolioV1,
      desc: "Descrição do Projeto 4",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
  ];
};

export const getTecnologias = () => {
  return [
    {
      id: 1,
      nome: "HTML e CSS",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 2,
      nome: "JavaScript",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 3,
      nome: "React",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 4,
      nome: "TypeScript",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 5,
      nome: "Next.js",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 6,
      nome: "Tailwind CSS",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 6,
      nome: "Bootstrap",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 6,
      nome: "Shadcn UI",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 7,
      nome: "Zustand",
      icon: "",
      tipo: "frontend",
    },
    {
      id: 8,
      nome: "PHP",
      icon: "",
      tipo: "backend",
    },
    {
      id: 8,
      nome: "Node.js",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 9,
      nome: "Express",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 10,
      nome: "MySQL",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 10,
      nome: "PostgreSQL",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 10,
      nome: "MongoDB",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 7,
      nome: "Firebase",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 7,
      nome: "API Rest",
      icon: "backend",
      tipo: "backend",
    },
    {
      id: 7,
      nome: "Git",
      icon: "ferramentas",
      tipo: "ferramentas",
    },
    {
      id: 7,
      nome: "Figma",
      icon: "ferramentas",
      tipo: "ferramentas",
    },
    {
      id: 7,
      nome: "Deploy",
      icon: "ferramentas",
      tipo: "ferramentas",
    },
  ];
};
