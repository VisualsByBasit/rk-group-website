import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { companies, getCompany } from "@/data/companies";
import CompanyLogo from "@/components/CompanyLogo";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};
  return {
    title: `${company.name} — RK Group of Industries`,
    description: company.tagline,
  };
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return notFound();

  const existingPhotos = (company.photos ?? []).filter((p) =>
    fs.existsSync(path.join(process.cwd(), "public", p))
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/#sectors" className="text-sm text-steel hover:text-ink">
        ← All companies
      </Link>

      <div className="mt-6 flex items-start gap-5">
        <CompanyLogo name={company.name} logo={company.logo} size={72} />
        <div>
          <p className="text-sm text-wheat">{company.sector}</p>
          <h1 className="mt-1 font-display text-3xl font-medium text-ink">
            {company.name}
          </h1>
          <p className="mt-2 max-w-xl text-ink/70">{company.tagline}</p>
        </div>
      </div>

      {company.isNew && (
        <div className="mt-8 border border-line bg-white/40 px-4 py-3 text-sm text-steel">
          This is a newly added subsidiary. Real product photography and
          full details are still being collected — this page will be
          filled in as assets arrive.
        </div>
      )}

      <p className="mt-8 max-w-2xl leading-relaxed text-ink/80">
        {company.description}
      </p>

      {existingPhotos.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {existingPhotos.map((p) => (
            <Image
              key={p}
              src={p}
              alt={company.name}
              width={600}
              height={450}
              className="w-full border border-line object-cover"
            />
          ))}
        </div>
      )}

      <dl className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
        <div>
          <dt className="text-sm text-ink/50">Instagram</dt>
          <dd className="mt-1 text-ink">
            {company.instagram ? `@${company.instagram}` : "Coming soon"}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-ink/50">Phone</dt>
          <dd className="mt-1 text-ink">{company.phone ?? "Coming soon"}</dd>
        </div>
        <div>
          <dt className="text-sm text-ink/50">Email</dt>
          <dd className="mt-1 text-ink">{company.email ?? "Coming soon"}</dd>
        </div>
      </dl>
    </div>
  );
}
