import { FaArrowRight } from "react-icons/fa";

function WhyCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      bg-white/80
      backdrop-blur-xl
      border
      border-white/50
      p-6
      shadow-md
      hover:shadow-2xl
      hover:shadow-purple-300/30
      hover:-translate-y-3
      transition-all
      duration-500
      "
    >

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

      {/* Icon */}

      <div
        className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color}
        flex items-center justify-center text-white text-2xl
        shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >
        <Icon />
      </div>

      {/* Title */}

      <h3 className="relative z-10 mt-6 text-xl font-bold text-gray-900">

        {item.title}

      </h3>

      {/* Description */}

      <p className="relative z-10 mt-4 text-gray-500 leading-7 text-sm">

        {item.description}

      </p>

      {/* Learn More */}

      <button
        className="
        relative
        z-10
        mt-6
        flex
        items-center
        gap-2
        font-semibold
        text-purple-600
        group-hover:gap-4
        transition-all
        duration-300
        "
      >
        Learn More

        <FaArrowRight />

      </button>

    </div>
  );
}

export default WhyCard;