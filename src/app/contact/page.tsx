import { siteConfig } from "@/data/siteConfig";
import { companies } from "@/data/companies";

export const metadata = {
  title: "Contact — RK Group of Industries",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm text-wheat">Contact</p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-6 leading-relaxed text-ink/80">
        For general enquiries, reach the RK Group of Industries head office
        directly. For a specific subsidiary, visit that company&apos;s page
        for its own contact details.
      </p>

      <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
        <div>
          <p className="text-sm text-ink/50">Head office</p>
          <p className="mt-1 text-ink">{siteConfig.hqAddress}</p>
        </div>
        <div>
          <p className="text-sm text-ink/50">Phone</p>
          <p className="mt-1 text-ink">{siteConfig.phone}</p>
        </div>
        <div>
          <p className="text-sm text-ink/50">WhatsApp</p>
          <p className="mt-1 text-ink">{siteConfig.whatsapp}</p>
        </div>
        <div>
          <p className="text-sm text-ink/50">Email</p>
          <p className="mt-1 text-ink">{siteConfig.email}</p>
        </div>
      </div>

      {siteConfig.mapEmbedUrl ? (
        <iframe
          src={siteConfig.mapEmbedUrl}
          className="mt-10 h-72 w-full border border-line"
          loading="lazy"
        />
      ) : (
        <div className="mt-10 border border-line px-4 py-3 text-sm text-steel">
          Map embed pending — add the HQ&apos;s Google Maps embed URL to
          siteConfig.mapEmbedUrl once available.
        </div>
      )}

      <h2 className="mt-12 font-display text-xl font-medium text-ink">
        Subsidiary contacts
      </h2>
      <ul className="mt-4 divide-y divide-line border border-line">
        {companies.map((c) => (
          <li key={c.slug} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
            <span className="text-ink">{c.name}</span>
            <span className="text-sm text-ink/60">
              {c.phone ?? c.email ?? (c.instagram ? `@${c.instagram}` : "Details coming soon")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
