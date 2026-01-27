import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function SearchOverlay({ onClose }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      {/* BLUR BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* SEARCH BAR */}
      <div className="fixed top-24 md:top-32 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[700px]">
        <div
          className={`flex items-center gap-3 px-5 h-[56px] md:h-[60px]
          rounded-full bg-white transition-all
          ${focused ? "border-2 border-orange-500" : "border border-gray-200"}`}
        >
          {/* Search Icon */}
          <FiSearch
            className={`text-lg ${
              focused ? "text-orange-500" : "text-gray-400"
            }`}
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search Here"
            value={value}
            autoFocus
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 outline-none text-sm md:text-base placeholder-gray-400"
          />

          {/* Clear */}
          {(focused || value) && (
            <button onClick={onClose}>
              <FiX className="text-xl text-gray-500" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
