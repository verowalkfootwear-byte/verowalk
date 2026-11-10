export type Category = "Sneakers" | "Running" | "Sandals" | "Boots";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  color: string;
  accent: string;
  tag?: string;
};

export const categories: Category[] = ["Sneakers", "Running", "Sandals", "Boots"];

export const products: Product[] = [
  { id: "1", name: "Aero Stride", category: "Running", price: 3499, color: "#e4572e", accent: "#1a1a1a", tag: "New" },
  { id: "2", name: "Urban Classic", category: "Sneakers", price: 2799, color: "#2a6f97", accent: "#ffffff", tag: "Bestseller" },
  { id: "3", name: "Trail Ridge", category: "Boots", price: 4299, color: "#6b4f3a", accent: "#d9c5a0" },
  { id: "4", name: "Breeze Slide", category: "Sandals", price: 1299, color: "#76b947", accent: "#1a1a1a", tag: "New" },
  { id: "5", name: "Pulse Runner", category: "Running", price: 3899, color: "#7b2cbf", accent: "#f5f5f5" },
  { id: "6", name: "Cloud Low", category: "Sneakers", price: 2499, color: "#f4d35e", accent: "#1a1a1a" },
  { id: "7", name: "Summit Chelsea", category: "Boots", price: 4799, color: "#2b2b2b", accent: "#c9a227", tag: "Limited" },
  { id: "8", name: "Sand Walker", category: "Sandals", price: 1599, color: "#d98e73", accent: "#ffffff" },
];

export const formatPrice = (n: number) => `₹${n.toLocaleString("en-IN")}`;
