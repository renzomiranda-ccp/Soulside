import pumaFront from "@/assets/products/puma-bmw-frente.jpg";
import pumaBack from "@/assets/products/puma-bmw-costas.jpg";
import nikeMini from "@/assets/products/nike-mini-swoosh.jpg";
import nikeBlazer from "@/assets/products/nike-blazer.jpg";
import nikeOutline from "@/assets/products/nike-outline-modelo.jpg";
import nikeOutlineDetail from "@/assets/products/nike-outline-detalhe.jpg";
import brasilAmarela from "@/assets/products/brasil-amarela.jpg";
import brasilAzul from "@/assets/products/brasil-azul.jpg";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  tag?: "Novo" | "Mais Vendido";
};

export const products: Product[] = [
  { id: 1, name: "Moletom Puma BMW Motorsport Off-White", price: 289.9, image: pumaFront, hoverImage: pumaBack, tag: "Mais Vendido" },
  { id: 2, name: "Camiseta Nike Mini Swoosh Off-White", price: 119.9, image: nikeMini, tag: "Novo" },
  { id: 3, name: "Camiseta Oversized Nike Blazer Off-White", price: 149.9, image: nikeBlazer },
  { id: 4, name: "Moletom Nike Outline Multicolor Preto", price: 259.9, image: nikeOutline, hoverImage: nikeOutlineDetail, tag: "Novo" },
  { id: 5, name: "Camisa Seleção Brasileira Home 2024", price: 199.9, image: brasilAmarela },
  { id: 6, name: "Camisa Seleção Brasileira Away Jordan", price: 219.9, image: brasilAzul, tag: "Mais Vendido" },
];

export const WHATSAPP = "5519988654995";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
