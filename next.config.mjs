/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "txhogkrukvjkuasjkypo.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;