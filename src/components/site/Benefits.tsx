import { Truck, CreditCard, Package, MessageCircle } from "lucide-react";

const items = [
  { icon: Truck, title: "Envio em 24h", desc: "Em Porto Ferreira" },
  { icon: CreditCard, title: "2x Sem Juros", desc: "No cartão de crédito" },
  { icon: Package, title: "Embalagem Premium", desc: "Cuidado em cada peça" },
  { icon: MessageCircle, title: "Atendimento WhatsApp", desc: "Direto com a loja" },
];

export function Benefits() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{it.title}</p>
              <p className="text-xs text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
