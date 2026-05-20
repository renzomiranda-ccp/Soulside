import { createContext, useContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";
import type { CartItem } from "@/components/site/CartDrawer";
import type { Product } from "@/lib/products";

type CartContextType = {
  cart: CartItem[];
  cartOpen: boolean;
  count: number;
  addToCart: (p: Product) => void;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing)
        return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, cartOpen, count, addToCart, setCartOpen, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
