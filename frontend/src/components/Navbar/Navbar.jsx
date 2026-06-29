import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";

import {
  FaFilePdf,
  FaHome,
  FaTools,
} from "react-icons/fa";

import { MdAutoAwesome } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {

    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [menuOpen]);

  const navItems = [
    {
      title: "Home",
      href: "#",
      icon: <FaHome />,
    },
    {
      title: "Tools",
      href: "#",
      icon: <FaTools />,
    },
    {
      title: "AI Features",
      href: "#",
      icon: <MdAutoAwesome />,
    },
    {
      title: "How It Works",
      href: "#",
      icon: <RiQuestionnaireLine />,
    },
    {
      title: "Pricing",
      href: "#",
      icon: <IoPricetagOutline />,
    },
  ];

  return (
    <>

      <motion.nav
        initial={false}
        animate={{ y: 0 }}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer">

            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-white text-xl">

              <FaFilePdf />

            </div>

            <div>

              <h1 className="text-xl sm:text-2xl font-bold">

                PDFly

              </h1>

              <p className="text-xs text-gray-500">

                AI Powered PDF Tools

              </p>

            </div>

          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8 bg-white rounded-full px-8 py-3 shadow-lg">

            {navItems.map((item) => (

              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ y: -2 }}
                className="relative text-gray-700 font-medium hover:text-purple-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </motion.a>

            ))}

          </div>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .96 }}
              className="px-6 py-2.5 rounded-full border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition"
            >
              Login
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .96 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg font-semibold"
            >
              Get Started
            </motion.button>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-3xl"
          >
            <HiMenuAlt3 />
          </button>

        </div>

      </motion.nav>

      {/* Mobile Sidebar */}

      <AnimatePresence>

        {menuOpen && (

          <>
            {/* Background Blur */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}

            <motion.div
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              exit={{ x: 350 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[340px] bg-white/15 backdrop-blur-3xl border-l border-white/20 shadow-[0_0_40px_rgba(0,0,0,.25)] z-50 flex flex-col"
            >

              {/* Header */}

              <div className="flex items-center justify-between p-6 border-b border-white/20">

                <div className="flex items-center gap-3">

                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-white text-xl">

                    <FaFilePdf />

                  </div>

                  <div>

                    <h2 className="font-bold text-xl">
                      PDFly
                    </h2>

                    <p className="text-xs text-gray-500">
                      AI Powered PDF Tools
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl p-2 rounded-full hover:bg-white/20 transition"
                >
                  <HiX />
                </button>

              </div>

              {/* Navigation */}

              <div className="flex-1 px-6 py-8 flex flex-col gap-3">

                {navItems.map((item, index) => (

                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl text-gray-800 font-medium hover:bg-white/20 hover:text-purple-600 transition-all duration-300"
                  >

                    <span className="text-xl">

                      {item.icon}

                    </span>

                    {item.title}

                  </motion.a>

                ))}

              </div>

              {/* Bottom Section */}

              <div className="border-t p-6">

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl font-medium hover:bg-white/20 transition"
                >
                  Login
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-3 mt-4 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 text-white font-semibold shadow-xl"
                >
                  Get Started
                </motion.button>

                <div className="mt-8 text-center">

                  <p className="text-sm text-gray-500">
                    PDFly v1.0
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    Made with ❤️ by PDFly
                  </p>

                </div>

              </div>

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </>

  );

}

export default Navbar;
