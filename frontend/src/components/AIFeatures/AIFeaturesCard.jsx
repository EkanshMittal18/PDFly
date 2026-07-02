import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function AIFeaturesCard({ feature }) {
  const navigate = useNavigate();
  const Icon = feature.icon;

  return (
    <div
      className="
      group
      relative
      w-[250px]
      min-h-[200px]
      flex-shrink-0
      rounded-3xl
      bg-white/80
      backdrop-blur-xl
      border
      border-white/40
      shadow-lg
      hover:shadow-purple-300/40
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-3
      overflow-hidden
    "
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-400/20 blur-3xl group-hover:bg-purple-500/30 transition-all duration-500" />

      <div className="relative z-10 p-5 h-full flex flex-col">

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color}
          flex items-center justify-center text-white text-2xl shadow-lg`}
        >
          <Icon />
        </div>

        {/* Badge */}
        <span className="mt-3 text-xs font-semibold text-purple-600 uppercase tracking-wider">
          {feature.badge}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-lg font-bold text-gray-900">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-500 text-sm leading-5 flex-grow">
          {feature.description}
        </p>

        {/* Explore */}
        <button
          onClick={() => navigate(`/features/${feature.slug}`)}
          className="
  mt-2
  flex
  items-center
  gap-2
  text-purple-600
  font-semibold
  group-hover:gap-4
  transition-all
  duration-300
"
        >
          Explore

          <FaArrowRight />
        </button>

      </div>
    </div>
  );
}

export default AIFeaturesCard;