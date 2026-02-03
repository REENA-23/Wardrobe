import { useState } from "react";
import { FaHeart, FaShareAlt, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import SizeChartDrawer from "./SizeChartDrawer";

export default function AddToCart() {
  const [openSizeChart, setOpenSizeChart] = useState(false);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = [
    "#0093C3",
    "#66E7F2",
    "#2DBE60",
    "#FFA94D",
    "#EC4899",
    "#1E3A8A",
  ];

  return (
    <div className="bg-white px-4 md:px-6 py-8 max-w-[1400px] mx-auto">
      {/* BREADCRUMB */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Dresses / Butterfly Cotton Frock
      </p>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[654px_1fr] gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col">
          {/* IMAGE ROW */}
          <div className="flex gap-6">
            {/* THUMBNAILS */}
            <div className="hidden md:flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-[100px] h-[106px] border rounded" />
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="relative w-full max-w-[554px] h-[420px] sm:h-[520px] md:h-[583px] bg-gray-100 rounded">
              <div className="absolute top-4 right-4 flex items-center gap-1 text-sm bg-white px-2 py-1 rounded shadow">
                <FaStar className="text-orange-500" />
                <span className="font-medium">4.2</span>
                <span className="text-gray-400">1.2k</span>
              </div>
            </div>
          </div>

          {/* PURPLE BAR */}
          <div className="mt-5 w-full max-w-[650px] bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-lg py-6 text-center">
            <p className="font-aboreto tracking-widest text-[24px] sm:text-[28px] md:text-[36px]">
              SEE YOURSELF IN…..STYLE
            </p>
            <p className="underline text-sm mt-1">Instantly Try Clothes</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold mb-3">
            Butterfly Cotton Frock
          </h1>

          {/* PRICE */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-orange-500 text-[24px] font-semibold">
              Rs 2000
            </span>
            <span className="line-through text-gray-400">Rs 4500</span>
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
              Rs 2500 off
            </span>
          </div>

          {/* COLOR */}
          <div className="mb-10">
            <p className="text-[18px] mb-2">Select Colour</p>
            <div className="flex gap-3 flex-wrap">
              {colors.map((c, i) => (
                <div
                  key={i}
                  style={{ background: c }}
                  className="w-[22px] h-[22px] rounded border"
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[18px]">Select Size</p>
              <button
                onClick={() => setOpenSizeChart(true)}
                className="text-sm underline"
              >
                Check Size Chart
              </button>
            </div>

            <div className="flex gap-3 flex-wrap">
              {sizes.map((s) => (
                <button
                  key={s}
                  className="px-5 py-2 border rounded text-sm hover:border-orange-500 hover:text-orange-500"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* MATERIAL */}
          <div className="mb-8">
            <p className="text-[18px] font-medium">Material</p>
            <p className="text-sm text-gray-500">Rayon</p>
          </div>

          {/* VIRTUAL TRY ON */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-lg py-6 text-center mb-5">
            <p className="text-[24px] sm:text-[28px] md:text-[36px] font-aboreto tracking-wide">
              VIRTUAL TRY-ON
            </p>
            <p className="text-sm underline">
              see how you look in your selected items
            </p>
          </div>

          {/* ADD TO BAG */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <button className="flex-1 min-w-[220px] bg-orange-500 text-white py-3 rounded">
              Add to Bag
            </button>

            <button className="group w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-black hover:border-black">
              <FaHeart className="text-black group-hover:text-white" />
            </button>

            <button className="group w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-black hover:border-black">
              <FaShareAlt className="text-black group-hover:text-white" />
            </button>
          </div>

          {/* DELIVERY */}
          <div>
            <p className="text-[18px] font-medium mb-2">Delivery To</p>
            <div className="h-[45px] flex items-center border rounded px-3">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                className="flex-1 outline-none text-sm"
                placeholder="Pincode"
              />
              <button className="text-orange-500 text-sm">Check</button>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mt-2">
              <p className="text-xs text-gray-500">
                Delivery by 12 Jun, Thursday
              </p>
              <p className="text-xs text-red-500">
                Save 20% on Your Purchase Today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SIZE CHART DRAWER */}
      <SizeChartDrawer
        open={openSizeChart}
        onClose={() => setOpenSizeChart(false)}
      />
    </div>
  );
}
