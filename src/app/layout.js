"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SWInitializer from "./components/SWInitializer";
import OfflineWrapper from "./components/OfflineWrapper";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <SWInitializer />
        <Header />
        <main>
          <OfflineWrapper>
            {children}
          </OfflineWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
