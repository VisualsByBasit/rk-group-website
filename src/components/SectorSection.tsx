import type { Company, Sector } from "@/data/companies";
import CompanyCard from "./CompanyCard";

export default function SectorSection({
  sector,
  companies,
}: {
  sector: Sector;
  companies: Company[];
}) {
  return (
    <section className="border-t border-line py-12 first:border-t-0">
      <div className="flex items-baseline gap-4">
        <span className="h-6 w-1 bg-wheat" aria-hidden="true" />
        <h2 className="font-display text-2xl font-medium text-ink">{sector}</h2>
        <span className="text-sm text-ink/50">
          {companies.length} {companies.length === 1 ? "company" : "companies"}
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((c) => (
          <CompanyCard key={c.slug} company={c} />
        ))}
      </div>
    </section>
  );
}
