// src/app/components/SWInitializer.jsx
"use client";

import { useEffect } from 'react';

export default function SWInitializer() {
  useEffect(() => {
    const registerSW = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);

          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('New service worker found:', newWorker);
          });

          // Check if the page is controlled by a service worker
          if (navigator.serviceWorker.controller) {
            console.log('Page is controlled by service worker');
          }

        } catch (error) {
          console.log('SW registration failed: ', error);
        }
      }
    };

    // Handle offline page reloads
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Page was restored from cache (back/forward navigation)
        console.log('Page restored from cache');
      }
    };

    // Check if we're offline on initial load
    if (!navigator.onLine) {
      console.log('Initial load: offline');
    }

    registerSW();
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return null;
}