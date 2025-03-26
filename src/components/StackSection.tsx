
import React from 'react';

// Skills array with categories
const skills = {
  frontend: [
    "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", 
    "HTML5", "CSS3", "Tailwind CSS", "Styled Components", "Redux",
    "React Query", "Framer Motion", "Jest", "Testing Library"
  ],
  backend: [
    "Node.js", "Express", "NestJS", "Django", "Flask", 
    "GraphQL", "REST API", "MySQL", "PostgreSQL", "MongoDB",
    "Firebase", "Supabase", "Prisma", "Sequelize"
  ],
  tools: [
    "Git", "Docker", "AWS", "Vercel", "Netlify", 
    "CI/CD", "Webpack", "Vite", "ESLint", "Figma",
    "JIRA", "Scrum", "Agile", "TDD"
  ]
};

const StackSection = () => {
  return (
    <section id="stack" className="section bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-pastel-yellow/50 text-sm font-medium mb-2">
            Minha Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Tecnologias e Ferramentas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-blue to-pastel-green mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-12 relative">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category} className="relative">
              <div className="marquee-container overflow-hidden my-6">
                <div className="flex animate-marquee" style={{ animationDirection: index % 2 === 0 ? 'normal' : 'reverse' }}>
                  {/* Double the items to ensure continuous scrolling */}
                  {[...items, ...items].map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex-shrink-0 mx-4 px-6 py-3 bg-gradient-to-br from-white to-pastel-blue/20 rounded-lg shadow-sm border border-pastel-blue/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default StackSection;
