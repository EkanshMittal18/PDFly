import { motion } from "framer-motion";

function HeroFloatingCard({ card }) {
  const Icon = card.icon;

  const positionClasses = {
    top: "top-4 right-0",
    left: "left-[-55px] top-1/2 -translate-y-1/2",
    bottom: "bottom-0 right-6",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        hidden lg:flex
        absolute
        ${positionClasses[card.position]}
        items-center
        gap-3
        px-3
        py-2
        rounded-2xl
        bg-white/90
        backdrop-blur-2xl
        border border-white/60
        shadow-[0_20px_60px_rgba(139,92,246,.15)]
        w-[190px]
        z-20
      `}
    >
      {/* Icon */}

      <div
        className={`
          w-10
          h-10
          rounded-2xl
          bg-gradient-to-r
          ${card.color}
          flex
          items-center
          justify-center
          text-white
          text-lg
          shadow-lg
        `}
      >
        <Icon />
      </div>

      {/* Text */}

      <div>
        <h4 className="font-semibold text-gray-900">
          {card.title}
        </h4>

        <p className="text-sm text-gray-500">
          {card.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default HeroFloatingCard;