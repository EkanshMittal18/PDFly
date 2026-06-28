import { toolDetails } from "../../data/toolDetails";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ToolPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const tool = toolDetails[slug];
  if (!tool) {
    return <h1>Tool Not Found</h1>;
  }
  const [files, setFiles] = useState([]);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateFile, setDuplicateFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

const handleAddDuplicate = () => {

  setFiles((prev) => [
    ...prev,
    duplicateFile
  ]);

  setShowDuplicateModal(false);

  setDuplicateFile(null);

};

  return (
    <div className="relative min-h-screen bg-[#F8F5FF] px-12 py-10 overflow-hidden">

     



      
{showDuplicateModal && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl p-8 w-[450px] shadow-2xl">

      <h2 className="text-2xl font-bold mb-3">
        Duplicate File Detected
      </h2>

      <p className="text-gray-500">
        {duplicateFile?.name} is already uploaded.
      </p>

      <p className="text-gray-500 mt-2">
        Do you want to add it again?
      </p>

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => {
            setShowDuplicateModal(false);
            setDuplicateFile(null);
          }}
          className="px-5 py-2 border rounded-xl"
        >
          Cancel
        </button>

        <button
          onClick={handleAddDuplicate}
          className="px-5 py-2 bg-purple-600 text-white rounded-xl"
        >
          Add Again
        </button>

      </div>

    </div>

  </div>

)}
<div>

  <button 
  onClick={() => navigate("/")}
  className="text-purple-600 font-medium mb-4"
  >
    ← Back To Tools
  </button>

  <h1 className="text-5xl font-bold">
   {tool?.title}
  </h1>

  <p className="text-gray-500 mt-4 text-lg">
    {tool?.description}
  </p>

</div>


{/* Main Content */}

<div className="grid grid-cols-3 gap-8 mt-12">

  {/* Left Side */}

  <div className="col-span-2">

    {/* Upload Box */}

    <div
  onDragOver={(e) => {
    e.preventDefault();
    setIsDragging(true);
  }}
  onDragLeave={() => {
    setIsDragging(false);
  }}
  onDrop={(e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);

    const pdfFiles = droppedFiles.filter(
      (file) => file.type === "application/pdf"
    );

    setFiles((prev) => [...prev, ...pdfFiles]);
  }}
  className={`rounded-3xl border-2 border-dashed p-16 text-center shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-all ${
    isDragging
      ? "bg-purple-50 border-purple-600"
      : "bg-white border-purple-300"
  }`}
>
      <div className="text-6xl mb-4">
        📄
      </div>

      <h2 className="text-2xl font-semibold">
        {isDragging
  ? "Drop PDF Files Here"
  : "Drag & Drop PDF Files"}
      </h2>

      <p className="text-gray-500 mt-3">
        {tool?.uploadText}
      </p>

<input
  type="file"
  multiple
  accept=".pdf"
  id="pdfUpload"
  className="hidden"
  onChange={(e) => {
    console.log("FILE SELECTED");
  const selectedFiles = Array.from(e.target.files);

  const duplicate = selectedFiles.find((newFile) =>
    files.some(
      (file) =>
        file.name === newFile.name &&
        file.size === newFile.size &&
        file.lastModified === newFile.lastModified
    )
  );

  if (duplicate) {
    console.log("DUPLICATE DETECTED");
    setDuplicateFile(duplicate);
    setShowDuplicateModal(true);
    return;
  }

  setFiles((prevFiles) => [
    ...prevFiles,
    ...selectedFiles,
  ]);
  e.target.value = null;

}}
/>

      <button
  onClick={() =>
    document.getElementById("pdfUpload").click()
  }
  className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
>
  {files.length > 0
  ? "+ Add More Files"
  : "Select PDF Files"}
</button>

    </div>

<div className="grid grid-cols-2 gap-4 mt-6">

  <div className="bg-white rounded-2xl p-5 shadow-sm">

    <p className="text-gray-500 text-sm">
      Files Selected
    </p>

    <h3 className="text-3xl font-bold mt-2">
      {files.length}
    </h3>

  </div>

  <div className="bg-white rounded-2xl p-5 shadow-sm">

    <p className="text-gray-500 text-sm">
      Total Size
    </p>

    <h3 className="text-3xl font-bold mt-2">

      {(
        files.reduce(
          (total, file) => total + file.size,
          0
        ) /
        1024 /
        1024
      ).toFixed(2)}{" "}
      MB

    </h3>

  </div>

</div>

    {/* Uploaded Files */}

<div className="bg-white rounded-3xl p-6 mt-6">

  <h3 className="text-xl font-bold mb-4">
    Recent Files
  </h3>

  <div className="space-y-3">

  {files.length === 0 ? (

    <p className="text-gray-400">
      No files selected yet.
    </p>

  ) : (

    files.map((file, index) => (

  <div
    key={index}
    className="flex justify-between items-center border rounded-xl p-4 hover:bg-gray-50 transition"
  >

    <div>

      <p className="font-medium">
        📄 {file.name}
      </p>

      <p className="text-sm text-gray-500">
        {(file.size / 1024 / 1024).toFixed(2)} MB
      </p>

    </div>

    <button
      onClick={() =>
        setFiles(
          files.filter((_, i) => i !== index)
        )
      }
      className="text-red-500 hover:text-red-700 text-xl"
    >
      ✕
    </button>

  </div>

))

  )}

</div> 
</div>   {/* YE NAYA ADD KARNA HAI */}

<div className="bg-white rounded-3xl p-6 mt-6">

  <button
    disabled={
  slug === "merge-pdf"
    ? files.length < 2
    : files.length < 1
}
    className={`w-full py-4 rounded-2xl font-semibold text-lg transition ${
      files.length < 2
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-purple-600 text-white hover:bg-purple-700"
    }`}
  >
    {tool?.actionButton}
  </button>

</div>
</div>

 

  {/* Right Side */}

  <div>

    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h3 className="font-bold text-xl mb-6">
        {tool?.whyUse}
      </h3>

      <div className="space-y-5">

        <div className="space-y-5">

  {tool?.features?.map((feature, index) => (

    <div key={index}>

      <h4 className="font-semibold">
        {feature.title}
      </h4>

      <p className="text-gray-500 text-sm">
        {feature.description}
      </p>

    </div>

  ))}

</div>

      </div>

    </div>

  </div>

</div>

      </div>

    
  );

  
}

export default ToolPage;
