import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["ts", "tsx", "mdx"],
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "github-readme-stats.vercel.app" },
      { hostname: "opengraph.githubassets.com" },
    ],
  },
};

export default withMDX(nextConfig);
