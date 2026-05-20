import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCart } from "@/lib/cart-context";
import logo from "@/assets/logo-soulside.jpg";

const NAV = [
  { label: "Início", to: "/" as const },
  { label: "Produtos", to: "/produtos" as const },
  { label: "Coleções", to: "/colecoes" as const },
  { label: "Sobre", to: "/sobre" as const },
  { label: "Contato", to: "/contato" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setCartOpen } = useCart();
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SoulSide" className="h-9 w-9 rounded-full object-cover bg-white" />
            <span className="font-display text-lg font-bold tracking-tight">SoulSide</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => {
              const isActive = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm transition-colors ${
                    isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Buscar" className="hidden sm:inline-flex p-2 rounded-full hover:bg-secondary transition">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Carrinho" onClick={() => setCartOpen(true)} className="relative p-2 rounded-full hover:bg-secondary transition">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-gold text-gold-foreground text-[10px] font-bold flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border text-sm hover:border-gold transition">
              <User className="h-4 w-4" /> Entrar
            </button>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-full hover:bg-secondary">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-secondary text-sm"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
