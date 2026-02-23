import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCategories from "./components/ProductCategories";
import EngineeringExcellence from "./components/EngineeringExcellence";
import VideoSection from "./components/VideoSection";
import StoreLocations from "./components/StoreLocations";
import { productsContent } from "./company-assets/content";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

function App() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-23">
        <FloatingButton />
        <Hero
          onExploreClick={() =>
            handleCategoryChange(productsContent.categories[0])
          }
        />
        <ProductCategories
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />
        <EngineeringExcellence />
        {/* <VideoSection /> */}
        <StoreLocations />
        <Footer />
      </main>
    </div>
  );
}

export default App;
