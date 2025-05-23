import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Trends = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Floral Trends 2025 - SIMPRE_2025</h1>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-800">Sustainable Designs</h3>
          <p className="text-gray-600 mb-4">
            In 2025, eco-friendly bouquets using locally sourced flowers are trending!
          </p>
          <h3 className="text-lg font-semibold text-green-800">Bold Colors</h3>
          <p className="text-gray-600">
            Vibrant hues like deep purples and bright yellows are taking center stage.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trends;