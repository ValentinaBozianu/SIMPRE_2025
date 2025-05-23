import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gardens = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Garden Ideas for SIMPRE_2025</h1>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-800">Minimalist Garden</h3>
          <p className="text-gray-600 mb-4">
            Use simple flower beds with white daisies and green shrubs for a clean look.
          </p>
          <h3 className="text-lg font-semibold text-green-800">Japanese Garden</h3>
          <p className="text-gray-600">
            Incorporate cherry blossoms and bonsai trees for a serene vibe.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gardens;