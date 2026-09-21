import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RK Group",
    short_name: "RK Group",
    description: "A diversified Pakistani group spanning food, manufacturing, energy and infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#0b0c0b",
    icons: [{ src: "/rk-group-logo.jpg", sizes: "1280x1024", type: "image/jpeg" }],
  };
}
