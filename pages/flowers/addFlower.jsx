import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AddFlower = () => {
  const [flower, setFlower] = useState({ name: "", description: "", price: "", careTips: "" });
  const router = useRouter();

  const handleSubmit = async () => {
    if (!flower.name || !flower.description || !flower.price || !flower.careTips) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      const response = await fetch("/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(flower),
      });
      if (response.ok) router.push("/");
    } catch (error) {
      console.error("Error adding flower:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Add a New Flower to SIMPRE_2025</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
          <input
            type="text"
            value={flower.name}
            onChange={(e) => setFlower({ ...flower, name: e.target.value })}
            placeholder="Flower Name"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            value={flower.description}
            onChange={(e) => setFlower({ ...flower, description: e.target.value })}
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="number"
            value={flower.price}
            onChange={(e) => setFlower({ ...flower, price: e.target.value })}
            placeholder="Price (€)"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            value={flower.careTips}
            onChange={(e) => setFlower({ ...flower, careTips: e.target.value })}
            placeholder="Care Tips"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Flower
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddFlower;