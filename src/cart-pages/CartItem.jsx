import {
  FiMinus,
  FiPlus,
  FiShare2,
  FiX,
  FiHeart,
} from "react-icons/fi";

export default function CartItem() {
  return (
    <div className="relative flex gap-4 md:gap-6">

      {/* PRODUCT IMAGE */}
      <div className="w-[100px] h-[120px] md:w-[120px] md:h-[140px] border rounded-md bg-gray-100" />

      {/* PRODUCT DETAILS */}
      <div className="flex-1">

        {/* TITLE + SHARE */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm md:text-base font-normal">
              Butterfly Cotton Frock
            </h3>

            {/* PRICE */}
            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className="text-base font-medium">₹2000</span>
              <span className="line-through text-gray-400">₹4500</span>
              <span className="text-orange-500 text-xs">2500 off</span>
            </div>

            {/* OFFER */}
            <p className="text-red-500 text-xs mt-1">
              Save 20% on Your Purchase Today.
            </p>
          </div>

          {/* SHARE + HOVER ICONS */}
          <div className="relative group">
            {/* SHARE (always visible) */}
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <FiShare2 size={16} />
            </button>

            {/* HOVER ICONS */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
              <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                <FiX size={16} />
              </button>
              <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                <FiHeart size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* DELIVERY */}
        <div className="mt-2 text-xs text-gray-600 flex justify-end gap-2">
          <span>Delivery by 12 Jun, Thursday</span>
          <span className="text-green-600 font-medium">Free</span>
          <span className="line-through text-gray-400">₹60</span>
        </div>

        {/* SIZE */}
        <p className="text-sm mt-3">
          Size : <span className="font-medium">S</span>
        </p>

        {/* COLOR */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm">Colour :</span>
          <span className="w-4 h-4 rounded-sm bg-sky-600 border" />
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-2 mt-3">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500">
            <FiMinus size={14} />
          </button>

          <span className="w-8 text-center">1</span>

          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500">
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
