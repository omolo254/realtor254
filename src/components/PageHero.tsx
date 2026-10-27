export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-forest-900 text-cream">
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-cream/80">{intro}</p>}
      </div>
    </section>
  );
}
