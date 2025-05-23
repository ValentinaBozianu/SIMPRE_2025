import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">GARDEN DESIGNER</h1>
        <Chatbot />
        <div className="flex justify-center mt-6">
          <img
            src="/images/pics.jpg"
            alt="Garden Design"
            className="max-w-full h-auto rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2" 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}