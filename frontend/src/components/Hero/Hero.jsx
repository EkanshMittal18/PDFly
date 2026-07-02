import HeroDashboard from "./HeroDashboard";
import HeroFloatingCard from "./HeroFloatingCard";
import { floatingCards } from "./heroData";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5FF]">

      {/* Background */}

      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-violet-300/20 blur-[150px]" />

      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-pink-300/20 blur-[130px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-fuchsia-300/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 backdrop-blur-xl px-5 py-2 shadow-md">

              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

              <span className="font-semibold text-violet-700">

                AI Powered PDF Platform

              </span>

            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">

              Smart PDF Tools.

              <br />

              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">

                Powered by AI.

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              Summarize, chat, convert, edit and secure your PDFs using one intelligent AI platform.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition">

                Start Free

              </button>

              <button className="rounded-full bg-white px-8 py-4 font-semibold shadow-lg hover:-translate-y-1 transition">

                Explore Features

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:justify-end">
            <HeroDashboard />

            {floatingCards.map((card, index) => (
              <HeroFloatingCard
                key={index}
                card={card}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;