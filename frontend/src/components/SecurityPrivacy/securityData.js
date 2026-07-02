import {
  FaCloudUploadAlt,
  FaLock,
  FaRobot,
  FaTrashAlt,
  FaDownload,
  FaShieldAlt,
  FaCloud,
  FaUserShield,
} from "react-icons/fa";

import { MdSecurity } from "react-icons/md";

import { RiFileShield2Fill } from "react-icons/ri";


// =========================
// Timeline Data
// =========================

export const timelineSteps = [
  {
    id: 1,
    title: "Upload File",
    description: "Upload your PDF securely to PDFly.",
    icon: FaCloudUploadAlt,
    color: "from-blue-500 to-cyan-500",
  },

  {
    id: 2,
    title: "Encrypt File",
    description: "Your file is encrypted using 256-bit SSL encryption.",
    icon: FaLock,
    color: "from-purple-500 to-violet-600",
  },

  {
    id: 3,
    title: "AI Processing",
    description: "AI securely processes your document.",
    icon: FaRobot,
    color: "from-pink-500 to-purple-500",
  },

  {
    id: 4,
    title: "Auto Delete",
    description: "Files are automatically deleted after processing.",
    icon: FaTrashAlt,
    color: "from-red-500 to-orange-500",
  },

  {
    id: 5,
    title: "Download Result",
    description: "Download your secured PDF instantly.",
    icon: FaDownload,
    color: "from-green-500 to-emerald-500",
  },
];


// =========================
// Dashboard Data
// =========================

export const dashboardItems = [

  {
    title: "Encryption",
    description: "256-bit SSL Encryption",
    icon: FaLock,
    status: "ON",
    active: true,
  },

  {
    title: "Auto Delete",
    description: "Files deleted after processing",
    icon: FaTrashAlt,
    status: "ON",
    active: true,
  },

  {
    title: "Secure Cloud",
    description: "Protected cloud processing",
    icon: FaCloud,
    status: "ON",
    active: true,
  },

  {
    title: "GDPR Compliant",
    description: "We follow global standards",
    icon: MdSecurity,
    status: "ON",
    active: true,
  },

  {
    title: "Files Stored",
    description: "We don't store your files",
    icon: RiFileShield2Fill,
    status: "NO",
    active: false,
  },

];


// =========================
// Trust Ribbon
// =========================

export const trustItems = [

  {
    title: "256-bit SSL",
    subtitle: "Bank-level encryption",
    icon: FaShieldAlt,
  },

  {
    title: "Auto Delete",
    subtitle: "Files removed instantly",
    icon: FaTrashAlt,
  },

  {
    title: "Zero Data Selling",
    subtitle: "Your data is never sold",
    icon: FaUserShield,
  },

  {
    title: "Secure Cloud",
    subtitle: "Protected servers",
    icon: FaCloud,
  },

  {
    title: "GDPR Ready",
    subtitle: "Global privacy standards",
    icon: MdSecurity,
  },

];