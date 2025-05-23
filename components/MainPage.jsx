// components/MainPage.jsx
import { useState, useEffect } from "react";

const MainPage = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await fetch("/api/records");
        const data = await response.json();
        setFlowers(data);
      } catch (error) {
        console.error("Error fetching flowers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFlowers();
  }, []);

  const addToWishlist = async (flower) => {
    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flowerId: flower._id }),
      });
      if (response.ok) {
        alert(`${flower.title} added to wishlist!`);
      } else {
        const errorData = await response.json();
        alert(`Failed to add to wishlist: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      alert("Error adding to wishlist. Check console for details.");
    }
  };

  if (loading) {
    return <div className="text-center">Loading flowers...</div>;
  }

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-green-700">Explore Flowers for SIMPRE_2025</h2>
      {flowers.length === 0 ? (
        <p className="text-center text-gray-600">No flowers available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flowers.map((flower) => (
            <div
              key={flower._id}
              className="p-4 border border-green-200 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-green-800">{flower.title}</h3>
              <p className="text-gray-600">{flower.description}</p>
              <p className="text-sm text-gray-500">Price: {flower.price || "N/A"}€</p>
              <p className="text-sm text-gray-500">Care Tips: {flower.careTips || "N/A"}</p>
              <button
                onClick={() => addToWishlist(flower)}
                className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 text-center">
        <a href="/flowers/addFlower" className="text-green-600 hover:underline">
          Add a new flower
        </a>
      </div>
    </div>
  );
};

export default MainPage;