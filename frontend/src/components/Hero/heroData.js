import {
  FaRobot,
  FaRegFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  TbNotes,
} from "react-icons/tb";

import {
  BsQuestionCircle,
} from "react-icons/bs";

import {
  MdTranslate,
} from "react-icons/md";

export const dashboardTools = [
  {
    title: "Chat with PDF",
    icon: FaRobot,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "AI Summary",
    icon: FaRegFileAlt,
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    title: "PDF Mind Map",
    icon: FaProjectDiagram,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Notes",
    icon: TbNotes,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Q&A",
    icon: BsQuestionCircle,
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Translate PDF",
    icon: MdTranslate,
    color: "from-orange-500 to-pink-500",
  },
];

export const floatingCards = [
  {
    title: "AI Summary",
    subtitle: "Generate in seconds",
    icon: FaRegFileAlt,
    color: "from-pink-500 to-fuchsia-500",
    position: "top",
  },
  {
    title: "Chat PDF",
    subtitle: "Ask anything",
    icon: FaRobot,
    color: "from-violet-500 to-purple-600",
    position: "left",
  },
  {
    title: "Mind Map",
    subtitle: "Visual learning",
    icon: FaProjectDiagram,
    color: "from-blue-500 to-cyan-500",
    position: "bottom",
  },
];

export const heroStats = [
  {
    title: "100% Secure",
    icon: "🛡️",
  },
  {
    title: "AI Powered",
    icon: "⚡",
  },
  {
    title: "Save Time",
    icon: "🕒",
  },
];