import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ToolHeader({ title, description }) {
  const navigate = useNavigate();

  return (
    <div className="mb-10">

      {/* Back Button */}

      <button
        onClick={() => navigate("/")}
        className="group mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-700 shadow-sm transition-all duration-300 hover:border-violet-400 hover:bg-violet-50"
      >
        <ArrowLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />

        Back To Tools
      </button>

      {/* Heading */}

      <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
        {title}
      </h1>

      {/* Description */}

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>

    </div>
  );
}

export default ToolHeader;