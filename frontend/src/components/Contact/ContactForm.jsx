import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
      rounded-[36px]
      border
      border-white/60
      bg-white/80
      backdrop-blur-xl
      shadow-[0_20px_70px_rgba(139,92,246,.12)]
      p-8
      lg:p-10
      "
    >
      <h3 className="text-3xl font-bold text-gray-900">
        Send a Message
      </h3>

      <p className="mt-2 text-gray-500">
        We'd love to hear from you.
      </p>

      <form className="mt-8 space-y-6">

        {/* Name */}

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            py-4
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
            "
          />
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            py-4
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
            "
          />
        </div>

        {/* Subject */}

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Subject
          </label>

          <input
            type="text"
            placeholder="What's this about?"
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            py-4
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
            "
          />
        </div>

        {/* Message */}

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Your Message
          </label>

          <textarea
            rows="6"
            placeholder="Write your message here..."
            className="
            w-full
            resize-none
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            py-4
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
            "
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-violet-600
          py-4
          text-lg
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-violet-700
          hover:shadow-xl
        "
        >
          Send Message

          <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

      </form>
    </motion.div>
  );
}

export default ContactForm;