import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-lockup ${light ? "brand-lockup--light" : ""}`} href="/" aria-label="RK Group home">
      <Image src="/rk-group-logo.jpg" alt="" width={56} height={44} priority />
      <span><strong>RK</strong> Group</span>
    </Link>
  );
}
