import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "/workspaces/icsmai-conf.org/app/icsmai2027",
  },
};

export default function nextConfigWrapper() {
  return nextConfig;
}
