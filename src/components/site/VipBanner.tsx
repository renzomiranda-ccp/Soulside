import { Crown } from "lucide-react";
import { waLink } from "@/lib/products";

export function VipBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-8 md:p-12">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
              <Crown className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold mb-1">Grupo VIP</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Acesso antecipado a lançamentos + descontos exclusivos
              </h3>
            </div>
          </div>
          <a href={waLink("Quero entrar no Grupo VIP da SoulSide")} target="_blank" rel="noreferrer"
            className="shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:opacity-90">
            Entrar no Grupo VIP
          </a>
        </div>
      </div>
    </section>
  );
}
