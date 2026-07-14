import toast from "react-hot-toast";
import Footer from "../../components/Footer/Footer";
import Advertisement from "../../components/Advertisement/Advertisement";
import { toolDetails } from "../../data/toolDetails";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ToolHeader from "../../components/ToolPage/ToolHeader/ToolHeader";
import Stats from "../../components/ToolPage/Stats/Stats";
import FileList from "../../components/ToolPage/FileList/FileList";
import ActionButton from "../../components/ToolPage/ActionButton/ActionButton";
import UploadZone from "../../components/ToolPage/UploadZone/UploadZone";
import {
  mergePDF,
  splitPDF,
  compressPDF,
  rotatePDF,
  imageToPDF,
  watermarkPDF,
  pdfToImage,
} from "../../services/pdf.service";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/ToolPage/Breadcrumb/Breadcrumb";

function ToolPage() {
  const { slug } = useParams();


  const tool = toolDetails[slug];
  const [files, setFiles] = useState([]);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateFile, setDuplicateFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [rotation, setRotation] = useState(90);
  const [watermark, setWatermark] = useState("");
  const [outputFileName, setOutputFileName] = useState("");

  if (!tool) {
    return <h1>Tool Not Found</h1>;
  }



  {/*const [isLoading, setIsLoading] = useState(false);*/}

  const validateFileName = () => {
if (!outputFileName.trim()) {
  return true;
}

if (/[\\/:*?"<>|]/.test(outputFileName)) {
  toast.error(
    'File name cannot contain \\ / : * ? " < > |'
  );
  return false;
}

return true;
};
  const handleAddDuplicate = () => {

    setFiles((prev) => [
      ...prev,
      duplicateFile
    ]);

    setShowDuplicateModal(false);

    setDuplicateFile(null);

  };
  const handleMergePDF = async () => {
    if (!validateFileName()) return;
    if (files.length < 2) {
      toast.error("Please select at least 2 PDF files.");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Merge Started...");

      const blob = await mergePDF(files);

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      const fileName =
  outputFileName.trim() || `merged_${Date.now()}`;

a.download = fileName.endsWith(".pdf")
  ? fileName
  : `${fileName}.pdf`;

      document.body.appendChild(a);
      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

      toast.success("Your merged PDF is ready!");
      setOutputFileName("");
      setIsLoading(false);

    } catch (error) {
  console.error("Merge Error:", error);
  console.error("Response:", error.response);
  console.error("Data:", error.response?.data);

  setIsLoading(false);

  toast.error(error.message);
}
  };
  const handleSplitPDF = async () => {
    if (!validateFileName()) return;

    if (files.length < 1) {
      toast.error("Please select a PDF.");
      return;
    }

    if (startPage > endPage) {
      toast.error("Invalid page range.");
      return;
    }

    setIsLoading(true);

    try {

      const blob = await splitPDF(
        files[0],
        startPage,
        endPage
      );

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      const fileName =
  outputFileName.trim() || `split_${Date.now()}`;

a.download = fileName.endsWith(".pdf")
  ? fileName
  : `${fileName}.pdf`;

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

      toast.success("PDF Split Successfully ✅");
      setOutputFileName("");

    } catch (error) {

      toast.error("Split Failed ❌");

    } finally {

      setIsLoading(false);

    }

  };
  const handleCompressPDF = async () => {
    if (!validateFileName()) return;

    if (files.length < 1) {
      toast.error("Please select a PDF.");
      return;
    }

    setIsLoading(true);

    try {

      const blob = await compressPDF(
        files[0]
      );

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      const fileName =
  outputFileName.trim() || `compressed_${Date.now()}`;

a.download = fileName.endsWith(".pdf")
  ? fileName
  : `${fileName}.pdf`;

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

      toast.success("PDF Compressed Successfully ✅");
      setOutputFileName("");

    } catch (error) {

      toast.error("Compression Failed ❌");

    } finally {

      setIsLoading(false);

    }

  };
  const handleRotatePDF = async () => {
    if (!validateFileName()) return;
  if (files.length < 1) {
    toast.error("Please select a PDF.");
    return;
  }

  setIsLoading(true);

  try {
    const blob = await rotatePDF(files[0], rotation);

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const fileName =
  outputFileName.trim() || `rotated_${Date.now()}`;

a.download = fileName.endsWith(".pdf")
  ? fileName
  : `${fileName}.pdf`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

    toast.success("PDF Rotated Successfully ✅");
    setOutputFileName("");
  } catch (error) {
    toast.error("Rotation Failed ❌");
  } finally {
    setIsLoading(false);
  }
};
const handleImageToPDF = async () => {

  if (!validateFileName()) return;
  if (files.length < 1) {
    toast.error("Please select images.");
    return;
  }

  setIsLoading(true);

  try {
    const blob = await imageToPDF(files);

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
   const fileName =
  outputFileName.trim() || `images_${Date.now()}`;

a.download = fileName.endsWith(".pdf")
  ? fileName
  : `${fileName}.pdf`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

    toast.success("PDF Created Successfully ✅");
    setOutputFileName("");
  } catch (error) {
    toast.error("Conversion Failed ❌");
  } finally {
    setIsLoading(false);
  }
};

const handlePDFToImage = async () => {

  if (files.length < 1) {
    toast.error("Please select a PDF file.");
    return;
  }

  if (!validateFileName()) return;

  setIsLoading(true);

  try {

    const blob = await pdfToImage(files[0]);

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    const fileName =
      outputFileName.trim() || `images_${Date.now()}`;

    a.download = fileName.endsWith(".zip")
      ? fileName
      : `${fileName}.zip`;

    document.body.appendChild(a);

    a.click();

    a.remove();

    window.URL.revokeObjectURL(url);

    toast.success("Images downloaded successfully!");

    setOutputFileName("");

  } catch (error) {

    console.error(error);

    toast.error("Something went wrong.");

  } finally {

    setIsLoading(false);

  }

};
const handleWatermarkPDF = async () => {
  if (!validateFileName()) return;
  if (files.length < 1) {
    toast.error("Please select a PDF.");
    return;
  }

  if (!watermark.trim()) {
    toast.error("Please enter watermark text.");
    return;
  }

  setIsLoading(true);

  try {
    const blob = await watermarkPDF(files[0], watermark);

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const fileName =
  outputFileName.trim() || `watermarked_${Date.now()}`;

a.download = fileName.endsWith(".pdf")
  ? fileName
  : `${fileName}.pdf`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

    toast.success("Watermark Added Successfully ✅");
    setOutputFileName("");
  } catch (error) {
    toast.error("Watermark Failed ❌");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="relative min-h-screen bg-[#F8F5FF] px-4 sm:px-6 lg:px-12 pt-4 lg:pt-6 pb-8 overflow-hidden">

      <Navbar />

      <div className="max-w-7xl mx-auto py-8 lg:py-10">

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

        <Breadcrumb title={tool?.title} />


        <ToolHeader
          title={tool?.title}
          description={tool?.description}
        />

        {/* Main Content */}

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_0.9fr] gap-6 mt-10 items-start">

          {/* Left Side */}

          <div className="w-full">

            <UploadZone
            title={
  slug === "image-to-pdf"
    ? "Drag & Drop Images"
    : slug === "pdf-to-image"
    ? "Drag & Drop PDF File"
    : "Drag & Drop PDF Files"
}

description={
  slug === "image-to-pdf"
    ? "Upload your images here or click the button below."
    : slug === "pdf-to-image"
    ? "Upload your PDF here to convert every page into images."
    : "Upload your PDF files here or click the button below."
}

buttonText={
  slug === "image-to-pdf"
    ? "Select Images"
    : slug === "pdf-to-image"
    ? "Select PDF"
    : "Select PDF Files"
}

              isDragging={isDragging}
              tool={tool}
              files={files}
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

                const validFiles =
  slug === "image-to-pdf"
    ? droppedFiles.filter((file) =>
        file.type.startsWith("image/")
      )
    : droppedFiles.filter(
        (file) => file.type === "application/pdf"
      );

                if (slug === "merge-pdf"||
                  slug === "image-to-pdf"
                ) {
                  setFiles((prev) => [...prev, ...validFiles]);
                } else {
                  setFiles(validFiles.slice(0, 1));
                }
              }}
              onFileChange={(e) => {
                const selectedFiles = Array.from(e.target.files);

                const validFiles =
  slug === "image-to-pdf"
    ? selectedFiles.filter((file) =>
        file.type.startsWith("image/")
      )
    : selectedFiles.filter(
        (file) => file.type === "application/pdf"
      );

                const duplicate = selectedFiles.find((newFile) =>
                  files.some(
                    (file) =>
                      file.name === newFile.name &&
                      file.size === newFile.size &&
                      file.lastModified === newFile.lastModified
                  )
                );

                if (duplicate) {
                  setDuplicateFile(duplicate);
                  setShowDuplicateModal(true);
                  return;
                }

                if (slug === "merge-pdf"||slug === "image-to-pdf") {
                  setFiles((prevFiles) => [
                    ...prevFiles,
                    ...validFiles
                  ]);
                } else {
                  setFiles(validFiles.slice(0, 1));
                }

                e.target.value = null;
              }}
            />
            <Stats files={files} />
            {/* Uploaded Files */}

            <FileList files={files} setFiles={setFiles} />

            {slug === "split-pdf" && (
              <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="mb-4 text-lg font-semibold">
                  Select Page Range
                </h3>

                <div className="grid grid-cols-2 gap-4">

                  <div>

                    <label className="mb-2 block text-sm font-medium">
                      From Page
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={startPage}
                      onChange={(e) =>
                        setStartPage(Number(e.target.value))
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-medium">
                      To Page
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={endPage}
                      onChange={(e) =>
                        setEndPage(Number(e.target.value))
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                    />

                  </div>

                </div>

              </div>
            )}
            {slug === "rotate-pdf" && (
  <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">

    <h3 className="mb-4 text-lg font-semibold">
      Select Rotation
    </h3>

    <div className="flex gap-4">

      {[90, 180, 270].map((value) => (

        <button
          key={value}
          onClick={() => setRotation(value)}
          className={`rounded-xl border px-5 py-3 transition ${
            rotation === value
              ? "border-violet-600 bg-violet-600 text-white"
              : "border-gray-300"
          }`}
        >
          {value}°
        </button>

      ))}

    </div>

  </div>
)}
{slug === "watermark-pdf" && (
  <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">

    <h3 className="mb-4 text-lg font-semibold">
      Watermark Text
    </h3>

    <input
      type="text"
      value={watermark}
      onChange={(e) => setWatermark(e.target.value)}
      placeholder="Enter watermark (Example: CONFIDENTIAL)"
      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
    />

  </div>
)}

<div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">

  <h3 className="mb-3 text-lg font-semibold">
    Output File Name
  </h3>

  <input
    type="text"
    value={outputFileName}
    onChange={(e) => setOutputFileName(e.target.value)}
    placeholder="Leave blank to auto generate"
    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
  />

  <p className="mt-2 text-sm text-gray-500">
    💡 Leave blank to automatically generate a unique filename.
  </p>

</div>

<ActionButton
  slug={slug}
  files={files}
  actionButton={tool?.actionButton}
  onClick={
    slug === "merge-pdf"
      ? handleMergePDF
      : slug === "split-pdf"
      ? handleSplitPDF
      : slug === "compress-pdf"
      ? handleCompressPDF
      : slug === "rotate-pdf"
      ? handleRotatePDF
      : slug === "image-to-pdf"
      ? handleImageToPDF
      : slug === "pdf-to-image"
      ? handlePDFToImage
      : slug === "watermark-pdf"
      ? handleWatermarkPDF
      : () => {}
  }
  isLoading={isLoading}
/>
            <Advertisement />
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
        <Footer />

      </div>

    </div>



  );


}

export default ToolPage;
