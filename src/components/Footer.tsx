
import React from 'react';
import { GitHub, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const socialLinks = [
  { icon: GitHub, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "mailto:seu@email.com", label: "Email" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-6 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a 
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        
        <div className="text-white/60 text-sm">
          © {currentYear} Portfolio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
