import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="relative overflow-hidden py-24 px-5 lg:px-10">

      {/* Background Glow */}

      <div className="absolute -top-24 left-0 w-80 h-80 bg-violet-300/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-300/10 blur-[140px] rounded-full"></div>

      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <p className="text-violet-600 font-semibold uppercase tracking-[4px]">
          CONTACT
        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
          We'd Love To Hear From You
        </h2>

        <p className="mt-6 text-lg text-gray-500 leading-8">
          Whether you have a question, found a bug,
          or want to suggest a new feature,
          we're always happy to connect with you.
        </p>
      </motion.div>

      {/* Main Layout */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >

        {/* Left */}

        <ContactInfo />

        {/* Right */}

        <ContactForm />

      </div>

    </section>
  );
}

export default Contact;