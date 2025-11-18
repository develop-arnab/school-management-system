/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  // Allow building even if TypeScript reports errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optional: skip ESLint errors during build (useful for CI/Amplify)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;