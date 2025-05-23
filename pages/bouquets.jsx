import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Bouquets = () => {
  const [bouquets, setBouquets] = useState([
    { id: 1, name: "Romantic Roses", flowers: ["Red Roses", "Baby's Breath"], price: 35 },
    { id: 2, name: "Sunny Delight", flowers: ["Sunflowers", "Daisies"], price: 25 },
  ]);

  // Vom simula buchetele pentru moment; ulterior le putem stoca în MongoDB
  useEffect(() => {
    // Poți adăuga aici un fetch către /api/bouquets dacă vrei să stochezi buchetele în MongoDB
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Bouquet Ideas for SIMPRE_2025</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bouquets.map((bouquet) => (
            <div key={bouquet.id} className="p-4 bg-white border border-green-200 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800">{bouquet.name}</h3>
              <p className="text-gray-600">Flowers: {bouquet.flowers.join(", ")}</p>
              <p className="text-sm text-gray-500">Price: {bouquet.price}€</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bouquets;