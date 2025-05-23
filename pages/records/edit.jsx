import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFlowerById, updateFlower } from "@/utils/recordsFunctions";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [flower, setFlower] = useState({ name: "", description: "", price: "", careTips: "" });

  const getFlower = async (id) => {
    const data = await getFlowerById(id);
    if (data) {
      setFlower(data);
    }
    setIsLoading(false);
  };

  const onSubmit = async () => {
    if (!flower.name || !flower.description || !flower.price || !flower.careTips) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      const updatedFlower = { ...flower, _id: router.query.id };
      const response = await updateFlower(updatedFlower);
      if (response) {
        router.push("/wishlist");
      } else {
        alert("Failed to update flower");
      }
    } catch (error) {
      console.error("Error updating flower:", error);
      alert("Error updating flower");
    }
  };

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getFlower(id);
    } else {
      router.push("/wishlist");
    }
  }, [router.query]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Edit Flower in SIMPRE_2025</h1>
        {flower._id ? (
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
              onClick={onSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Update Flower
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-600">Flower not found</div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Edit;