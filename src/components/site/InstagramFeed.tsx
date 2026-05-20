import { Instagram } from "lucide-react";
import { products } from "@/lib/products";

export function InstagramFeed() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-2">Instagram</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">@soulside.pf</h2>
        </div>
        <a href="https://instagram.com/soulside.pf" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-gold transition">
          <Instagram className="h-4 w-4" /> Seguir
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {products.map((p) => (
          <a key={p.id} href="https://instagram.com/soulside.pf" target="_blank" rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl">
            <img src={p.image} alt={p.name} loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
              <Instagram className="h-7 w-7 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
