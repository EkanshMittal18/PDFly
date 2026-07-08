function Advertisement() {
  return (
    <div className="mt-8">

      {/* Heading */}
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
        Advertisement
      </p>

      {/* Ad Box */}
      <div className="flex h-[110px] w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white shadow-sm">

        <div className="text-center">

          <p className="text-lg font-semibold text-gray-700">
            Google AdSense Banner
          </p>

          <p className="mt-1 text-sm text-gray-400">
            728 × 90 Responsive Advertisement
          </p>

        </div>

      </div>

    </div>
  );
}

export default Advertisement;