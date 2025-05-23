import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <span className="text-white hover:text-gray-200 cursor-pointer">HOME</span>
          </Link>
          <Link href="/wishlist">
            <span className="text-white hover:text-gray-200 cursor-pointer">WISHLIST</span>
          </Link>
          <Link href="/bouquets">
            <span className="text-white hover:text-gray-200 cursor-pointer">BOUQUETS</span>
          </Link>
          <Link href="/gardens">
            <span className="text-white hover:text-gray-200 cursor-pointer">GARDENS</span>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;