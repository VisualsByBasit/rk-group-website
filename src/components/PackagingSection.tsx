import Image from "next/image";
import type { PackGroup, PackImage } from "@/lib/packaging";

function Pack({ image, sizes }: { image: PackImage; sizes: string }) {
  return <figure className="pack-image"><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} />{image.caption && <figcaption>{image.caption}</figcaption>}</figure>;
}

function Sizes({ sizes }: { sizes: string[] }) {
  return <ul className="pack-sizes" aria-label="Pack sizes">{sizes.map(size => <li key={size}>{size}</li>)}</ul>;
}

export default function PackagingSection({ groups }: { groups: PackGroup[] }) {
  return (
    <section className="packaging" aria-labelledby="packaging-title">
      <div className="shell">
        <p className="eyebrow"><span /> The packs</p>
        <h2 id="packaging-title">Packaging</h2>
        {groups.map(group => group.layout === "strip"
          ? <div className="pack-strip" key={group.title}>
              <div className="pack-strip-head"><h3>{group.title}</h3><Sizes sizes={group.sizes} /></div>
              {/* On phones this row swipes sideways, so it is focusable for keyboard users. */}
              <div className="pack-strip-row" role="region" aria-label={group.title} tabIndex={0}>{group.images.map(image => <Pack image={image} sizes="(max-width: 720px) 78vw, 410px" key={image.src} />)}</div>
            </div>
          : <div className={`pack-row pack-row--${group.layout}`} key={group.title}>
              <div className={`pack-row-images pack-row-images--${group.images.length}`}>{group.images.map(image => <Pack image={image} sizes={group.images.length > 1 ? "(max-width: 900px) 46vw, 340px" : "(max-width: 900px) 100vw, 720px"} key={image.src} />)}</div>
              <div className="pack-row-text"><h3>{group.title}</h3>{group.sizes.length > 0 && <Sizes sizes={group.sizes} />}</div>
            </div>)}
      </div>
    </section>
  );
}
