import { motion } from "framer-motion";
import { dashboardItems } from "./securityData";

function SecurityDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className="
      relative
      rounded-[32px]
      bg-white/80
      backdrop-blur-xl
      border
      border-white/50
      shadow-2xl
      p-7
      overflow-hidden
    "
    >

      {/* Glow */}

      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-purple-400/20 blur-[120px]" />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <p className="text-purple-600 font-semibold uppercase tracking-widest text-sm">

            Live Security

          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">

            Security Dashboard

          </h2>

        </div>

        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>

      </div>

      {/* Items */}

      <div className="mt-8 space-y-5">

        {dashboardItems.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white
              p-4
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-500
                  to-violet-600
                  flex
                  items-center
                  justify-center
                  text-white
                  text-lg
                "
                >
                  <Icon />
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">

                    {item.title}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {item.description}

                  </p>

                </div>

              </div>

              <span
                className={`px-4 py-1 rounded-full text-xs font-bold ${
                  item.active
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {item.status}
              </span>

            </motion.div>

          );

        })}

      </div>

      {/* Bottom */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 p-5 text-white">

        <p className="text-sm opacity-90">

          Overall Security

        </p>

        <h3 className="mt-2 text-2xl font-bold">

          100% Protected

        </h3>

      </div>

    </motion.div>
  );
}

export default SecurityDashboard;