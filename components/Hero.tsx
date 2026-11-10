import ShoeIcon from "./ShoeIcon";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          New season 2026
        </p>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Walk true.
          <br />
          Walk comfortable.
        </h1>
        <p className="mt-6 max-w-md text-lg text-black/70">
          Footwear designed for every step of your day. Lightweight, durable and
          made to look good anywhere you go.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#shop"
            className="rounded-full bg-accent px-7 py-3 font-semibold text-white hover:opacity-90"
          >
            Explore collection
          </a>
          <a
            href="#story"
            className="rounded-full border border-black/20 px-7 py-3 font-semibold hover:bg-black/5"
          >
            Our story
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center rounded-[3rem] bg-gradient-to-br from-orange-200 to-rose-200 p-10">
        <ShoeIcon
          color="#e4572e"
          accent="#1a1a1a"
          className="w-full -rotate-6 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
