import pumaFront from "@/assets/products/puma-bmw-frente.jpg";
import pumaBack from "@/assets/products/puma-bmw-costas.jpg";
import nikeBranca1 from "@/assets/products/camiseta-nike-branca1.jpg";
import nikeBranca2 from "@/assets/products/camiseta-nike-branca2.jpg";
import nikeMoletomPreto1 from "@/assets/products/moletom-nike1.jpg";
import nikeMoletomPreto2 from "@/assets/products/moletom-nike2.jpg";
import brasilAmarela from "@/assets/products/camisa-brasil-amarela.jpg";
import brasilJordan1 from "@/assets/products/camisa-brasil-azul1.jpg";
import brasilJordan2 from "@/assets/products/camisa-brasil-azul2.jpg";

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
  { id: 2, name: "Camiseta Nike Oversized Off-White", price: 149.9, image: nikeBranca1, hoverImage: nikeBranca2, tag: "Novo", category: "camisetas" },
  { id: 3, name: "Moletom Nike Outline Multicolor Preto", price: 259.9, image: nikeMoletomPreto1, hoverImage: nikeMoletomPreto2, tag: "Novo", category: "moletons" },
  { id: 4, name: "Camisa Seleção Brasileira Home 2024", price: 199.9, image: brasilAmarela, category: "futebol" },
  { id: 5, name: "Camisa Seleção Brasileira Away Jordan", price: 219.9, image: brasilJordan1, hoverImage: brasilJordan2, tag: "Mais Vendido", category: "futebol" },
];

export const WHATSAPP = "5519988654995";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
