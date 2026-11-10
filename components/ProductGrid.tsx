"use client";

import { useState } from "react";
import ShoeIcon from "./ShoeIcon";
import { categories, formatPrice, products, type Category } from "@/lib/products";

export default function ProductGrid() {
  const [active, setActive] = useState<Category | "All">("All");
  const [cart, setCart] = useState(0);

  const visible =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="shop" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-extrabold md:text-4xl">Shop the collection</h2>
        <p className="text-sm font-medium" aria-live="polite">
          Cart: {cart} {cart === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-2 text-sm font-medium ${
              active === c
                ? "border-foreground bg-foreground text-background"
                : "border-black/20 hover:bg-black/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((p) => (
          <li key={p.id} className="group rounded-3xl bg-white p-4 shadow-sm transition hover:shadow-lg">
            <div className="relative rounded-2xl bg-black/5 p-4">
              {p.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                  {p.tag}
                </span>
              )}
              <ShoeIcon
                color={p.color}
                accent={p.accent}
                className="w-full transition group-hover:-rotate-3 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-sm text-black/60">{p.category}</p>
              </div>
              <p className="font-semibold">{formatPrice(p.price)}</p>
            </div>
            <button
              onClick={() => setCart((n) => n + 1)}
              className="mt-4 w-full rounded-full bg-foreground py-2 text-sm font-semibold text-background hover:bg-accent"
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
