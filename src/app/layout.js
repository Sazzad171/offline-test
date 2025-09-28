"use client"

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);

    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);
  
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 120px)' }}>
          {!online ? (
            <h2>You are in offline! Please check your internet connection.</h2>
          ) : (
            children
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}