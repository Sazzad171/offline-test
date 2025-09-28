// src/app/layout.js
// import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SWRegister from "./components/SWRegister";

export const metadata = {
  title: "NextJS Offline Demo",
  description: "Offline functionality test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SWRegister />
        <Header />
        <main style={{ minHeight: 'calc(100vh - 120px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}