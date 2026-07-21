import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/the-signal-partners" : "",
  assetPrefix: isGitHubPages ? "/the-signal-partners/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
