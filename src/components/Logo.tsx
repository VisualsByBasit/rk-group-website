import Link from "next/link";
import Image from "next/image";

// RK Group of Industries and KK Group lockup. rk-group-logo.png stays in use for the favicon, JSON-LD and share images.
// Light backgrounds use the marks on a built-in light plate (see scripts/make-logo-plates.mjs) so they survive forced dark mode.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-lockup${light ? " brand-lockup--light" : ""}`} href="/" aria-label="RK Group of Industries and KK Group home">
      <Image src={light ? "/assets/rk-mark-light.png" : "/assets/rk-mark-plate.png"} alt="" width={light ? 693 : 727} height={light ? 338 : 400} preload={!light} />
      <span className="lockup-text"><span>Group of</span> <span>Industries</span></span>
      <Image src={light ? "/assets/kk-group-mark-light-bold.png" : "/assets/kk-group-mark-plate.png"} alt="" width={light ? 465 : 507} height={light ? 221 : 263} preload={!light} />
    </Link>
  );
}
