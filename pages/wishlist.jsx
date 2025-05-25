import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import { getFlowers, createFlower, deleteFlower } from "@/utils/recordsFunctions";
import { useUser, SignIn } from "@clerk/nextjs";


  

const Wishlist = () => {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;



useEffect(() => {
  if (isLoaded && !isSignedIn) {
    router.push("/sign-in?redirected=true");
  }
}, [isLoaded, isSignedIn]);

if (!isLoaded || !isSignedIn) return null;


  const [isLoading, setIsLoading] = useState(true);
  const [flowers, setFlowers] = useState([]);
  const [newFlower, setNewFlower] = useState({ name: "", description: "", price: "", careTips: "" });

  const fetchFlowers = async () => {
    try {
      const response = await getFlowers();
      setFlowers(response || []);
    } catch (error) {
      console.error("Error fetching flowers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  const handleAddFlower = async () => {
    if (!newFlower.name || !newFlower.description || !newFlower.price || !newFlower.careTips) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      await createFlower(newFlower);
      setNewFlower({ name: "", description: "", price: "", careTips: "" });
      fetchFlowers();
    } catch (error) {
      console.error("Error adding flower:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await deleteFlower(id);
      setFlowers(flowers.filter((flower) => flower._id !== id));
    } catch (error) {
      console.error("Error removing flower:", error);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  if (!isLoaded) return null; 

if (!isSignedIn) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold mb-4">You must be signed in to access your wishlist</h2>
        <SignIn mode="modal" />
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">FLOWERS WISHLIST</h1>
        <div className="mb-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow">
          <input
            type="text"
            value={newFlower.name}
            onChange={(e) => setNewFlower({ ...newFlower, name: e.target.value })}
            placeholder="Flower Name"
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={newFlower.description}
            onChange={(e) => setNewFlower({ ...newFlower, description: e.target.value })}
            placeholder="Description"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            value={newFlower.price}
            onChange={(e) => setNewFlower({ ...newFlower, price: e.target.value })}
            placeholder="Price (€)"
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={newFlower.careTips}
            onChange={(e) => setNewFlower({ ...newFlower, careTips: e.target.value })}
            placeholder="Care Tips"
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleAddFlower}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Flower
          </button>
        </div>
        {isLoading ? (
          <Spinner />
        ) : flowers.length === 0 ? (
          <div className="text-center text-gray-600">No flowers available yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowers.map((flower) => (
              <div
                key={flower._id}
                className="p-4 bg-white border border-green-200 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-green-800">{flower.name}</h3>
                <p className="text-gray-600">{flower.description}</p>
                <p className="text-sm text-gray-500">Price: {flower.price}€</p>
                <p className="text-sm text-gray-500">Care: {flower.careTips}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleRemove(flower._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleUpdate(flower._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;