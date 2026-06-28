import { useState } from "react";
import ToolCard from "../ToolCard/ToolCard";
import { toolsData } from "../../data/toolsData";



 

function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("All Tools");
         const filteredTools =
              activeCategory === "All Tools"
              ? toolsData
              : toolsData.filter(
          (tool) => tool.category === activeCategory
      );
  return (
    <section className="px-12 py-20">

      {/* Heading */}
      <div className="text-center">

        <p className="text-purple-600 font-medium">
          Powerful Tools. Simple Interface.
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Everything You Need To
          <span className="text-purple-600">
            {" "}Work With PDFs
          </span>
        </h2>

        <p className="text-gray-500 mt-4">
          All-in-one suite of PDF tools for students,
          professionals and businesses.
        </p>

        <div className="flex justify-center gap-8 mt-8">

  {[
    "All Tools",
    "Convert PDF",
    "Security",
    "AI Tools"
  ].map((category) => (

    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-5 py-2 rounded-full transition-all ${
        activeCategory === category
          ? "bg-purple-100 text-purple-600"
          : "text-gray-600 hover:text-purple-600"
      }`}
    >
      {category}
    </button>

  ))}

</div>

        <div className="grid grid-cols-6 gap-4 mt-16">
  {filteredTools.map((tool, index) => (
    <ToolCard
      key={index}
      title={tool.title}
      description={tool.description}
      color={tool.color}
      icon={tool.icon}
      slug={tool.slug}
    />
  ))}
</div>

      </div>

    </section>
  );
}

export default ToolsSection;