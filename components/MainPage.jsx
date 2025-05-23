import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getRecords } from "@/utils/recordsFunctions";

const MainPage = () => {
  const router = useRouter();
  const [flowers, setFlowers] = useState([]);

  const fetchFlowers = async () => {
    try {
      const response = await getRecords();
      setFlowers(response);
    } catch (error) {
      console.error("Error fetching flowers:", error);
    }
  };

  const handleAddFlower = () => {
    router.push("/flowers/add");
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-green-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Your Virtual Garden</h2>
      {flowers.length === 0 ? (
        <p className="text-center text-gray-600">No flowers yet. Add one to start your garden!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flowers.map((flower) => (
            <div
              key={flower._id}
              className="p-4 bg-white border border-green-200 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-green-800">{flower.name}</h3>
              <p className="text-gray-600">{flower.description}</p>
              <p className="text-sm text-gray-500">Price: {flower.price}€</p>
              <p className="text-sm text-gray-500">Care: {flower.careTips}</p>
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-6">
        <button
          onClick={handleAddFlower}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Flower
        </button>
      </div>
    </div>
  );
};

export default MainPage;