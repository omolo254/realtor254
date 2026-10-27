import { steps } from "@/data/content";

export default function Steps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className={`grid gap-5 ${detailed ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
          <span className="font-serif text-4xl font-semibold text-gold-500">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-xl font-semibold text-forest-950">{s.title}</h3>
          <p className="mt-2 text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
