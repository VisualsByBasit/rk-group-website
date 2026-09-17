import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { sectorOrder } from "@/data/companies";
import CompanyLogo from "./CompanyLogo";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line-dark bg-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-medium">{siteConfig.groupName}</p>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            A diversified conglomerate across food, energy, chemicals and
            infrastructure in Pakistan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <CompanyLogo name={siteConfig.kkGroup.name} logo={siteConfig.kkGroup.logo} size={40} />
            <div className="text-sm text-paper/70">
              <p>Sister group</p>
              <p className="text-paper">{siteConfig.kkGroup.name}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-wheat-soft">Sectors</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            {sectorOrder.map((s) => (
              <li key={s}>
                <Link href="/#sectors" className="hover:text-paper">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-wheat-soft">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li>{siteConfig.hqAddress}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line-dark px-6 py-5 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {siteConfig.groupName}. Pakistan.
      </div>
    </footer>
  );
}
