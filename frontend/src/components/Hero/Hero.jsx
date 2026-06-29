import { FaRobot } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineAutoGraph, MdTranslate } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-5 sm:px-6 lg:px-10 xl:px-20 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
<div className="absolute right-0 top-0 w-64 h-64 sm:w-80 sm:h-80 bg-purple-300/30 blur-[120px] rounded-full"></div>
<div className="absolute left-0 bottom-0 w-52 sm:w-60 h-52 sm:h-60 bg-pink-300/20 blur-[100px] rounded-full"></div>
      {/* Left Side */}
      <div className="w-full lg:max-w-[560px] text-center lg:text-left z-10">
        <p className="text-purple-600 font-medium mb-4">
          Next Generation PDF Platform
        </p>

       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
        Smart PDF Tools.
        <br />
        <span className="text-purple-600">
          Powered by AI.
        </span>
      </h1>
<p className="mt-6 text-gray-600 text-base sm:text-lg lg:text-xl leading-8">
        Summarize, chat, convert, edit and secure your PDFs.
        All in one intelligent platform.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
        <button className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white w-full sm:w-auto px-8 py-4 rounded-full hover:scale-110 hover:shadow-xl transition-all duration-300">
          Start Free
        </button>

        <button className="bg-white w-full sm:w-auto px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Explore Features
        </button> 
      </div>

    </div>

    {/* Dashboard Wrapper */ }
    <div className="relative w-full flex justify-center lg:justify-end overflow-hidden">

      {/* Dashboard */ }
      < div className="bg-white/80 backdrop-blur-xl border border-white/40 w-full max-w-[95%] sm:max-w-lg lg:max-w-[560px] rounded-[32px] shadow-[0_20px_60px_rgba(139,92,246,0.15)] p-5">

      <h2 className="text-2xl font-bold">
        PDFly AI Dashboard
      </h2>

      <p className="text-gray-500 mt-2">
        How can I help you today?
      </p>

      <div className="mt-5">
        <input
          type="text"
          placeholder="Ask anything about your PDF..."
          className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-purple-500"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">

        <div className="border border-gray-100 rounded-2xl p-3 h-24 bg-white hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <FaRobot className="text-purple-600 text-lg mb-2" />
          <h3 className="font-medium text-sm">Chat with PDF</h3>
        </div>

        <div className="border border-gray-100 rounded-2xl p-3 h-24 bg-white hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <HiOutlineDocumentText className="text-purple-600 text-lg mb-2" />
          <h3 className="font-medium text-sm">AI Summary</h3>
        </div>

        <div className="border border-gray-100 rounded-2xl p-3 h-24 bg-white hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <MdOutlineAutoGraph className="text-purple-600 text-lg mb-2" />
          <h3 className="font-medium text-sm">PDF Mind Map</h3>
        </div>

        <div className="border border-gray-100 rounded-2xl p-3 h-24 bg-white hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <TbNotes className="text-purple-600 text-lg mb-2" />
          <h3 className="font-medium text-sm">AI Notes</h3>
        </div>

        <div className="border border-gray-100 rounded-2xl p-3 h-24 bg-white hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <BsQuestionCircle className="text-purple-600 text-lg mb-2" />
          <h3 className="font-medium text-sm">AI Q&A</h3>
        </div>

        <div className="border border-gray-100 rounded-2xl p-3 h-24 bg-white hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <MdTranslate className="text-purple-600 text-lg mb-2" />
          <h3 className="font-medium text-sm">Translate PDF</h3>
        </div>

      </div>

    </div>

    {/* Floating Cards */ }
    < div className="hidden lg:flex absolute top-4 right-4 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-2xl shadow-xl items-center">
      ✨ AI Summary
    </div>

    <div className="hidden lg:flex absolute top-[66%] left-2 -translate-y-1/2 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl items-center gap-2 z-20">
      🤖 Chat with PDF
    </div>

    <div className="hidden lg:flex absolute bottom-2 right-8 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl items-center">
      🧠 PDF Mind Map
    </div>

  </div>

    </section >
  );
}

export default Hero;