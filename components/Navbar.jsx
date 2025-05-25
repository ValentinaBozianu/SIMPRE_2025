import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
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

        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-green-600 px-4 py-1 rounded hover:bg-gray-100 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
