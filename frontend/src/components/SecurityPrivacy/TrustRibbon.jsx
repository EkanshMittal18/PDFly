import { motion } from "framer-motion";
import { trustItems } from "./securityData";

function TrustRibbon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
      relative
      rounded-3xl
      bg-white/80
      backdrop-blur-xl
      border
      border-white/50
      shadow-xl
      p-6
      "
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {trustItems.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
              flex
              flex-col
              items-center
              text-center
              "
            >

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                text-white
                flex
                items-center
                justify-center
                text-xl
                shadow-lg
              "
              >
                <Icon />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">

                {item.title}

              </h3>

              <p className="mt-2 text-sm text-gray-500">

                {item.subtitle}

              </p>

            </motion.div>

          );

        })}

      </div>
    </motion.div>
  );
}

export default TrustRibbon;