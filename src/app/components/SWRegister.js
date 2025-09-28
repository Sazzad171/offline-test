// src/app/components/SWRegister.jsx
"use client";

import { useEffect } from 'react';

export default function SWRegister() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Handle online/offline events
    const handleOnline = () => {
      console.log('App is online');
      // You could show a notification or update UI
    };

    const handleOffline = () => {
      console.log('App is offline');
      // You could show a notification or update UI
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return null;
}