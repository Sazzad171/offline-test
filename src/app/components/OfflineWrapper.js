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
  const [showOffline, setShowOffline] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle offline state without sessionStorage
  useEffect(() => {
    if (isClient) {
      if (!online) {
        setShowOffline(true);
      } else {
        setShowOffline(false);
      }
    }
  }, [online, isClient]);

  // Don't render during SSR
  if (!isClient) {
    return <main className="main-content"><div>Loading...</div></main>;
  }

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