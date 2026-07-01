import WhyPDFly from "../../components/WhyPDFly/WhyPDFly";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ToolsSection from "../../components/ToolsSection/ToolsSection";
import AIFeatures from "../../components/AIFeatures/AIFeatures";
function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5FF]">
      <Navbar />
      <Hero />
      <ToolsSection />
      <AIFeatures />
      <WhyPDFly />
    </div>
  );
}

export default Home;