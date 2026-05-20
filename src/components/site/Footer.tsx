import { MapPin, Phone, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-soulside.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SoulSide" className="h-10 w-10 rounded-full bg-white object-cover" />
              <span className="font-display text-xl font-bold">SoulSide</span>
            </div>
            <p className="text-sm text-muted-foreground italic">"Deixe seu Estilo Falar pela Sua Alma."</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Loja</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-gold">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-gold">Produtos</Link></li>
              <li><Link to="/colecoes" className="hover:text-gold">Coleções</Link></li>
              <li><Link to="/produtos" className="hover:text-gold">Promoções</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Atendimento</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://wa.me/5519988654995" className="hover:text-gold">WhatsApp</a></li>
              <li><a href="#" className="hover:text-gold">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-gold">Frete e Entrega</a></li>
              <li><a href="#" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Rua José Augusto Machado, 130 — Jardim Progresso, Porto Ferreira/SP</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href="https://wa.me/5519988654995" className="hover:text-gold">(19) 98865-4995</a></li>
              <li className="flex gap-2"><Instagram className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href="https://instagram.com/soulside.pf" className="hover:text-gold">@soulside.pf</a></li>
            </ul>
            <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="seu@email.com"
                className="flex-1 rounded-full bg-background border border-border px-4 py-2 text-sm focus:outline-none focus:border-gold" />
              <button className="rounded-full bg-gold text-gold-foreground px-4 py-2 text-sm font-semibold">Inscrever</button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 SoulSide. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {["Visa", "Master", "Pix", "Boleto"].map((m) => (
              <span key={m} className="px-2.5 py-1 rounded border border-border bg-background">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
