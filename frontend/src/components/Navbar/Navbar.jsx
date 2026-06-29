import { FaFilePdf, FaHome, FaTools } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <nav className="sticky top-0 z-50 w-full py-4 px-12 flex items-center justify-between bg-[#F8F5FF]/80 backdrop-blur-xl">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaFilePdf className="text-purple-600 text-2xl" />

        <h1 className="text-2xl font-bold text-purple-700">
          PDFly
        </h1>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-3xl"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu */}
      <div className="hidden lg:flex items-center gap-10 font-medium bg-white px-8 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <a
          href="#"
          className="text-purple-600 font-semibold bg-purple-50 px-3 py-1.5 rounded-full">
          Home
        </a>

        <a href="#" className="hover:text-purple-600 transition-all duration-300">
          Tools
        </a>

        <a href="#" className="hover:text-purple-600 transition-all duration-300">
          AI Features
        </a>

        <a href="#" className="hover:text-purple-600 transition-all duration-300">
          How It Works
        </a>

        <a href="#" className="hover:text-purple-600 transition-all duration-300">
          Pricing
        </a>
      </div>

      {/* Buttons */}
      <div className="hidden lg:flex gap-4">
        <button className="px-5 py-2 border rounded-full">
          Login
        </button>

        <button className="px-5 py-2 bg-purple-600 text-white rounded-full">
          Get Started
        </button>
      </div>
      <>
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 h-screen w-80 bg-white z-50 shadow-2xl transition-transform duration-300 ${menuOpen
              ? "translate-x-0"
              : "translate-x-full"
            }`}
        >
          <div className="p-6 flex justify-between items-center border-b">

            <div className="flex items-center gap-2">

              <FaFilePdf className="text-purple-600 text-2xl" />

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
              className="text-3xl"
            >
              <HiX />
            </button>

          </div>

          <div className="p-6 flex flex-col gap-2">

            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition">
              <FaHome />
              Home
            </a>

            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition">
              <FaTools />
              Tools
            </a>

            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition">
              <MdOutlineAutoAwesome />
              AI Features
            </a>

            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition">
              <RiQuestionnaireLine />
              How It Works
            </a>

            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition">
              <IoPricetagOutline />
              Pricing
            </a>

          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 border-t">

            <button className="w-full border rounded-full py-3 font-medium">
              Login
            </button>

            <button className="w-full mt-3 bg-purple-600 text-white rounded-full py-3 font-medium">
              Get Started
            </button>

          </div>

        </div>
      </>
    </nav>
  );
}

export default Navbar;