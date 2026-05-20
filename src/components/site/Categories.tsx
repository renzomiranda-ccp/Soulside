import { ArrowUpRight } from "lucide-react";
import camisetas from "@/assets/products/nike-mini-swoosh.jpg";
import moletons from "@/assets/products/nike-outline-modelo.jpg";
import futebol from "@/assets/products/brasil-amarela.jpg";

const cats = [
  { name: "Camisetas", img: camisetas },
  { name: "Moletons & Hoodies", img: moletons },
  { name: "Camisas de Futebol", img: futebol },
];

export function Categories() {
  return (
    <section id="colecoes" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-2">Coleções</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Encontre seu estilo</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {cats.map((c) => (
          <a key={c.name} href="#produtos" className="group relative overflow-hidden rounded-2xl aspect-[4/5] block">
            <img src={c.img} alt={c.name} loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold">{c.name}</h3>
                <span className="text-sm text-muted-foreground">Explorar</span>
              </div>
              <div className="h-11 w-11 rounded-full bg-gold text-gold-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
