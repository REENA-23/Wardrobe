import { useState } from "react";
import { FaHeart, FaShareAlt, FaTimes } from "react-icons/fa";

export default function AddToCart() {
  const [openSizeChart, setOpenSizeChart] = useState(false);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["#0093C3", "#66E7F2", "#2DBE60", "#FFA94D", "#EC4899", "#1E3A8A"];

  return (
    <div className="relative bg-white p-8 max-w-[1200px] mx-auto">

      {/* MAIN GRID */}
      <div className="grid grid-cols-[100px_1fr_1fr] gap-8">

        {/* LEFT THUMBNAILS */}
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[100px] h-[106px] border rounded
              cursor-pointer hover:border-orange-500 transition"
            />
          ))}
        </div>

        {/* IMAGE PREVIEW */}
        <div className="bg-gray-50 rounded h-[550px]" />

        {/* PRODUCT INFO */}
        <div>
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
                  className="w-[22px] h-[22px] rounded border
                  cursor-pointer hover:scale-110 transition"
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">Select Size</p>
              <button
                onClick={() => setOpenSizeChart(true)}
                className="text-sm underline text-gray-700"
              >
                Check Size Chart
              </button>
            </div>

            <div className="flex gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  className="px-5 py-2 border rounded text-sm
                  hover:border-orange-500 hover:text-orange-500 transition"
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

          {/* TRY ON */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-500
            text-white rounded-lg py-6 text-center mb-5">
            <p className="text-lg tracking-wide">VIRTUAL TRY-ON</p>
            <p className="text-sm underline">
              see how you look in your selected items
            </p>
          </div>

          {/* ADD TO BAG */}
          <div className="flex gap-4 items-center mb-6">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded
              hover:bg-orange-600 transition">
              Add to Bag
            </button>

            {/* HEART */}
            <button className="group w-12 h-12 border rounded
              flex items-center justify-center hover:bg-black transition">
              <FaHeart className="group-hover:text-white" />
            </button>

            {/* SHARE */}
            <button className="group w-12 h-12 border rounded
              flex items-center justify-center hover:bg-black transition">
              <FaShareAlt className="group-hover:text-white" />
            </button>
          </div>

          {/* DELIVERY */}
          <div>
            <p className="text-sm font-medium mb-2">Delivery To</p>
            <div className="flex items-center border rounded px-3 py-2">
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

      {/* ================= SIZE CHART DRAWER ================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition
        ${openSizeChart ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpenSizeChart(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[650px] bg-white z-50
        transform transition-transform duration-300
        ${openSizeChart ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Size Chart</h3>
          <button onClick={() => setOpenSizeChart(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          {/* UNIT TOGGLE */}
          <div className="flex mb-4 bg-gray-100 rounded overflow-hidden">
            <button className="flex-1 bg-orange-500 text-white py-2">
              Inches
            </button>
            <button className="flex-1 py-2">CM</button>
          </div>

          {/* TABLE */}
          <table className="w-full text-sm border">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="p-2">Size</th>
                <th>Brand</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hips</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["XS", 32, 26, 35],
                ["S", 34, 28, 37],
                ["M", 36, 30, 39],
                ["L", 38, 32, 41],
                ["XL", 40, 34, 43],
                ["XXL", 42, 36, 45],
              ].map((r, i) => (
                <tr key={i} className="border-t text-center">
                  <td className="p-2">{r[0]}</td>
                  <td>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                  <td>{r[3]}</td>
                  <td>42</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full p-6 border-t flex justify-between">
          <p className="text-sm">Butterfly Cotton Frock</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded">
            Add to Bag
          </button>
        </div>
      </aside>
    </div>
  );
}
