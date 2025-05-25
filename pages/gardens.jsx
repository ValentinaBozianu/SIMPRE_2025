import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";


const Gardens = () => {
const { isSignedIn, isLoaded } = useUser();
const router = useRouter();

if (!isLoaded) return null;

if (!isSignedIn) {
  if (typeof window !== "undefined") {
    router.push("/sign-in?redirected=true");
  }
  return null;
}


  const gardenStyles = [
    "Minimalist Garden",
    "Japanese Garden",
    "Wildflower Meadow",
    "Mediterranean Garden",
    "Cottage Garden",
    "Zen Garden",
    "Tropical Paradise",
    "English Rose Garden",
  ];

  const plants = [
    "white daisies and green shrubs",
    "cherry blossoms and bonsai trees",
    "poppies and cornflowers",
    "lavender, rosemary, and olive trees",
    "roses, foxgloves, and delphiniums",
    "bamboo and moss-covered stones",
    "palms and hibiscus flowers",
    "roses and ivy climbers",
  ];

  const descriptions = [
    "for a clean and modern look",
    "for a serene and peaceful vibe",
    "for a natural and untamed aesthetic",
    "for a sunny and aromatic escape",
    "for a charming and rustic feel",
    "for a calming and meditative space",
    "for a vibrant and exotic atmosphere",
    "for a classic and romantic setting",
  ];

  const [gardenIdeas, setGardenIdeas] = useState([
    {
      title: "Minimalist Garden",
      description: "Use simple flower beds with white daisies and green shrubs for a clean look.",
    },
    {
      title: "Japanese Garden",
      description: "Incorporate cherry blossoms and bonsai trees for a serene vibe.",
    },
  ]);

  const generateIdea = () => {
    const randomStyle = gardenStyles[Math.floor(Math.random() * gardenStyles.length)];
    const randomPlants = plants[Math.floor(Math.random() * plants.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];

    const newIdea = {
      title: randomStyle,
      description: `Incorporate ${randomPlants} ${randomDescription}.`,
    };

    setGardenIdeas([...gardenIdeas, newIdea]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Garden Ideas for SIMPRE_2025</h1>
        <div className="text-center mb-6">
          <button
            onClick={generateIdea}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Generează idei
          </button>
        </div>
        <div className="max-w-2xl mx-auto">
          {gardenIdeas.map((idea, index) => (
            <div key={index} className="bg-white p-6 mb-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-800">{idea.title}</h3>
              <p className="text-gray-600">{idea.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gardens;