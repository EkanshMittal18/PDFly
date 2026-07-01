import {
  FaComments,
  FaProjectDiagram,
  FaLock,
  FaUnlock,
  FaFilePdf,
  FaTint,
} from "react-icons/fa";

import {
  MdOutlineAutoGraph,
  MdTranslate,
  MdQuiz,
  MdCompress,
  MdCallSplit,
} from "react-icons/md";

import { TbNotes } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

export const features = [
  {
    title: "Chat with PDF",
    description: "Ask questions and get instant answers from your PDF using AI.",
    icon: FaComments,
    badge: "AI Powered",
    color: "from-purple-500 to-violet-600",
    slug: "chat-pdf",
    status: "available",
  },

  {
    title: "AI Summary",
    description: "Generate smart summaries in seconds with one click.",
    icon: BsStars,
    badge: "Popular",
    color: "from-pink-500 to-purple-500",
    slug: "summary",
    status: "available",
  },

  {
    title: "PDF Mind Map",
    description: "Visualize concepts and relationships from your PDFs.",
    icon: FaProjectDiagram,
    badge: "New",
    color: "from-indigo-500 to-purple-500",
    slug: "mind-map",
    status: "available",
  },

  {
    title: "AI Notes",
    description: "Automatically generate clean notes from any PDF.",
    icon: TbNotes,
    badge: "Coming Soon",
    color: "from-cyan-500 to-blue-500",
    slug: "notes",
    status: "coming",
  },

  {
    title: "Translate PDF",
    description: "Translate PDFs into multiple languages instantly.",
    icon: MdTranslate,
    badge: "AI Powered",
    color: "from-orange-500 to-pink-500",
    slug: "translate",
    status: "available",
  },

  {
    title: "AI Quiz",
    description: "Generate MCQs and practice questions from PDFs.",
    icon: MdQuiz,
    badge: "Coming Soon",
    color: "from-emerald-500 to-green-500",
    slug: "quiz",
    status: "coming",
  },

  {
    title: "Merge PDF",
    description: "Combine multiple PDFs into one document.",
    icon: FaFilePdf,
    badge: "PDF Tool",
    color: "from-red-500 to-pink-500",
    slug: "merge-pdf",
    status: "available",
  },

  {
    title: "Split PDF",
    description: "Split PDF pages in just one click.",
    icon: MdCallSplit,
    badge: "PDF Tool",
    color: "from-blue-500 to-indigo-500",
    slug: "split-pdf",
    status: "available",
  },

  {
    title: "Compress PDF",
    description: "Reduce PDF size without losing quality.",
    icon: MdCompress,
    badge: "Fast",
    color: "from-green-500 to-emerald-500",
    slug: "compress-pdf",
    status: "available",
  },

  {
    title: "Protect PDF",
    description: "Secure your PDF with password protection.",
    icon: FaLock,
    badge: "Secure",
    color: "from-yellow-500 to-orange-500",
    slug: "protect-pdf",
    status: "available",
  },

  {
    title: "Unlock PDF",
    description: "Remove password protection from PDFs safely.",
    icon: FaUnlock,
    badge: "Secure",
    color: "from-sky-500 to-cyan-500",
    slug: "unlock-pdf",
    status: "available",
  },

  {
    title: "Watermark PDF",
    description: "Add custom watermark to your PDF files.",
    icon: FaTint,
    badge: "PDF Tool",
    color: "from-fuchsia-500 to-purple-500",
    slug: "watermark-pdf",
    status: "available",
  },
];