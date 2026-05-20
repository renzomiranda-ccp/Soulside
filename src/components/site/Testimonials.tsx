import { Star } from "lucide-react";

const items = [
  { name: "Lucas", city: "Porto Ferreira/SP", text: "Comprei o moletom Puma BMW e chegou no mesmo dia. Qualidade absurda e atendimento dez!" },
  { name: "Gabriel", city: "São Carlos/SP", text: "A camisa do Brasil é idêntica à oficial. Recomendo demais a SoulSide pra galera." },
  { name: "Matheus", city: "Pirassununga/SP", text: "Atendimento via WhatsApp super rápido. Já é minha loja de streetwear favorita." },
  { name: "Rafael", city: "Araraquara/SP", text: "Embalagem premium e produto top. Voltarei com certeza." },
];

export function Testimonials() {
  return (
    <section className="bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Depoimentos</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">Quem veste, fala por nós</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex gap-0.5 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold">{t.name} <span className="text-muted-foreground font-normal">• {t.city}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
