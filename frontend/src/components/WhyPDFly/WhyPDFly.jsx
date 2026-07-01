import { motion } from "framer-motion";
import WhyCard from "./WhyCard";
import { whyData } from "./whyData";

function WhyPDFly() {
  return (
    <section className="relative overflow-hidden py-24 px-5 lg:px-12">

      {/* Background Blur */}

      <div className="absolute -left-32 top-10 w-80 h-80 bg-purple-300/20 blur-[140px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-pink-300/20 blur-[140px] rounded-full"></div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >

        <p className="text-purple-600 font-semibold uppercase tracking-[4px]">
          WHY PDFLY
        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">

          Why Thousands Trust PDFly

        </h2>

        <p className="mt-6 text-gray-500 text-lg">

          Built with AI, speed and enterprise-grade security to make
          working with PDFs effortless.

        </p>

      </motion.div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">

        {whyData.map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .5,
              delay: index * .08,
            }}
            viewport={{ once: true }}
          >

            <WhyCard item={item} />

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default WhyPDFly;