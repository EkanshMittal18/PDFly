import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

import SecurityTimeline from "./SecurityTimeline";
import SecurityDashboard from "./SecurityDashboard";
import TrustRibbon from "./TrustRibbon";

function SecurityPrivacy() {
  return (
    <section className="relative overflow-hidden py-28 px-5 lg:px-12">

      {/* Background Blur */}

      <div className="absolute -left-32 top-20 w-80 h-80 rounded-full bg-purple-300/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-pink-300/20 blur-[150px]" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >

        <p className="uppercase tracking-[4px] font-semibold text-purple-600">

          SECURITY & PRIVACY

        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">

          Your Files Stay Safe

          <span className="text-purple-600">

            {" "}Every Step Of The Way

          </span>

        </h2>

        <p className="mt-6 text-gray-500 text-lg leading-8">

          Every uploaded document is encrypted, securely processed
          and automatically deleted after completion.

        </p>

      </motion.div>

      {/* Main Layout */}

      <div className="relative mt-24 grid lg:grid-cols-[1fr_220px_1fr] gap-10 items-center">

        {/* Timeline */}

        <SecurityTimeline />

        {/* Lock */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute w-52 h-52 rounded-full bg-purple-400/20 blur-[100px]" />

          <div
            className="
            relative
            w-36
            h-36
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-violet-500
            shadow-[0_0_70px_rgba(139,92,246,.35)]
            flex
            items-center
            justify-center
          "
          >

            <FaLock className="text-white text-5xl" />

          </div>

        </motion.div>

        {/* Dashboard */}

        <SecurityDashboard />

      </div>

      {/* Trust Ribbon */}

      <div className="mt-20">

        <TrustRibbon />

      </div>

    </section>
  );
}

export default SecurityPrivacy;