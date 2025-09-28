import Link from "next/link";

function Header() {
  return (
    <nav className="flex gap-6 mt-2 sm:mt-0 text-center">
      <Link 
        href="/" 
        className="text-white hover:text-blue-200 transition-colors duration-200"
        style={{fontSize: "20px", padding: "20px"}}
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="text-white hover:text-blue-200 transition-colors duration-200"
        style={{fontSize: "20px", padding: "20px"}}
      >
        About
      </Link>
    </nav>
  );
}

export default Header;