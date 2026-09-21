import Image from "next/image";
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-lockup ${light ? "brand-lockup--light" : ""}`} href="#top" aria-label="RK Group home">
      <Image src="/assets/rk-group-logo-transparent.png" alt="" width={72} height={54} priority />
      <span><strong>RK</strong> Group</span>
    </a>
  );
}
