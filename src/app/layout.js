"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import OfflineScreen from "./components/OfflineScreen";
import useOnlineStatus from "./hooks/useOnlineStatus";

export default function RootLayout({ children }) {
  // const [online, setOnline] = useState(true);
  const pathname = usePathname();
  const online = useOnlineStatus();

  // useEffect(() => {
  //   setOnline(navigator.onLine);

  //   const goOnline = () => setOnline(true);
  //   const goOffline = () => setOnline(false);

  //   window.addEventListener("online", goOnline);
  //   window.addEventListener("offline", goOffline);

  //   return () => {
  //     window.removeEventListener("online", goOnline);
  //     window.removeEventListener("offline", goOffline);
  //   };
  // }, []);

  return (
    <html lang="en">
      <body>
        <Header />
          {online ? (
            children
          ) : (
            <OfflineScreen currentPath={pathname} />
          )}
        <Footer />
      </body>
    </html>
  );
}
