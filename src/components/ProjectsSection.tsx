import React from "react";
import ProjectCard from "./ProjectCard";

// Sample frontend projects
const frontendProjects = [
  {
    title: "E-commerce Dashboard",
    description:
      "Dashboard interativo com análise de dados em tempo real para gestão de loja virtual",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    // link: "#"
  },
  {
    title: "Streaming App",
    description:
      "Aplicação de streaming de vídeo com interface de usuário moderna e responsiva",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Styled Components", "Framer Motion"],
    // link: "#"
  },
  {
    title: "Portfolio de Fotografia",
    description:
      "Site de portfólio com galeria de imagens e efeitos de transição suaves",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Vite", "ReactJS", "TailWindCss", "ShadCn"],
    // link: "#"
  },
];

// Sample backend projects
const backendProjects = [
  {
    title: "API de Pagamentos",
    description:
      "API RESTful para processamento de pagamentos com integração a gateways",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe"],
    // link: "#"
  },
  {
    title: "Microservices",
    description:
      "Arquitetura de microserviços para sistema de gerenciamento de pedidos",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["NextJS", "Docker", "Stripe", "PostgreSQL", "TRPC"],
    // link: "#"
  },
  {
    title: "CMS Headless",
    description: "Sistema de gerenciamento de conteúdo com API GraphQL",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "TRPC", "Redis", "Docker"],
    // link: "#"
  },
];

const ProjectsSection = () => {
  return (
    <>
      {/* Frontend Projects Section */}
      <section
        id="frontend"
        className="section bg-gradient-to-br from-pastel-pink/10 via-white to-pastel-blue/10"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-pastel-pink/50 text-sm font-medium mb-2">
              Front-end
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Projetos Front-end
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pastel-pink to-pastel-blue mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={index} {...project} className="h-96" />
            ))}
          </div>
        </div>
      </section>

      {/* Backend Projects Section */}
      <section id="backend" className="section bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-pastel-blue/50 text-sm font-medium mb-2">
              Back-end
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Projetos Back-end
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pastel-blue to-pastel-green mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {backendProjects.map((project, index) => (
              <ProjectCard key={index} {...project} className="h-96" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
