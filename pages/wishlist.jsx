import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Simulăm un wishlist stocat local pentru moment
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Your SIMPRE_2025 Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">No flowers in your wishlist yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((flower) => (
              <div
                key={flower._id}
                className="p-4 bg-white border border-green-200 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-green-800">{flower.name}</h3>
                <p className="text-gray-600">{flower.description}</p>
                <p className="text-sm text-gray-500">Price: {flower.price}€</p>
                <button
                  onClick={() => removeFromWishlist(flower._id)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;