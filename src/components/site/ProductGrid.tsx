import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { products, formatBRL, waLink, type Product } from "@/lib/products";

function Card({ p, onAdd }: { p: Product; onAdd: (p: Product) => void }) {
  const [hover, setHover] = useState(false);
  const [fav, setFav] = useState(false);
  const installment = p.price / 2;
  return (
    <div className="group">
      <div
        className="relative overflow-hidden rounded-2xl bg-card aspect-[3/4]"
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      >
        <img src={p.image} alt={p.name} loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${hover && p.hoverImage ? "opacity-0 scale-105" : "opacity-100"}`} />
        {p.hoverImage && (
          <img src={p.hoverImage} alt="" aria-hidden loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${hover ? "opacity-100 scale-105" : "opacity-0"}`} />
        )}

        {p.tag && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.tag === "Novo" ? "bg-gold text-gold-foreground" : "bg-foreground text-background"}`}>
            {p.tag}
          </span>
        )}

        <button onClick={() => setFav(!fav)} aria-label="Favoritar"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center hover:bg-background transition">
          <Heart className={`h-4 w-4 transition ${fav ? "fill-gold text-gold" : ""}`} />
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => onAdd(p)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground py-2.5 text-sm font-semibold hover:opacity-90">
            <ShoppingBag className="h-4 w-4" /> Adicionar
          </button>
        </div>
      </div>
      <div className="pt-4 px-1">
        <h3 className="text-sm font-medium leading-snug line-clamp-2 min-h-10">{p.name}</h3>
        <p className="mt-2 text-lg font-bold">{formatBRL(p.price)}</p>
        <p className="text-xs text-muted-foreground">ou 2x de {formatBRL(installment)} sem juros</p>
        <a href={waLink(`Olá! Tenho interesse no produto ${p.name}`)} target="_blank" rel="noreferrer"
          className="mt-3 inline-block text-xs font-semibold text-gold hover:underline">
          Comprar via WhatsApp →
        </a>
      </div>
    </div>
  );
}

export function ProductGrid({ onAdd }: { onAdd: (p: Product) => void }) {
  return (
    <section id="produtos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-2">Destaques</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Produtos em destaque</h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">Peças selecionadas a dedo para quem deixa o estilo falar.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => <Card key={p.id} p={p} onAdd={onAdd} />)}
      </div>
    </section>
  );
}
