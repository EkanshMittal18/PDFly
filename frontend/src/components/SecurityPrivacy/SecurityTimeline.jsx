import { motion } from "framer-motion";
import { timelineSteps } from "./securityData";

function SecurityTimeline() {
  return (
    <div className="relative flex flex-col gap-10">

      {timelineSteps.map((step, index) => {

        const Icon = step.icon;

        return (

          <motion.div
            key={step.id}
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="relative flex items-start gap-5"
          >

            {/* Timeline Line */}

            {index !== timelineSteps.length - 1 && (
              <div className="absolute left-6 top-14 w-[2px] h-16 bg-gradient-to-b from-purple-500 to-purple-200"></div>
            )}

            {/* Icon */}

            <div
              className={`
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              ${step.color}
              flex
              items-center
              justify-center
              text-white
              text-xl
              shadow-lg
              flex-shrink-0
            `}
            >
              <Icon />
            </div>

            {/* Content */}

            <div>

              <h3 className="text-lg font-bold text-gray-900">

                {step.title}

              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-6 max-w-xs">

                {step.description}

              </p>

            </div>

          </motion.div>

        );

      })}

    </div>
  );
}

export default SecurityTimeline;