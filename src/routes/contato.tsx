import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Clock, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { waLink } from "@/lib/products";

export const Route = createFileRoute("/contato")({ component: ContatoPage });

function ContatoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Fale com a gente</p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold">Contato</h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Estamos aqui para te atender. Entre em contato pelo WhatsApp, Instagram ou visite nossa loja em Porto Ferreira/SP.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rua José Augusto Machado, 130<br />
                    Jardim Progresso<br />
                    Porto Ferreira — SP
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/5519988654995"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    (19) 98865-4995
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Instagram className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/soulside.pf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    @soulside.pf
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>

              <a
                href={waLink("Olá! Gostaria de mais informações sobre a SoulSide.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-full bg-[#25D366] text-white py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-[480px] lg:h-auto">
              <iframe
                title="Localização SoulSide"
                src="https://maps.google.com/maps?q=Rua+Jos%C3%A9+Augusto+Machado+130+Porto+Ferreira+SP+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "480px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
