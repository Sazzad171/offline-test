import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // Add runtime caching for better offline support
  runtimeCaching: [
    {
      urlPattern: /\/api\/health/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'health-check',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 3600, // 1 hour
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);