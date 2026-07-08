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
  MdRotateRight,
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

    case "rotate":
      IconComponent = MdRotateRight;
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
  <div 
   onClick={() => navigate(`/tools/${slug}`)}
  className="group bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-purple-200 transition-all duration-300 cursor-pointer min-h-[210px] flex flex-col">

  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} group-hover:scale-110 transition-all duration-300`}>
    <IconComponent className="text-2xl" />
  </div>

  <h3 className="font-bold text-lg mt-5 text-gray-900">
    {title}
  </h3>

  <p className="text-sm text-gray-500 mt-3 leading-6 flex-grow">
    {description}
  </p>

  <div className="mt-5 flex justify-end">
  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
    →
  </div>
</div>

</div>
  );
}

export default ToolCard;