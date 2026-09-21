import Image from "next/image";
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-lockup ${light ? "brand-lockup--light" : ""}`} href="#top" aria-label="RK Group home">
      <Image src="/rk-group-logo.jpg" alt="" width={64} height={48} priority />
      <span><strong>RK</strong> Group</span>
    </a>
  );
}
