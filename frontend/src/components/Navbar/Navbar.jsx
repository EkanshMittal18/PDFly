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
  <div className="lg:hidden bg-white border-t mt-4 py-4 flex flex-col gap-5">

    <a href="/">Home</a>

    <a href="/tools">Tools</a>

    <a href="/ai">AI Features</a>

    <a href="/contact">Contact</a>

    <button className="border rounded-xl py-2">
      Login
    </button>

    <button className="bg-purple-600 text-white rounded-xl py-2">
      Get Started
    </button>

  </div>
)}

    </nav>
  );
}

export default Navbar;