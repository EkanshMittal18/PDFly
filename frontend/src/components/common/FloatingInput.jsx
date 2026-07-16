import { Eye, EyeOff, Lock } from "lucide-react";

function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  showPassword = false,
  togglePassword,
}) {
  return (
    <div className="relative w-full">

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="new-password"
        className="
          peer
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-12
          pr-16
          pt-5
          pb-3
          text-base
          outline-none
          transition-all
          duration-300
          focus:border-violet-600
          focus:ring-4
          focus:ring-violet-100
          appearance-none
        "
      />

      {/* Left Lock Icon */}
      <Lock
        size={18}
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        transition-colors
        peer-focus:text-violet-600
        "
      />

      {/* Floating Label */}
      <label
        className="
          absolute
          left-11
          top-1/2
          -translate-y-1/2
          bg-white
          px-2
          text-gray-500
          pointer-events-none
          transition-all
          duration-200

          peer-focus:-top-0
          peer-focus:-translate-y-1/2
          peer-focus:text-xs
          peer-focus:text-violet-600

          peer-not-placeholder-shown:-top-0
          peer-not-placeholder-shown:-translate-y-1/2
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>

      {/* Eye Icon */}
      {togglePassword && (
        <button
          type="button"
          onClick={togglePassword}
          
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            z-20
            text-gray-400
            hover:text-violet-600
            transition-colors
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      )}

    </div>
  );
}

export default FloatingInput;