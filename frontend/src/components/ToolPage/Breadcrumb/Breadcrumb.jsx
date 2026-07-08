import { ChevronRight, Home } from "lucide-react";

function Breadcrumb({ title }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">

      <Home size={16} />

      <ChevronRight size={15} />

      <span>All Tools</span>

      <ChevronRight size={15} />

      <span className="text-gray-900 font-medium">
        {title}
      </span>

    </div>
  );
}

export default Breadcrumb;