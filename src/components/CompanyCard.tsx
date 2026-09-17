import Link from "next/link";
import type { Company } from "@/data/companies";
import CompanyLogo from "./CompanyLogo";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex gap-4 border border-line bg-paper p-5 transition-colors hover:border-wheat"
    >
      <CompanyLogo name={company.name} logo={company.logo} size={48} />
      <div className="min-w-0">
        <p className="font-display text-base font-medium text-ink group-hover:text-wheat">
          {company.name}
        </p>
        <p className="mt-1 text-sm leading-snug text-ink/70">{company.tagline}</p>
        {company.isNew && (
          <span className="mt-2 inline-block text-xs text-steel">
            New addition — content in progress
          </span>
        )}
      </div>
    </Link>
  );
}
