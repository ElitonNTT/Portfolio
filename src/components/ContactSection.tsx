import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lastSent = localStorage.getItem("lastEmailSent");
    const now = Date.now();
    const cooldown = 10 * 60 * 1000;

    if (lastSent && now - parseInt(lastSent) < cooldown) {
      const remaining = Math.ceil(
        (cooldown - (now - parseInt(lastSent))) / 1000
      );
      toast.error(
        `Por favor, aguarde ${remaining} segundos antes de tentar novamente.`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await window.grecaptcha.execute(
        "6LcExDwrAAAAAGrbF6aM0nC_LY7C0zN8eI4tytGX",
        {
          action: "submit",
        }
      );

      if (!token) {
        throw new Error("Erro ao validar reCAPTCHA.");
      }

      emailjs.init({
        publicKey: import.meta.env.VITE_PUBLIC_EMAIL_KEY,
      });

      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_EMAIL_KEY,
        import.meta.env.VITE_TEMPLATE_EMAIL_KEY,
        {
          name: formData.name,
          email: formData.email,
          time: new Date().getDate(),
          message: formData.message,
        },
        import.meta.env.VITE_SECRET_EMAIL_KEY
      );

      console.log("Email enviado:", result.text);
      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Ocorreu um erro ao enviar a mensagem.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="section bg-gradient-to-br from-pastel-green/20 via-white to-pastel-yellow/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-pastel-green/50 text-sm font-medium mb-2">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Vamos Conversar</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-green to-pastel-yellow mx-auto mt-4"></div>
          <p className="max-w-xl mx-auto mt-6 text-muted-foreground">
            Estou sempre aberto a novas oportunidades de trabalho e colaborações
            interessantes. Entre em contato comigo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="glass rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-black/90 text-white rounded-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-muted-foreground">Anápolis, GO - Brasil</p>
            </div>

            <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:seu@email.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                netinho_ntt@hotmail.com
              </a>
            </div>

            <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <a
                href="tel:+5562992638037"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +55 (62) 99263-8037
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
