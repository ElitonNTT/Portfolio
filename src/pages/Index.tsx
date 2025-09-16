import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type RGB = [number, number, number];

function interpolateColor(c1: RGB, c2: RGB, factor: number): RGB {
  return c1.map((c, i) => Math.round(c + factor * (c2[i] - c))) as RGB;
}

function rgbToCss(rgb: RGB): string {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

const colorStops: { hour: number; color: RGB }[] = [
  { hour: 0, color: [10, 10, 35] }, // Meia-noite (azul quase preto)
  { hour: 5, color: [72, 61, 139] }, // Madrugada (azul roxo)
  { hour: 6, color: [135, 206, 235] }, // Amanhecer (azul claro)
  { hour: 12, color: [135, 206, 250] }, // Meio-dia (azul vivo)
  { hour: 17, color: [250, 214, 165] }, // Tarde (dourado)
  { hour: 19, color: [255, 140, 0] }, // Entardecer (laranja)
  { hour: 21, color: [25, 25, 112] }, // Noite (azul marinho)
  { hour: 24, color: [10, 10, 35] }, // Volta à meia-noite
];

const Index = () => {
  const [gradient, setGradient] = useState(
    "linear-gradient(to bottom, #000, #111)"
  );

  useEffect(() => {
    const updateBackground = () => {
      const now = new Date();
      const hour =
        now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;

      // Achar o intervalo atual
      let start = colorStops[0];
      let end = colorStops[colorStops.length - 1];

      for (let i = 0; i < colorStops.length - 1; i++) {
        if (hour >= colorStops[i].hour && hour < colorStops[i + 1].hour) {
          start = colorStops[i];
          end = colorStops[i + 1];
          break;
        }
      }

      // Calcular fator de interpolação (0 → 1)
      const factor = (hour - start.hour) / (end.hour - start.hour);

      // Interpolar duas cores para criar um gradiente
      const topColor = interpolateColor(start.color, end.color, factor);
      const bottomColor = interpolateColor(
        start.color,
        end.color,
        Math.min(factor + 0.2, 1)
      );

      setGradient(
        `linear-gradient(to bottom, ${rgbToCss(topColor)}, ${rgbToCss(
          bottomColor
        )})`
      );
    };

    updateBackground();
    const interval = setInterval(updateBackground, 1000); // atualiza a cada segundo
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);

        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-hidden transition-colors duration-1000"
      style={{ background: gradient }}
    >
      <Navbar />

      <main>
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="5562992638037" />
    </div>
  );
};

export default Index;
