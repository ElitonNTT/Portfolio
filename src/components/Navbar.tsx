import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24",
        scrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-display font-bold tracking-tight"
        >
          NETTO
        </a>

        <div className="hidden md:flex space-x-8">
          {["Sobre", "Stack", "Front-end", "Back-end", "Contato"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace("-", "")}`}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
