import { FaTimes } from "react-icons/fa";

export default function SizeChartDrawer({ open, onClose }) {
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[655px]
        bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Size Chart</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 pb-32 overflow-y-auto">
          {/* UNIT TOGGLE */}
          <div className="bg-gray-100 rounded-lg p-1 mb-6 flex w-[260px]">
            <button className="flex-1 py-2 bg-orange-500 text-white rounded-md text-sm">
              Inches
            </button>
            <button className="flex-1 py-2 text-sm text-gray-700">CM</button>
          </div>

          {/* TABLE */}

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-[#6F6F6F] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border-r border-gray-300">
                    Size
                  </th>
                  <th className="py-3 font-medium border-r border-gray-300">
                    Brand Size
                  </th>
                  <th className="py-3 font-medium border-r border-gray-300">
                    Bust
                  </th>
                  <th className="py-3 font-medium border-r border-gray-300">
                    Waist
                  </th>
                  <th className="py-3 font-medium border-r border-gray-300">
                    Hips
                  </th>
                  <th className="py-3 font-medium">Length</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["XS", "XS", 32, 26, 35],
                  ["S", "S", 34, 28, 37],
                  ["M", "M", 36, 30, 39],
                  ["L", "L", 38, 32, 41],
                  ["XL", "XL", 40, 34, 43],
                  ["XXL", "XXL", 42, 36, 45],
                  ["3XL", "3XL", 44, 38, 47],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t text-center text-gray-700"
                  >
                    <td className="px-4 py-3 text-left border-r border-gray-200">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="size"
                          className="accent-orange-500"
                        />
                        <span>{row[0]}</span>
                      </label>
                    </td>

                    <td className="border-r border-gray-200">{row[1]}</td>
                    <td className="border-r border-gray-200">{row[2]}</td>
                    <td className="border-r border-gray-200">{row[3]}</td>
                    <td className="border-r border-gray-200">{row[4]}</td>
                    <td>42</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 w-full border-t px-6 py-4 flex items-center justify-between bg-white">
          <p className="text-xl font-medium">Butterfly Cotton Frock</p>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </aside>
    </>
  );
}
