import { FiX } from "react-icons/fi";
import ProductCard from "../home-pages/ProductCard"; 


export default function WishlistDrawer({ onClose }) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className="
          fixed top-0 right-0 h-full
          w-full sm:w-[80%] md:w-[60%] lg:w-[40%]
          bg-white z-50 shadow-xl
          transition-transform duration-300
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg md:text-xl font-medium">
            My Shortlist
          </h2>
          <button onClick={onClose}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="h-full overflow-y-auto px-4 md:px-6 py-6">
          
          {/* GRID – EXACTLY LIKE FIGMA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard />
            <ProductCard />
          </div>

        </div>
      </div>
    </>
  );
}
