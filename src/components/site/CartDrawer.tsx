import { X, Minus, Plus, Trash2 } from "lucide-react";
import { formatBRL, waLink, type Product } from "@/lib/products";

export type CartItem = Product & { qty: number };

export function CartDrawer({
  open, onClose, items, setItems,
}: {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  setItems: (fn: (prev: CartItem[]) => CartItem[]) => void;
}) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const updateQty = (id: number, delta: number) =>
    setItems((prev) => prev.flatMap((i) => i.id === id ? (i.qty + delta <= 0 ? [] : [{ ...i, qty: i.qty + delta }]) : [i]));
  const remove = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  const waMessage = items.length
    ? `Olá! Quero comprar:\n${items.map((i) => `• ${i.name} (x${i.qty}) — ${formatBRL(i.price * i.qty)}`).join("\n")}\n\nTotal: ${formatBRL(total)}`
    : "Olá! Quero comprar na SoulSide";

  return (
    <>
      <div onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
      <aside className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-display text-xl font-bold">Seu Carrinho</h3>
          <button onClick={onClose} aria-label="Fechar" className="p-2 rounded-full hover:bg-secondary"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 h-[calc(100vh-220px)]">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-12">Seu carrinho está vazio.</p>
          )}
          {items.map((i) => (
            <div key={i.id} className="flex gap-3 p-3 rounded-xl bg-card">
              <img src={i.image} alt={i.name} className="h-20 w-16 object-cover rounded-lg" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium line-clamp-2">{i.name}</p>
                <p className="text-sm font-bold mt-1">{formatBRL(i.price)}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 border border-border rounded-full">
                    <button onClick={() => updateQty(i.id, -1)} className="p-1.5"><Minus className="h-3 w-3" /></button>
                    <span className="text-xs px-1 w-6 text-center">{i.qty}</span>
                    <button onClick={() => updateQty(i.id, 1)} className="p-1.5"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(i.id)} aria-label="Remover" className="p-1.5 text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="font-display text-xl font-bold">{formatBRL(total)}</span>
          </div>
          <a href={waLink(waMessage)} target="_blank" rel="noreferrer"
            className="block text-center w-full rounded-full bg-gold text-gold-foreground py-3 text-sm font-semibold hover:opacity-90">
            Finalizar pelo WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
