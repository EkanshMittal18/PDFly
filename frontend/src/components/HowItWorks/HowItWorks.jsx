import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { steps } from "./howItWorksData";
import StepCard from "./StepCard";

function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24 px-5 lg:px-12">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-violet-300/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 blur-[140px] rounded-full"></div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >

        <p className="text-violet-600 font-semibold uppercase tracking-[4px]">
          HOW IT WORKS
        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
          Process PDFs in 3 Simple Steps
        </h2>

        <p className="mt-6 text-gray-500 text-lg">
          Upload your PDF, let our AI process it, and download the
          final result within seconds.
        </p>

      </motion.div>

      {/* Steps */}

      <div className="relative mt-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {steps.map((step, index) => (

            <div key={index} className="relative">

              <StepCard step={step} />

              {/* Arrow */}

              {index !== steps.length - 1 && (

                <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-20">

                  <FaArrowRight
                    className="
                    text-violet-400
                    text-3xl
                    animate-pulse
                  "
                  />

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;