import Image from "next/image";
import type { brands } from "@/data/site";

type Brand = (typeof brands)[number];

export default function BrandCard({ brand, featured = false }: { brand: Brand; featured?: boolean }) {
  return (
    <article className={`brand-card brand-card--${brand.accent} ${featured ? "brand-card--featured" : ""}`}>
      <div className="brand-card-copy">
        <span className="eyebrow">{brand.category}</span>
        <h3>{brand.name}</h3>
        <p>{brand.statement}</p>
      </div>
      {"image" in brand && brand.image ? (
        <div className="product-shot"><Image src={brand.image} alt={`${brand.name} product packaging`} fill sizes="(max-width: 760px) 80vw, 32vw" /></div>
      ) : (
        <div className="type-product" aria-hidden="true"><span>{brand.name.split(" ")[0]}</span><small>{brand.name.split(" ").slice(1).join(" ")}</small></div>
      )}
    </article>
  );
}
