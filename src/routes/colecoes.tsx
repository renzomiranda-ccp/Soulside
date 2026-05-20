import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Categories } from "@/components/site/Categories";
import { VipBanner } from "@/components/site/VipBanner";

export const Route = createFileRoute("/colecoes")({ component: ColecoesPage });

function ColecoesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-4">
          <p className="text-xs uppercase tracking-widest text-gold mb-2">Coleções</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Encontre seu estilo</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Explore nossas categorias e descubra as peças que combinam com a sua personalidade.
          </p>
        </div>
        <Categories />
        <VipBanner />
      </main>
      <Footer />
    </div>
  );
}
