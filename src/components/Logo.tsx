import Image from "next/image";
import Link from "next/link";
export default function Logo({ light = false }: { light?: boolean }) {
  return <Link className={`brand-lockup ${light ? "brand-lockup--light" : ""}`} href="/" aria-label="RK Group home">
    <Image src="/assets/rk-group-logo.png" alt="" width={72} height={54} />
    <span><strong>RK</strong> Group</span>
  </Link>;
}
