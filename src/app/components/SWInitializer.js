// src/app/components/SWInitializer.jsx
"use client";

import { useEffect } from 'react';

export default function SWInitializer() {
  useEffect(() => {
    // Client-side only service worker registration
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully');
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  return null;
}