export default function CproductCard() {
  return (
    <div className="w-[240px]">
      {/* IMAGE BOX */}
      <div className="relative h-[320px] bg-[#D1D5DB] rounded-xl overflow-hidden group">
        {/* BADGE */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-4 py-1 rounded-full z-10">
          40% OFF
        </span>

        {/* HOVER */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-5">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm">
            Add to cart
          </button>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-4">
        <p className="text-base">Dress</p>
        <div className="flex gap-3 text-sm">
          <span className="text-orange-500">Rs 2000</span>
          <span className="line-through text-gray-400">Rs 4000</span>
        </div>
      </div>
    </div>
  );
}
