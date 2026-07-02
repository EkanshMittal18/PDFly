import { motion } from "framer-motion";

function TrustBadge({ badge }) {
  const Icon = badge.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-3xl
        border
        border-white/60
        bg-white/80
        backdrop-blur-xl
        p-5
        shadow-lg
        hover:shadow-[0_20px_60px_rgba(139,92,246,.12)]
        transition-all
        duration-300
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-violet-100
          text-violet-600
          text-2xl
          group-hover:bg-violet-600
          group-hover:text-white
          group-hover:rotate-6
          transition-all
          duration-300
        "
      >
        <Icon />
      </div>

      {/* Text */}

      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {badge.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {badge.description}
        </p>
      </div>
    </motion.div>
  );
}

export default TrustBadge;