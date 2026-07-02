import { heroStats } from "./heroData";
import { motion } from "framer-motion";

function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="
      mt-10
      flex
      flex-wrap
      gap-4
      justify-center
      lg:justify-start
      "
    >
      {heroStats.map((item, index) => (
        <div
          key={index}
          className="
          flex
          items-center
          gap-3
          px-5
          py-3
          rounded-2xl
          bg-white/70
          backdrop-blur-xl
          border
          border-white/60
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          duration-300
          "
        >
          <span className="text-2xl">
            {item.icon}
          </span>

          <span className="font-semibold text-gray-700">
            {item.title}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default HeroStats;