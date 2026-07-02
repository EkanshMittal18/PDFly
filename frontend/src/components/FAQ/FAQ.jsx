import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

function FAQ() {
  return (
    <section className="relative overflow-hidden py-24 px-5 lg:px-12">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-violet-300/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 blur-[140px] rounded-full"></div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >

        <p className="text-violet-600 font-semibold uppercase tracking-[4px]">
          FAQ
        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="mt-6 text-lg text-gray-500">
          Find answers to the most common questions about PDFly,
          AI features, security, and supported PDF tools.
        </p>

      </motion.div>

      {/* FAQ List */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto space-y-6"
      >

        {faqData.map((faq, index) => (

          <FAQItem
            key={index}
            faq={faq}
          />

        ))}

      </motion.div>

    </section>
  );
}

export default FAQ;