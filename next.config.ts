import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/src/index.html", destination: "/", permanent: true },
      { source: "/src/chapter-38-zh.html", destination: "/zh/chapters/38", permanent: true },
      { source: "/src/chapter-38-en.html", destination: "/en/chapters/38", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
