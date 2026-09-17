import { companies, sectorOrder, companiesBySector } from "@/data/companies";
import SectorSection from "@/components/SectorSection";

export default function Home() {
  const sectorCount = sectorOrder.length;
  const companyCount = companies.length;

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line-dark bg-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm text-wheat-soft">Pakistan</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
            A powerhouse of Pakistani industry, built one mill, one plant and
            one field at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
            RK Group of Industries is a diversified conglomerate spanning
            food, edible oils, chemicals, energy, manufacturing and
            infrastructure — driving Pakistan&apos;s industrial future
            through {companyCount} operating companies.
          </p>
          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <p className="font-display text-3xl font-medium text-wheat-soft">
                {companyCount}
              </p>
              <p className="text-sm text-paper/60">operating companies</p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium text-wheat-soft">
                {sectorCount}
              </p>
              <p className="text-sm text-paper/60">industry sectors</p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium text-wheat-soft">
                1
              </p>
              <p className="text-sm text-paper/60">group, nationwide reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-medium text-ink">Our companies</h2>
        <p className="mt-2 max-w-xl text-ink/70">
          Every subsidiary under RK Group of Industries, grouped by the
          sector it operates in.
        </p>
        <div className="mt-6">
          {sectorOrder.map((sector) => {
            const list = companiesBySector(sector);
            if (list.length === 0) return null;
            return <SectorSection key={sector} sector={sector} companies={list} />;
          })}
        </div>
      </section>
    </div>
  );
}
