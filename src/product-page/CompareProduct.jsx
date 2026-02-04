import { FaTimes, FaStar } from "react-icons/fa";

const products = [
  { id: 1, name: "Dress", price: 2000, old: 3200 },
  { id: 2, name: "Dress", price: 2000, old: 3200 },
  { id: 3, name: "Dress", price: 2000, old: 3200 },
  { id: 4, name: "Dress", price: 2000, old: 3200 },
];

export default function CompareProducts() {
  const rowHeights = [
    "h-[300px]", // Products row (tall)
    "h-[110px]", // Price
    "h-[110px]", // Colors
    "h-[110px]", // Sizes
    "h-[110px]", // Rating
  ];

  return (
    <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow p-6">
      {/* HEADER */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">
            <span className="text-orange-500">Compare</span> Products
          </h2>
          <p className="text-sm text-gray-400">
            Side-by-side comparison of 2 Products
          </p>
        </div>
        <button className="text-gray-400 hover:text-black">
          <FaTimes />
        </button>
      </div>

      {/* TABLE */}
      <div className="grid grid-cols-[180px_repeat(4,1fr)] border border-gray-200">
        {/* LEFT LABEL COLUMN */}
        <div className="bg-gray-50">
          {["Products", "Price", "Colors", "Available Sizes", "Rating"].map(
            (label, i) => (
              <div
                key={i}
                className={`${rowHeights[i]} flex items-center px-4 text-sm text-gray-600 border-b border-gray-200`}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* PRODUCT COLUMNS */}
        {products.map((p, i) => (
          <div key={p.id} className="border-l border-gray-200">
            {/* PRODUCT CARD ROW */}
            <div className="h-[300px] flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <div className="w-[160px] h-[220px] bg-gray-300 rounded-xl relative overflow-hidden">
                {i === 0 && (
                  <button className="absolute top-2 right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    ×
                  </button>
                )}
                <div className="absolute bottom-0 w-full bg-black text-white text-xs py-2 text-center">
                  Add to Cart
                </div>
              </div>
              <p className="text-sm mt-2">{p.name}</p>
            </div>

            {/* PRICE */}
            <div className="h-[110px] flex flex-col items-center justify-center border-b border-gray-200">
              <p className="text-sm font-medium">Rs {p.price}</p>
              <p className="text-xs text-gray-400 line-through">
                Rs {p.old}
              </p>
            </div>

            {/* COLORS */}
            <div className="h-[110px] flex items-center justify-center gap-2 border-b border-gray-200">
              <span className="w-3 h-3 bg-pink-500 rounded-sm" />
              <span className="w-3 h-3 bg-black rounded-sm" />
              <span className="w-3 h-3 bg-green-600 rounded-sm" />
            </div>

            {/* SIZES */}
            <div className="h-[110px] flex items-center justify-center gap-2 border-b border-gray-200 flex-wrap px-2">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 border rounded text-xs text-gray-600"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* RATING */}
            <div className="h-[110px] flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
