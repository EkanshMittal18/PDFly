import { motion } from "framer-motion";

function StepCard({ step }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/50
      bg-white/80
      backdrop-blur-xl
      p-7
      shadow-lg
      hover:shadow-[0_20px_60px_rgba(139,92,246,.20)]
      transition-all
      duration-500
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet-400/10 blur-3xl group-hover:bg-fuchsia-400/20 transition-all duration-500"></div>

      {/* Step Number */}

      <span className="relative z-10 inline-flex w-10 h-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold text-sm">
        {step.number}
      </span>

      {/* Icon */}

      <div
        className={`
        relative
        z-10
        mt-6
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        ${step.color}
        flex
        items-center
        justify-center
        text-white
        text-3xl
        shadow-lg
        group-hover:scale-110
        group-hover:rotate-6
        transition-all
        duration-500
        `}
      >
        <Icon />
      </div>

      {/* Title */}

      <h3 className="relative z-10 mt-6 text-xl font-bold text-gray-900">
        {step.title}
      </h3>

      {/* Description */}

      <p className="relative z-10 mt-4 text-gray-500 leading-7">
        {step.description}
      </p>
    </motion.div>
  );
}

export default StepCard;