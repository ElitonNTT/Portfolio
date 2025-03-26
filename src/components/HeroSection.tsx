
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="sobre" className="section relative overflow-hidden bg-gradient-to-br from-pastel-blue/20 via-white to-pastel-green/20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block px-3 py-1 rounded-full bg-pastel-blue/30 text-sm font-medium mb-2">
            Desenvolvedor Fullstack
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transformando ideias em experiências digitais
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Sou um desenvolvedor fullstack apaixonado por criar soluções web inovadoras e com excelente experiência de usuário.
          </p>
          <div className="pt-4">
            <a 
              href="#stack" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-all"
            >
              Explorar Stack
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[110%] h-[110%] bg-pastel-peach/50 rounded-full animate-blob blur-xl opacity-70"></div>
          <div className="absolute w-[110%] h-[110%] bg-pastel-blue/50 rounded-full animate-blob blur-xl opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[110%] h-[110%] bg-pastel-green/50 rounded-full animate-blob blur-xl opacity-70" style={{ animationDelay: '4s' }}></div>
          
          <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden animate-float">
            <div className="w-full h-full animate-blob bg-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <a href="#stack" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
