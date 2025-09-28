// next.config.mjs
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in dev
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  },
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.example\.com\/data.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "example-api-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /.*/i,
      handler: "NetworkOnly",
      options: {
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

export default withPWA({});
