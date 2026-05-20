import pumaFront from "@/assets/products/puma-bmw-frente.jpg";
import pumaBack from "@/assets/products/puma-bmw-costas.jpg";
import nikeMini from "@/assets/products/nike-mini-swoosh.jpg";
import nikeBlazer from "@/assets/products/nike-blazer.jpg";
import nikeOutline from "@/assets/products/nike-outline-modelo.jpg";
import nikeOutlineDetail from "@/assets/products/nike-outline-detalhe.jpg";
import brasilAmarela from "@/assets/products/brasil-amarela.jpg";
import brasilAzul from "@/assets/products/brasil-azul.jpg";

export type ProductCategory = "camisetas" | "moletons" | "futebol";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  tag?: "Novo" | "Mais Vendido";
  category: ProductCategory;
};

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  camisetas: "Camisetas",
  moletons: "Moletons & Hoodies",
  futebol: "Camisas de Futebol",
};

export const products: Product[] = [
  { id: 1, name: "Moletom Puma BMW Motorsport Off-White", price: 289.9, image: pumaFront, hoverImage: pumaBack, tag: "Mais Vendido", category: "moletons" },
  { id: 2, name: "Camiseta Nike Mini Swoosh Off-White", price: 119.9, image: nikeMini, tag: "Novo", category: "camisetas" },
  { id: 3, name: "Camiseta Oversized Nike Blazer Off-White", price: 149.9, image: nikeBlazer, category: "camisetas" },
  { id: 4, name: "Moletom Nike Outline Multicolor Preto", price: 259.9, image: nikeOutline, hoverImage: nikeOutlineDetail, tag: "Novo", category: "moletons" },
  { id: 5, name: "Camisa Seleção Brasileira Home 2024", price: 199.9, image: brasilAmarela, category: "futebol" },
  { id: 6, name: "Camisa Seleção Brasileira Away Jordan", price: 219.9, image: brasilAzul, tag: "Mais Vendido", category: "futebol" },
];

export const WHATSAPP = "5519988654995";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
