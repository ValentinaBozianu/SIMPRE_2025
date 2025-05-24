import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFlowers } from "@/utils/recordsFunctions";

const Bouquets = () => {
  const [flowers, setFlowers] = useState([]);
  const [selectedFlowers, setSelectedFlowers] = useState([]);
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await getFlowers();
        setFlowers(response);
      } catch (error) {
        console.error("Error fetching flowers:", error);
      }
    };
    fetchFlowers();
  }, []);

  const addFlowerSelection = () => {
    setSelectedFlowers([...selectedFlowers, ""]);
  };

  const updateFlowerSelection = (index, value) => {
    const updatedSelections = [...selectedFlowers];
    updatedSelections[index] = value;
    setSelectedFlowers(updatedSelections);
  };

  const createBouquet = () => {
    if (selectedFlowers.length < 1 || selectedFlowers.some((id) => !id)) {
      alert("Please select at least a flower to create a bouquet!");
      return;
    }

    const chosenFlowers = selectedFlowers.map((id) => flowers.find((flower) => flower._id === id));
    const bouquetName = `Bouquet ${chosenFlowers.map((flower) => flower.name).join(" & ")}`;
    const bouquetPrice = chosenFlowers.reduce((total, flower) => total + parseFloat(flower.price), 0);

    const newBouquet = {
      id: Date.now(),
      name: bouquetName,
      flowers: chosenFlowers.map((flower) => flower.name),
      price: bouquetPrice,
    };

    setBouquets([...bouquets, newBouquet]);
    setSelectedFlowers([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Create Your Bouquet - SIMPRE_2025</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2 text-green-700">Select Flowers for Your Bouquet</h2>
          {selectedFlowers.map((flowerId, index) => (
            <select
              key={index}
              value={flowerId}
              onChange={(e) => updateFlowerSelection(index, e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value="">Select a flower</option>
              {flowers.map((flower) => (
                <option key={flower._id} value={flower._id}>
                  {flower.name} - {flower.price}€
                </option>
              ))}
            </select>
          ))}
          <button
            onClick={addFlowerSelection}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2"
          >
            Add Another Flower
          </button>
          <button
            onClick={createBouquet}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create Bouquet
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-green-700">Your Bouquets</h2>
        {bouquets.length === 0 ? (
          <p className="text-center text-gray-600">No bouquets created yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bouquets.map((bouquet) => (
              <div key={bouquet.id} className="p-4 bg-white border border-green-200 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-green-800">{bouquet.name}</h3>
                <p className="text-gray-600">Flowers: {bouquet.flowers.join(", ")}</p>
                <p className="text-sm text-gray-500">Price: {bouquet.price}€</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Bouquets;