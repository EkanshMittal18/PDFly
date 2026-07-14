import { UploadCloud } from "lucide-react";

const UploadZone = ({
  title = "Drag & Drop PDF Files",
  description = "Upload your PDF files here or click the button below.",
  buttonText = "Select PDF Files",
  multiple = true,
  accept = ".pdf",
  onFileChange,
}) => {
  return (
    <div className="w-full rounded-3xl border-2 border-dashed border-violet-300 bg-white px-6 py-6 lg:px-8 lg:py-7 transition-all duration-300 hover:border-violet-500 hover:shadow-xl">

      {/* Upload Icon */}
      <div className="flex justify-center">
        <div className="mx-auto w-fit rounded-full bg-violet-100 p-3">
          <UploadCloud
            size={32}
            className="text-violet-600"
          />
        </div>
      </div>

      {/* Heading */}
      <h2 className="mt-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
        {title}
      </h2>

      {/* Description */}
      <p className="mx-auto mt-2 max-w-md lg:max-w-xl text-center text-sm lg:text-base text-gray-500">
        {description}
      </p>

      {/* Choose Button */}
      <div className="mt-5 flex justify-center">

        <label
          className="
          cursor-pointer
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-600
          px-7
          py-3
          font-semibold
          text-white
          transition
          hover:scale-105
          "
        >
          {buttonText}

          <input
            hidden
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={onFileChange}
          />
        </label>

      </div>

      {/* Bottom Info */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-500">

        <span className="rounded-full bg-violet-50 px-3 py-1">
  {accept === "image/*"
    ? "🖼 JPG, PNG, WEBP"
    : "📄 PDF Only"}
</span>

<span className="rounded-full bg-violet-50 px-3 py-1">
  {multiple
    ? "📂 Multiple Files"
    : "📄 Single File"}
</span>



      </div>

    </div>
  );
};

export default UploadZone;