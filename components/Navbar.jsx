import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-xl font-bold cursor-pointer">SIMPRE_2025</span>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <span className="text-white hover:text-gray-200 cursor-pointer">Home</span>
          </Link>
          <Link href="/flowers/addFlower">
            <span className="text-white hover:text-gray-200 cursor-pointer">Add Flower</span>
          </Link>
          <Link href="/wishlist">
            <span className="text-white hover:text-gray-200 cursor-pointer">Wishlist</span>
          </Link>
          <Link href="/bouquets">
            <span className="text-white hover:text-gray-200 cursor-pointer">Bouquets</span>
          </Link>
          <Link href="/trends">
            <span className="text-white hover:text-gray-200 cursor-pointer">Trends</span>
          </Link>
          <Link href="/gardens">
            <span className="text-white hover:text-gray-200 cursor-pointer">Gardens</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;