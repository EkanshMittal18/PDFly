import { features } from "./featuresData";
import AIFeaturesCard from "./AIFeaturesCard";

function AIFeatures() {
  return (
    <section className="relative py-24 pb-36">

      {/* Background Blur */}
      <div className="absolute -left-20 top-10 w-72 h-72 bg-purple-300/20 blur-[120px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-pink-300/20 blur-[120px] rounded-full" />

      {/* Heading */} 

      <div className="text-center mb-16 px-5">

        <p className="text-purple-600 font-semibold uppercase tracking-[3px]">
          AI Powered
        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Discover Powerful AI Features
        </h2>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
          Everything you need to chat, summarize, translate,
          organize and interact with your PDFs using AI.
        </p>

      </div>

      {/* Marquee */}
      <div className="relative overflow-x-hidden overflow-y-visible py-6">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F8F5FF] to-transparent pointer-events-none"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F8F5FF] to-transparent pointer-events-none"></div>

        <div className="marquee py-6">

          <div className="marquee-content items-stretch">
           {[...features, ...features].map((feature, index) => (
            <AIFeaturesCard
              key={index}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default AIFeatures;