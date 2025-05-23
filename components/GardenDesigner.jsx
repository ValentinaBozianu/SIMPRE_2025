import { useState } from "react";

const GardenDesigner = () => {
  const [flowers, setFlowers] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState({ name: "", x: 0, y: 0 });

  const addFlower = () => {
    if (selectedFlower.name) {
      setFlowers([...flowers, { ...selectedFlower, id: Date.now() }]);
      setSelectedFlower({ name: "", x: 0, y: 0 });
    }
  };

  const dragFlower = (e, id) => {
    const newFlowers = flowers.map((flower) =>
      flower.id === id ? { ...flower, x: e.clientX - 50, y: e.clientY - 50 } : flower
    );
    setFlowers(newFlowers);
  };

  return (
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
  );
};

export default GardenDesigner;