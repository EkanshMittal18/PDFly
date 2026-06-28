import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ToolsSection from "../../components/ToolsSection/ToolsSection";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5FF]">
      <Navbar />
      <Hero />
      <ToolsSection />
    </div>
  );
}

export default Home;