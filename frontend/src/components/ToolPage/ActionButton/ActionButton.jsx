import { Loader2 } from "lucide-react";
function ActionButton({
  slug,
  files,
  actionButton,
  onClick,
  isLoading,
}) {
  return (
    <div className="mt-4">

      <button
        onClick={onClick}
        disabled={
          isLoading ||
            (slug === "merge-pdf"
            ? files.length < 2
            : files.length < 1)
        }
        className={`w-full rounded-2xl py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-lg transition-all duration-300  ${(slug === "merge-pdf"
          ? files.length < 2
          : files.length < 1)
          ? "cursor-not-allowed bg-gray-200 text-gray-400"
          : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:scale-[1.01] hover:shadow-xl"
          }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2 animate-pulse">

            <Loader2
              size={20}
              className="animate-spin"
            />

            {
  slug === "merge-pdf"
    ? "Merging PDFs..."
    : slug === "split-pdf"
    ? "Splitting PDF..."
    : slug === "compress-pdf"
    ? "Compressing PDF..."
    : slug === "rotate-pdf"
    ? "Rotating PDF..."
    : slug === "image-to-pdf"
    ? "Creating PDF..."
    : slug === "watermark-pdf"
    ? "Adding Watermark..."
    : "Processing..."
}

          </span>
        ) : (
          actionButton
        )}
      </button>
      <p className="mt-3 text-center text-sm text-gray-500">
        🔒 Your files are secure and will be deleted after processing.
      </p>

    </div>
  );
}

export default ActionButton;