import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { CartDrawer, type CartItem } from "@/components/site/CartDrawer";
import type { Product } from "@/lib/products";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) return prev.map((i) => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
    setOpen(true);
  };

  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header cartCount={count} onOpenCart={() => setOpen(true)} />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <ProductGrid onAdd={addToCart} />
        <VipBanner />
        <About />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsappFab />
      <CartDrawer open={open} onClose={() => setOpen(false)} items={cart} setItems={setCart} />
    </div>
  );
}
