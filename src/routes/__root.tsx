import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { CartProvider, useCart } from "@/lib/cart-context";
import { CartDrawer } from "@/components/site/CartDrawer";
import { WhatsappFab } from "@/components/site/WhatsappFab";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Página não encontrada.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-gold px-4 py-2 text-sm font-medium text-gold-foreground">Voltar ao início</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded-md bg-gold px-4 py-2 text-sm font-medium text-gold-foreground">Tentar novamente</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SoulSide | Moda Masculina" },
      { name: "description", content: "Moda masculina urbana e streetwear em Porto Ferreira/SP. Envio em 24h, 2x sem juros e atendimento direto via WhatsApp." },
      { property: "og:title", content: "SoulSide | Moda Masculina" },
      { property: "og:description", content: "Deixe seu Estilo Falar pela Sua Alma." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Bricolage+Grotesque:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function GlobalCartDrawer() {
  const { cart, cartOpen, setCartOpen, setCart } = useCart();
  return (
    <CartDrawer
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      items={cart}
      setItems={setCart}
    />
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
        <GlobalCartDrawer />
        <WhatsappFab />
      </CartProvider>
    </QueryClientProvider>
  );
}
