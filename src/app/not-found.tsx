import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-forest-950">We couldn&apos;t find that page</h1>
      <Link href="/" className="mt-8 inline-block rounded-full bg-forest-800 px-6 py-3 font-medium text-cream">
        Back to home
      </Link>
    </section>
  );
}
