const reviews = [
  { name: "Aarav S.", text: "Most comfortable sneakers I have owned. Wore them all day at the airport." },
  { name: "Neha K.", text: "Aero Stride took me through my first 10K. Light and great grip." },
  { name: "Rohan M.", text: "The boots look premium and the fit is perfect right out of the box." },
];

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">Loved by walkers</h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.name} className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-accent" aria-label="5 out of 5 stars">★★★★★</p>
            <blockquote className="mt-3 text-black/80">“{r.text}”</blockquote>
            <p className="mt-4 text-sm font-semibold">{r.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
