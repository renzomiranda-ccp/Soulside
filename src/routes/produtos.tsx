import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductGrid } from "@/components/site/ProductGrid";
import { type ProductCategory, CATEGORY_LABELS } from "@/lib/products";

export const Route = createFileRoute("/produtos")({
  validateSearch: (search: Record<string, unknown>): { categoria?: ProductCategory } => {
    const cat = search.categoria;
    if (cat === "camisetas" || cat === "moletons" || cat === "futebol") {
      return { categoria: cat };
    }
    return {};
  },
  component: ProdutosPage,
});

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as ProductCategory[];

function ProdutosPage() {
  const { categoria: initialCategoria } = Route.useSearch();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    initialCategoria ?? null
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Catálogo</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold">Todos os Produtos</h1>
            <p className="mt-2 text-muted-foreground">
              {activeCategory
                ? `Exibindo: ${CATEGORY_LABELS[activeCategory]}`
                : "Toda a nossa coleção em um só lugar."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-gold text-gold-foreground"
                  : "border border-border hover:border-gold text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-gold text-gold-foreground"
                    : "border border-border hover:border-gold text-muted-foreground hover:text-foreground"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          <ProductGrid filterCategory={activeCategory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
