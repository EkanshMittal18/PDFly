import { FaCloudUploadAlt, FaDownload } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export const steps = [
  {
    number: "01",
    title: "Upload PDF",
    description:
      "Upload your PDF securely in just one click. Your files remain private and protected.",
    icon: FaCloudUploadAlt,
    color: "from-violet-500 to-purple-600",
  },

  {
    number: "02",
    title: "AI Processing",
    description:
      "Our AI instantly analyzes, summarizes, translates, or edits your PDF in seconds.",
    icon: BsStars,
    color: "from-pink-500 to-fuchsia-500",
  },

  {
    number: "03",
    title: "Download Result",
    description:
      "Preview and download your processed PDF instantly with high quality output.",
    icon: FaDownload,
    color: "from-cyan-500 to-blue-500",
  },
];