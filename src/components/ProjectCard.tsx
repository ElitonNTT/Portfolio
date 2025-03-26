
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  link, 
  className 
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 opacity-60 transition-opacity group-hover:opacity-80 z-10"></div>
      
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-medium transform -translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            Ver Projeto
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
