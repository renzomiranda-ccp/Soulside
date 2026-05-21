import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-modelo-puma-bmw.jpg";
import { waLink } from "@/lib/products";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img src={hero} alt="Modelo SoulSide" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[100svh] flex items-center">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs text-gold mb-6 animate-fade-in"
          >
            <Sparkles className="h-3.5 w-3.5" /> Nova Coleção Disponível
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-in [animation-delay:100ms]"
          >
            Deixe seu Estilo<br /> Falar pela <span className="text-gold italic">Sua Alma.</span>
          </h1>

          <p
            className="mt-6 text-lg text-muted-foreground max-w-lg animate-fade-in [animation-delay:250ms]"
          >
            Moda masculina autêntica direto de Porto Ferreira. Envio em 24h. 2x sem juros.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-in [animation-delay:400ms]"
          >
            <a href={waLink("Olá! Quero comprar na SoulSide")} target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:opacity-90 transition">
              Comprar Agora <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#produtos"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition">
              Ver Coleção
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-xs text-muted-foreground tracking-widest uppercase">
        Scroll
      </div>
    </section>
  );
}
