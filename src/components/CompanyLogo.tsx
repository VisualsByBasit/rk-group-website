import fs from "fs";
import path from "path";
import Image from "next/image";
import MonogramBadge from "./MonogramBadge";

export default function CompanyLogo({
  name,
  logo,
  size = 56,
}: {
  name: string;
  logo?: string;
  size?: number;
}) {
  const exists =
    !!logo && fs.existsSync(path.join(process.cwd(), "public", logo));

  if (!exists) {
    return <MonogramBadge name={name} size={size} />;
  }

  return (
    <Image
      src={logo as string}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-md object-contain shrink-0 bg-white/80 p-1"
    />
  );
}
