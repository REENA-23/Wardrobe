import { useState } from "react";
import {
  FaHeart,
  FaShareAlt,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function AddToCart() {
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
    <div className="bg-white px-10 py-8 max-w-[1400px] mx-auto">

      {/* BREADCRUMB */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Dresses / Butterfly Cotton Frock
      </p>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-[auto_1fr] gap-12">

        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col">

          {/* THUMBNAILS + IMAGE */}
          <div className="flex gap-6">

            {/* THUMBNAILS */}
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[100px] h-[106px] border rounded
                  cursor-pointer hover:border-orange-500"
                />
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="relative w-[554px] h-[583px] bg-gray-100 rounded">

              {/* RATING */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-sm">
                <FaStar className="text-orange-500" />
                <span className="font-medium">4.2</span>
                <span className="text-gray-400">1.2k</span>
              </div>
            </div>
          </div>

          {/* PURPLE BAR — FULL LEFT WIDTH */}
          <div
            className="mt-6 w-full
            bg-gradient-to-r from-purple-700 to-purple-500
            text-white rounded-lg py-6 text-center"
          >
            <p className="tracking-widest text-lg">
              SEE YOURSELF IN…..STYLE
            </p>
            <p className="underline text-sm mt-1">
              Instantly Try Clothes
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold mb-2">
            Butterfly Cotton Frock
          </h1>

          {/* PRICE */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-orange-500 text-xl font-semibold">
              Rs 2000
            </span>
            <span className="line-through text-gray-400">
              Rs 4500
            </span>
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
              Rs 2500 off
            </span>
          </div>

          {/* COLOUR */}
          <div className="mb-6">
            <p className="text-sm mb-2">Select Colour</p>
            <div className="flex gap-3">
              {colors.map((c, i) => (
                <div
                  key={i}
                  style={{ background: c }}
                  className="w-[18px] h-[18px] rounded border cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">Select Size</p>
              <button className="text-sm underline text-gray-700">
                Check Size Chart
              </button>
            </div>

            <div className="flex gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  className="px-5 py-2 border rounded text-sm
                  hover:border-orange-500 hover:text-orange-500"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* MATERIAL */}
          <div className="mb-6">
            <p className="text-sm font-medium">Material</p>
            <p className="text-sm text-gray-500">Rayon</p>
          </div>

          {/* VIRTUAL TRY ON */}
          <div
            className="bg-gradient-to-r from-purple-700 to-purple-500
            text-white rounded-lg py-6 text-center mb-5"
          >
            <p className="text-lg tracking-wide">VIRTUAL TRY-ON</p>
            <p className="text-sm underline">
              see how you look in your selected items
            </p>
          </div>

          {/* ADD TO BAG */}
          <div className="flex gap-4 items-center mb-6">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded">
              Add to Bag
            </button>

            <button className="w-12 h-12 border rounded flex items-center justify-center">
              <FaHeart />
            </button>

            <button className="w-12 h-12 border rounded flex items-center justify-center">
              <FaShareAlt />
            </button>
          </div>

          {/* DELIVERY */}
          <div>
            <p className="text-sm font-medium mb-2">Delivery To</p>

            <div className="flex items-center border rounded px-3 py-2">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                placeholder="Pincode"
                className="flex-1 outline-none text-sm"
              />
              <button className="text-orange-500 text-sm font-medium">
                Check
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Delivery by 12 Jun, Thursday
            </p>

            <p className="text-xs text-red-500">
              Save 20% on Your Purchase Today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
