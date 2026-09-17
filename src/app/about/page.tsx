import { companies, sectorOrder } from "@/data/companies";

export const metadata = {
  title: "About — RK Group of Industries",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm text-wheat">About</p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
        Our story
      </h1>
      <p className="mt-6 leading-relaxed text-ink/80">
        RK Group of Industries is a diversified conglomerate built around a
        simple idea: that Pakistan&apos;s everyday needs — food on the table,
        flour in the kitchen, oil in the pan, power in the grid, and the
        buildings people work and live in — deserve the same discipline and
        ambition as any global industry. That idea now spans {companies.length}{" "}
        operating companies across {sectorOrder.length} sectors.
      </p>

      <h2 className="mt-12 font-display text-2xl font-medium text-ink">
        Leadership
      </h2>
      <p className="mt-4 leading-relaxed text-ink/80">
        TODO: leadership / CEO message — a short note from leadership on the
        group&apos;s direction and values goes here. Replace this paragraph
        with the real statement.
      </p>

      <h2 className="mt-12 font-display text-2xl font-medium text-ink">
        Sectors we operate in
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {sectorOrder.map((s) => (
          <li key={s} className="flex items-center gap-3 border border-line px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-wheat" aria-hidden="true" />
            <span className="text-ink">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
