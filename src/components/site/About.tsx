import about from "@/assets/products/nike-outline-modelo.jpg";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-3">Sobre a SoulSide</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
            Nascida em Porto Ferreira. Feita para quem tem <span className="italic text-gold">atitude.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A SoulSide é uma marca de moda masculina urbana com o propósito de oferecer peças que
            expressam personalidade. Cada moletom, camiseta e camisa é selecionada para quem entende
            que estilo é uma forma de falar sem dizer uma palavra.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Atendimento próximo, curadoria afiada e entrega rápida. Tudo direto da nossa loja
            em Porto Ferreira/SP para o seu guarda-roupa.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div><p className="font-display text-3xl font-bold text-gold">+500</p><p className="text-muted-foreground">Clientes felizes</p></div>
            <div><p className="font-display text-3xl font-bold text-gold">24h</p><p className="text-muted-foreground">Entrega local</p></div>
            <div><p className="font-display text-3xl font-bold text-gold">100%</p><p className="text-muted-foreground">Originalidade</p></div>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <img src={about} alt="SoulSide" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
