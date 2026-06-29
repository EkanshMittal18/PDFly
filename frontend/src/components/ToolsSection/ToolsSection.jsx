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
    <section className="px-4 sm:px-6 lg:px-10 xl:px-20 py-16 lg:py-20">

      {/* Heading */}
      <div className="text-center">

        <p className="text-purple-600 font-medium">
          Powerful Tools. Simple Interface.
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Everything You Need To
          <span className="text-purple-600">
            {" "}Work With PDFs
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          All-in-one suite of PDF tools for students,
          professionals and businesses.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">

  {[
    "All Tools",
    "Convert PDF",
    "Security",
    "AI Tools"
  ].map((category) => (

    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full transition-all duration-300  ${
        activeCategory === category
          ? "bg-purple-100 text-purple-600"
          : "text-gray-600 hover:text-purple-600"
      }`}
    >
      {category}
    </button>

  ))}

</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
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