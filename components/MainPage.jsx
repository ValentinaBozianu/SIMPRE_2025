// components/MainPage.jsx
import { useState, useEffect } from "react";
import styles from "@/styles/FlowerStyles.module.css";

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
    return (
      <div className={styles.loading}>
        <p className="text-lg text-gray-600">Loading flowers...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Flowers for SIMPRE_2025</h2>
      {flowers.length === 0 ? (
        <p className="text-center text-gray-600">No flowers available.</p>
      ) : (
        <div className={styles.gridContainer}>
          {flowers.map((flower) => (
            <div key={flower._id} className={styles.card}>
              <h3 className={styles.cardTitle}>{flower.title}</h3>
              <p className={styles.textSecondary}>{flower.description}</p>
              <p className={styles.textMuted}>Price: {flower.price || "N/A"}€</p>
              <p className={styles.textMuted}>Care Tips: {flower.careTips || "N/A"}</p>
              <button onClick={() => addToWishlist(flower)} className={styles.buttonPrimary}>
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 text-center">
        <a href="/flowers/addFlower" className={styles.link}>
          Add a new flower
        </a>
      </div>
    </div>
  );
};

export default MainPage;