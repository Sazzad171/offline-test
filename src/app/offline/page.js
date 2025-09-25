import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OfflinePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-red-600">🚫 You are offline</h1>
        <p className="mt-2 text-gray-600">Please check your internet connection.</p>

        <Link href="/" className="mt-4 text-blue-500 underline">
          Go Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
