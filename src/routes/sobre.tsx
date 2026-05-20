import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/sobre")({ component: SobrePage });

function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
