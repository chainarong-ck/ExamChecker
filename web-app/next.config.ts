import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    output: "standalone",
    experimental: {
        serverActions: {
            bodySizeLimit: "10mb",
        },
    }
};

export default nextConfig;
