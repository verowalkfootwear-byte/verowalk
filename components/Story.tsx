const features = [
  { title: "Featherlight", text: "Cushioned soles that keep you light on your feet all day." },
  { title: "Built to last", text: "Durable materials tested on city streets and mountain trails." },
  { title: "Sustainably made", text: "Recycled fabrics and packaging with a smaller footprint." },
];

export default function Story() {
  return (
    <section id="story" className="bg-foreground py-20 text-background">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-extrabold md:text-5xl">
          Every journey starts with a good pair of shoes.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-background/70">
          Verowalk was started with one idea: footwear should feel as good as it
          looks. We design for real people who walk, run and explore every day.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="rounded-3xl border border-white/15 p-6">
              <h3 className="text-xl font-bold text-accent">{f.title}</h3>
              <p className="mt-2 text-background/70">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
