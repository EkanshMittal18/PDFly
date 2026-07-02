import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import TrustBadge from "./TrustBadge";
import { trustBadges } from "./ctaData";

function CTA() {
  return (
    <section className="relative overflow-hidden py-24 px-5 lg:px-10">

      {/* Background Glow */}

      <div className="absolute -top-24 left-0 w-80 h-80 bg-violet-300/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-300/10 blur-[140px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        rounded-[36px]
        border
        border-white/60
        bg-white/80
        backdrop-blur-xl
        shadow-[0_20px_70px_rgba(139,92,246,.12)]
        px-8
        py-16
        lg:px-16
        "
      >

        {/* Small Badge */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-2">

            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-sm font-semibold text-violet-700">
              Ready to Get Started?
            </span>

          </div>

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-center text-4xl lg:text-6xl font-black text-gray-900 leading-tight">

          Transform Your PDFs

          <br />

          <span className="text-violet-600">
            with AI in Seconds
          </span>

        </h2>

        {/* Description */}

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-500 text-lg leading-8">

          Chat, summarize, translate, edit and secure your PDFs
          using one powerful AI platform built for students,
          professionals and businesses.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button
            className="
            group
            flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-violet-600
            px-8
            py-4
            text-white
            font-semibold
            hover:bg-violet-700
            hover:scale-105
            transition-all
            duration-300
            "
          >

            Start Free

            <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300"/>

          </button>

          <button
            className="
            rounded-full
            border
            border-violet-200
            bg-white
            px-8
            py-4
            text-violet-700
            font-semibold
            hover:bg-violet-50
            transition-all
            duration-300
            "
          >

            Explore All Tools

          </button>

        </div>

        {/* Trust Badges */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

          {trustBadges.map((badge) => (

            <TrustBadge
              key={badge.id}
              badge={badge}
            />

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default CTA;