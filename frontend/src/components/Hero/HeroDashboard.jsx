import { dashboardTools } from "./heroData";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function HeroDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
    relative
    w-[580px]
    min-h-[470px]
    rounded-[36px]
    border
    border-white/60
    bg-white/80
    backdrop-blur-2xl
    shadow-[0_30px_80px_rgba(139,92,246,.18)]
    p-7">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        PDFly AI Dashboard
                    </h2>
                    <p className="text-gray-500 mt-1">
                        AI powered assistant for your PDFs
                    </p>
                </div>
                <div className="
          flex
          items-center
          gap-2
          rounded-full
          bg-green-50
          px-3
          py-2
          ">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

                    <span className="text-sm font-semibold text-green-600">
                        LIVE
                    </span>
                </div>

            </div>
            {/* Search */}
            <div className="relative mt-8">
                <input placeholder="Ask anything about your PDF..."
                    className="
          w-full
          rounded-2xl
          border
          border-violet-200
          bg-white
          py-4
          pl-5
          pr-16
          outline-none
          focus:border-violet-500
          transition
          "/>
                <button
                    className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          w-11
          h-11
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          text-white
          flex
          items-center
          justify-center
          hover:scale-110
          transition
          ">

                    <FaPaperPlane />
                </button>

            </div>

            {/* Dashboard Cards */}

            <div className="grid grid-cols-3 gap-4 mt-8">
                {dashboardTools.map((tool, index) => {
                    const Icon = tool.icon;

                    return (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="
        group
        h-[120px]
        bg-white
        rounded-3xl
        border
        border-gray-100
        p-5
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-2xl
        hover:border-violet-200
        "
                        >
                            <div
                                className={`
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-r
          ${tool.color}
          flex
          items-center
          justify-center
          text-white
          text-2xl
          shadow-lg
          group-hover:scale-110
          group-hover:rotate-6
          transition-all
          duration-300
          `}
                            >
                                <Icon />
                            </div>

                            <h3 className="mt-4 font-semibold text-gray-900 text-sm leading-5">
                                {tool.title}
                            </h3>
                        </motion.div>
                    );
                })}
            </div>

        </motion.div>
    );
}

export default HeroDashboard;