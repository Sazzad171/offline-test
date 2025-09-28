// next.config.js
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // Use our custom service worker
  sw: 'sw.js',
  // Don't generate automatic offline page
  runtimeCaching: []
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Generate static pages for better offline support
  trailingSlash: true,
};

export default withPWA(nextConfig);