import {
  Files,
  HardDrive,
  ShieldCheck,
  Lock,
} from "lucide-react";

function Stats({ files }) {
  const totalSize = (
    files.reduce((total, file) => total + file.size, 0) /
    1024 /
    1024
  ).toFixed(2);

  return (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

    {/* Files */}
    <div className="bg-white rounded-2xl border border-gray-100 h-[100px] px-4 flex items-center shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 w-full">
        <div className="bg-violet-100 p-2.5 rounded-xl">
          <Files className="text-violet-600" size={20} />
        </div>

        <div>
          <p className="text-gray-500 text-xs">
            Files
          </p>

          <h3  className="text-xl font-bold leading-none mt-1">
            {files.length}
          </h3>
        </div>
      </div>
    </div>

    {/* Size */}

    <div className="bg-white rounded-2xl border border-gray-100 h-[100px] px-4 flex items-center shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 w-full">

        <div className="bg-green-100 p-2.5 rounded-xl">
          <HardDrive
            className="text-green-600"
            size={20}
          />
        </div>

        <div>

          <p className="text-gray-500 text-xs">
            Total Size
          </p>

          <h3  className="text-xl font-bold leading-none mt-1">
            {totalSize} MB
          </h3>

        </div>

      </div>
    </div>

    {/* Max Size */}

    <div className="bg-white rounded-2xl border border-gray-100 h-[100px] px-4 flex items-center shadow-sm hover:shadow-md transition">

      <div className="flex items-center gap-3 w-full">

        <div className="bg-orange-100 p-2.5 rounded-xl">

          <ShieldCheck
            className="text-orange-500"
            size={20}
          />

        </div>

        <div>

          <p className="text-gray-500 text-xs">
            Max File Size
          </p>

          <h3  className="text-xl font-bold leading-none mt-1">
            100 MB
          </h3>

        </div>

      </div>

    </div>

    {/* Secure */}

    <div className="bg-white rounded-2xl border border-gray-100 h-[100px] px-4 flex items-center shadow-sm hover:shadow-md transition">

      <div  className="flex items-center gap-4 w-full">

        <div className="bg-blue-100 p-2.5 rounded-xl">

          <Lock
            className="text-blue-600"
            size={20}
          />

        </div>

        <div>

          <p className="text-gray-500 text-xs">
            Secure
          </p>

          <h3  className="text-xl font-bold leading-none mt-1">
            Secure
          </h3>

        </div>

      </div>

    </div>

  </div>
);
}

export default Stats;