"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section id="newsletter" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-[2.5rem] bg-accent p-10 text-center text-white md:p-16">
        <h2 className="text-3xl font-extrabold md:text-4xl">Get 10% off your first pair</h2>
        <p className="mx-auto mt-3 max-w-md text-white/90">
          Join the Verowalk list for early drops and member-only offers.
        </p>
        {done ? (
          <p className="mt-8 font-semibold" role="status">
            Thanks for joining! Check your inbox soon.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full px-5 py-3 text-black outline-none focus:ring-2 focus:ring-foreground"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3 font-semibold hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
