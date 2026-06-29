import { FaFilePdf } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="flex gap-4">
        <button className="px-5 py-2 border rounded-full">
          Login
        </button>

        <button className="px-5 py-2 bg-purple-600 text-white rounded-full">
          Get Started
        </button>
      </div>

{menuOpen && (
  <>
    {/* Blur Background */}

    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
    />

    {/* Sidebar */}

    <div className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 p-8 flex flex-col">

      <button
        onClick={() => setMenuOpen(false)}
        className="self-end text-4xl"
      >
        <HiX />
      </button>

      <div className="flex flex-col gap-8 mt-10 text-lg">

        <a href="/">Home</a>

        <a href="/tools">Tools</a>

        <a href="/ai">AI Features</a>

        <a href="/contact">Contact</a>

      </div>

      <div className="mt-auto flex flex-col gap-4">

        <button className="border rounded-full py-3">
          Login
        </button>

        <button className="bg-purple-600 text-white rounded-full py-3">
          Get Started
        </button>

      </div>

    </div>
  </>
)}
    </nav>
  );
}

export default Navbar;