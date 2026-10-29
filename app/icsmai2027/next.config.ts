import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Chemin relatif au projet : fonctionne dans Codespaces, en local et sur Vercel
    root: path.join(__dirname),
  },
};

export default function nextConfigWrapper() {
  return nextConfig;
}
