import SecurityPrivacy from "../../components/SecurityPrivacy/SecurityPrivacy";
import WhyPDFly from "../../components/WhyPDFly/WhyPDFly";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ToolsSection from "../../components/ToolsSection/ToolsSection";
import AIFeatures from "../../components/AIFeatures/AIFeatures";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import FAQ from "../../components/FAQ/FAQ";
import CTA from "../../components/CTA/CTA";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F8F5FF]">
      {/* Global Background */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-400/20 blur-[180px] rounded-full"></div>

      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-pink-400/15 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-300/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ToolsSection />
        <AIFeatures />
        <WhyPDFly />
        <SecurityPrivacy />
        <HowItWorks />
        <FAQ />
        <CTA />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default Home;