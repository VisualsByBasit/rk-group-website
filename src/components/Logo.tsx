import Link from "next/link";
import Image from "next/image";

// RK Group of Industries and KK Group lockup. rk-group-logo.png stays in use for the favicon, JSON-LD and share images.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-lockup${light ? " brand-lockup--light" : ""}`} href="/" aria-label="RK Group of Industries and KK Group home">
      <Image className="lockup-rk" src="/assets/rk-mark.png" alt="" width={693} height={338} preload={!light} />
      <span className="lockup-text">Group of Industries</span>
      <span className="lockup-kk"><Image src="/assets/kk-group-mark.png" alt="" width={454} height={211} preload={!light} /></span>
    </Link>
  );
}
