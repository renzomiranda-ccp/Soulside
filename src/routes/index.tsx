import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Categories } from "@/components/site/Categories";
import { ProductGrid } from "@/components/site/ProductGrid";
import { VipBanner } from "@/components/site/VipBanner";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Categories />

        <section id="produtos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold mb-2">Destaques</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Peças em destaque</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <p className="text-sm text-muted-foreground max-w-sm">Peças selecionadas a dedo para quem deixa o estilo falar.</p>
              <Link
                to="/produtos"
                className="text-sm font-semibold text-gold hover:underline whitespace-nowrap"
              >
                Ver todos os produtos →
              </Link>
            </div>
          </div>
          <ProductGrid limit={3} />
        </section>

        <VipBanner />
        <About />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
