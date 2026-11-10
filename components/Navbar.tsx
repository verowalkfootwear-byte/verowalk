import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Vero<span className="text-accent">walk</span>
        </Link>
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li><a href="#shop" className="hover:text-accent">Shop</a></li>
          <li><a href="#story" className="hover:text-accent">Our Story</a></li>
          <li><a href="#reviews" className="hover:text-accent">Reviews</a></li>
          <li><a href="#newsletter" className="hover:text-accent">Join</a></li>
        </ul>
        <a
          href="#shop"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:bg-accent"
        >
          Shop now
        </a>
      </nav>
    </header>
  );
}
