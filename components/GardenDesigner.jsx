// components/GardenDesigner.jsx
import { useState, useEffect } from "react";

const GardenDesigner = () => {
  const [flowers, setFlowers] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState({ name: "", x: 0, y: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGardens = async () => {
      try {
        const response = await fetch("/api/gardens");
        if (!response.ok) {
          throw new Error("Failed to fetch gardens");
        }
        const data = await response.json();
        setFlowers(data[0]?.flowers || []);
      } catch (err) {
        setError("Could not load garden designs. Please try again later.");
        console.error(err);
      }
    };
    fetchGardens();
  }, []);

  const addFlower = async () => {
    if (selectedFlower.name) {
      const newFlower = { ...selectedFlower, id: Date.now() };
      const newFlowers = [...flowers, newFlower];
      setFlowers(newFlowers);
      try {
        await fetch("/api/gardens", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ flowers: newFlowers }),
        });
        setError(null);
      } catch (err) {
        setError("Failed to save garden design.");
        console.error(err);
      }
      setSelectedFlower({ name: "", x: 0, y: 0 });
    }
  };

  const dragFlower = async (e, id) => {
    const newFlowers = flowers.map((flower) =>
      flower.id === id ? { ...flower, x: e.clientX - 50, y: e.clientY - 50 } : flower
    );
    setFlowers(newFlowers);
    try {
      await fetch("/api/gardens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flowers: newFlowers }),
      });
      setError(null);
    } catch (err) {
      setError("Failed to update garden design.");
      console.error(err);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="relative w-full h-96 bg-green-100 border-2 border-green-300 rounded-lg mt-6">
        <div className="absolute top-2 left-2">
          <input
            type="text"
            value={selectedFlower.name}
            onChange={(e) => setSelectedFlower({ ...selectedFlower, name: e.target.value })}
            placeholder="Flower name"
            className="p-2 border rounded mr-2"
          />
          <button
            onClick={addFlower}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add to Garden
          </button>
        </div>
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="absolute w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center cursor-move"
            style={{ left: flower.x, top: flower.y }}
            draggable
            onDrag={(e) => dragFlower(e, flower.id)}
          >
            {flower.name.slice(0, 3)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenDesigner;