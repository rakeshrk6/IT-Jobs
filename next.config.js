/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js\.map$/,
      use: "null-loader",
    })

    return config
  },
  reactStrictMode: false,
}

module.exports = nextConfig
