// src/app/components/OfflineWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import OfflineScreen from "./OfflineScreen";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useState, useEffect } from "react";

export default function OfflineWrapper({ children }) {
  const pathname = usePathname();
  const online = useOnlineStatus();
  const [isClient, setIsClient] = useState(false);
  const [isServiceWorkerReady, setIsServiceWorkerReady] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if service worker is ready
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      setIsServiceWorkerReady(true);
    }

    // Listen for service worker controller changes
    const handleControllerChange = () => {
      setIsServiceWorkerReady(!!navigator.serviceWorker.controller);
    };

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  // Don't render during SSR
  if (!isClient) {
    return <main className="main-content"><div>Loading...</div></main>;
  }

  // If we're offline and service worker is ready, show offline screen
  // If service worker isn't ready yet, browser might show its own error page
  const showOffline = !online;

  return (
    <main className="main-content">
      {showOffline ? (
        <OfflineScreen currentPath={pathname} isOnline={online} />
      ) : (
        children
      )}
    </main>
  );
}