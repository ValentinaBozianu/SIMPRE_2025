
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Welcome to SIMPRE_2025</h1>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}