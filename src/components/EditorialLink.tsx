import Link from "next/link";
import type { ReactNode } from "react";
export default function EditorialLink({ href, children, button = false }: { href: string; children: ReactNode; button?: boolean }) {
  return <Link href={href} className={button ? "button" : "editorial-link"}>{children}<span aria-hidden="true">↗</span></Link>;
}
