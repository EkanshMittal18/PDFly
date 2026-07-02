import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/60
      bg-white/80
      backdrop-blur-xl
      shadow-lg
      hover:shadow-[0_20px_60px_rgba(139,92,246,.12)]
      transition-all
      duration-300
      "
    >
      {/* Question */}

      <button
        onClick={() => setOpen(!open)}
        className="
        w-full
        flex
        items-center
        justify-between
        p-6
        text-left
        cursor-pointer
        "
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-5">
          {faq.question}
        </h3>

        <div
          className="
          flex
          items-center
          justify-center
          w-10
          h-10
          rounded-full
          bg-violet-100
          text-violet-600
          flex-shrink-0
          transition-all
          duration-300
          group-hover:bg-violet-600
          group-hover:text-white
          "
        >
          {open ? <FaMinus size={14} /> : <FaPlus size={14} />}
        </div>
      </button>

      {/* Answer */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-500 leading-7">
              {faq.answer}
            </p>
          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default FAQItem;