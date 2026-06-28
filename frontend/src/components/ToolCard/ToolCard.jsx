import { useNavigate } from "react-router-dom";
import {
  FaFilePdf,
  FaFileWord,
  FaLock,
  FaUnlock,
  FaComments,
  FaProjectDiagram,
  FaTint,
} from "react-icons/fa";

import {
  MdCompress,
  MdImage,
  MdCallSplit,
} from "react-icons/md";
import { BsStars } from "react-icons/bs";

function ToolCard({ title, description, color, icon, slug }) {
  const navigate = useNavigate();

  let IconComponent = FaFilePdf;

switch (icon) {
  case "merge":
    IconComponent = FaFilePdf;
    break;

  case "split":
    IconComponent = MdCallSplit;
    break;

  case "compress":
    IconComponent = MdCompress;
    break;

  case "word":
    IconComponent = FaFileWord;
    break;

  case "image":
    IconComponent = MdImage;
    break;

  case "pdfimage":
  IconComponent = MdImage;
  break;


  case "protect":
    IconComponent = FaLock;
    break;

  case "unlock":
    IconComponent = FaUnlock;
    break;

  case "chat":
    IconComponent = FaComments;
    break;

  case "summary":
    IconComponent = BsStars;
    break;

  case "watermark":
  IconComponent = FaTint;
  break;

  case "mindmap":
  IconComponent = FaProjectDiagram;
  break;

  default:
    IconComponent = FaFilePdf;
}


  return (
    <div  onClick={() => navigate(`/tools/${slug}`)} className="bg-white p-3 rounded-3xl border border-gray-100 hover:shadow-x1 hover:-translate-y-2 transition-all duration-300 cursor-pointer min-h-[50px]">

      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${color}`}>
         <IconComponent className="text-xl" />
      </div>

      <h3 className="font-semibold text-base mt-1">
        {title}
      </h3>

      <p className="text-xs text-gray-500 mt-2 leading-4">
        {description}
      </p>

    </div>
  );
}

export default ToolCard;