import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?.*/, // cache all routes
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        networkTimeoutSeconds: 5,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
  fallbacks: {
    document: "/offline.html", // fallback if no network
  },
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
