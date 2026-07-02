import { motion } from "framer-motion";
import { contactReasons, socialLinks } from "./contactData";

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-xl"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

        <span className="text-sm font-semibold text-violet-700">
          CONTACT
        </span>
      </div>

      {/* Heading */}

      <h2 className="mt-7 text-5xl font-bold text-gray-900 leading-tight">
        Let's Connect
      </h2>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-gray-500">
        Have a question, feedback or feature request?
        We'd love to hear your ideas and help you get
        the best experience with PDFly.
      </p>

      {/* Why Contact Card */}

      <div
        className="
        mt-10
        rounded-3xl
        border
        border-white/60
        bg-white/80
        backdrop-blur-xl
        p-7
        shadow-lg
        "
      >
        <h3 className="text-xl font-bold text-gray-900">
          Why Contact Us?
        </h3>

        <div className="mt-6 space-y-4">

          {contactReasons.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-violet-600"></div>

              <p className="text-gray-600">
                {item}
              </p>

            </div>

          ))}

        </div>
      </div>

      {/* Response */}

      <div className="mt-8 flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

        <p className="text-gray-600">
          Usually replies within <b>24 Hours</b>
        </p>

      </div>

      {/* Social Icons */}

      <div className="mt-10 flex gap-5">

        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/60
              bg-white
              text-2xl
              text-violet-600
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:bg-violet-600
              hover:text-white
              "
            >
              <Icon />
            </a>
          );
        })}

      </div>

      {/* Bottom */}

      <p className="mt-10 text-gray-500 leading-7">
        Made with ❤️ by <b>Ekansh Mittal</b>.
        <br />
        Building smarter PDF tools powered by AI.
      </p>

    </motion.div>
  );
}

export default ContactInfo;