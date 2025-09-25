"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import OfflineScreen from "./components/OfflineScreen";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const online = useOnlineStatus();
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Prevent navigation when offline
  useEffect(() => {
    if (!online) {
      const handleRouteChange = (e) => {
        if (!online) {
          e.preventDefault();
          // Force re-render to show offline screen
          router.refresh();
        }
      };

      // Intercept Next.js router events
      const handleBeforeUnload = (e) => {
        if (!online) {
          // Don't prevent default for beforeunload as we want to allow reload
          // but show offline screen again after reload
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [online, router]);

  // Show nothing during initial SSR to avoid hydration mismatch
  if (!isInitialized) {
    return (
      <html lang="en">
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {online ? (
            children
          ) : (
            <OfflineScreen currentPath={pathname} />
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
