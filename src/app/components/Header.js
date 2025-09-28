"use client";

import Link from "next/link";

function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white text-center">
      <nav className="flex gap-4 justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;