import { motion } from "framer-motion";
import { footerLinks, socialLinks } from "./footerData";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 px-5 lg:px-10">

      {/* Background Glow */}

      <div className="absolute -top-20 left-0 w-72 h-72 bg-violet-300/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-300/10 blur-[140px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        rounded-[36px]
        border
        border-white/60
        bg-white/80
        backdrop-blur-xl
        shadow-[0_20px_70px_rgba(139,92,246,.12)]
        p-10
        "
      >

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black text-violet-600">
              PDFly
            </h2>

            <p className="mt-5 text-gray-500 leading-7">
              AI Powered PDF platform to chat,
              summarize, edit, convert and
              manage PDFs effortlessly.
            </p>

            <div className="flex gap-4 mt-8">

              {socialLinks.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-violet-100
                    text-violet-600
                    flex
                    items-center
                    justify-center
                    text-xl
                    transition-all
                    duration-300
                    hover:bg-violet-600
                    hover:text-white
                    hover:-translate-y-1
                    "
                  >
                    <Icon />
                  </a>

                );

              })}

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-lg text-gray-900">
              Product
            </h3>

            <div className="mt-5 space-y-3">

              {footerLinks.product.map((item, index) => (

                <p
                  key={index}
                  className="text-gray-500 hover:text-violet-600 cursor-pointer transition"
                >
                  {item}
                </p>

              ))}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-lg text-gray-900">
              Company
            </h3>

            <div className="mt-5 space-y-3">

              {footerLinks.company.map((item, index) => (

                <p
                  key={index}
                  className="text-gray-500 hover:text-violet-600 cursor-pointer transition"
                >
                  {item}
                </p>

              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-bold text-lg text-gray-900">
              Resources
            </h3>

            <div className="mt-5 space-y-3">

              {footerLinks.resources.map((item, index) => (

                <p
                  key={index}
                  className="text-gray-500 hover:text-violet-600 cursor-pointer transition"
                >
                  {item}
                </p>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © 2026 PDFly. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center">
            Made with ❤️ by <span className="font-semibold text-violet-600">Ekansh Mittal</span>
          </p>

        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;