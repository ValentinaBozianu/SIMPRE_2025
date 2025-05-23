// pages/wishlist.jsx
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFlowerById } from "@/utils/recordsFunctions";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [flowersDetails, setFlowersDetails] = useState({});

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await fetch("/api/wishlist");
      const data = await response.json();
      setWishlist(data);

      // Preluăm detaliile fiecărei flori
      const details = {};
      for (const item of data) {
        const flower = await getFlowerById(item.flowerId);
        if (flower) {
          details[item.flowerId] = flower;
        }
      }
      setFlowersDetails(details);
    };
    fetchWishlist();
  }, []);

  const removeFromWishlist = async (flowerId) => {
    await fetch(`/api/wishlist?flowerId=${flowerId}`, { method: "DELETE" });
    setWishlist(wishlist.filter((item) => item.flowerId !== flowerId));
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
            {wishlist.map((item) => {
              const flower = flowersDetails[item.flowerId] || {};
              return (
                <div
                  key={item._id}
                  className="p-4 bg-white border border-green-200 rounded-lg shadow"
                >
                  <h3 className="text-lg font-semibold text-green-800">{flower.title || "Unknown Flower"}</h3>
                  <p className="text-gray-600">{flower.description || "No description"}</p>
                  <p className="text-sm text-gray-500">Price: {flower.price || "N/A"}€</p>
                  <button
                    onClick={() => removeFromWishlist(item.flowerId)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;