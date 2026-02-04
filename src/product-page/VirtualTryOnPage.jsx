import { useState } from "react";
import CartNavbar from "../cart-pages/CartNavbar";
import Footer from "../home-pages/Footer";

const products = [
  { id: 1, name: "Butterfly Cotton Frock", price: 2000, old: 4500 },
  { id: 2, name: "Butterfly Cotton Frock", price: 2000, old: 4500 },
  { id: 3, name: "Butterfly Cotton Frock", price: 2000, old: 4500 },
];

export default function VirtualTryOnPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <CartNavbar />

      <div className="min-h-screen bg-gray-50 p-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">Home / Virtual Try-On</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: MIRROR */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            {/* Header */}
            <h2 className="font-bold text-[26px]">Virtual Try-On Mirror</h2>

            {/* Content */}
            {/* Content */}
            <div className="flex-1 flex items-center justify-center mt-8 sm:mt-10 lg:mt-0">
              <div className="w-full max-w-sm flex flex-col items-center text-center">
                {!selected ? (
                  <>
                    <div className="w-32 h-48 bg-gray-200 rounded mb-6" />
                    <p className="font-semibold text-[20px] text-gray-900 mb-2">
                      Select items to try on
                    </p>
                    <p className="text-[16px] text-gray-400">
                      Browse the catalog to get started
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-32 h-48 bg-gray-300 rounded mb-6" />
                    <p className="font-semibold text-[18px] text-gray-900 mb-1">
                      {selected.name}
                    </p>
                    <p className="text-[20px] text-orange-500 font-bold">
                      ₹{selected.price}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Footer Button */}
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white h-[44px] rounded-md text-[16px] font-semibold">
              Add to Bag
            </button>
          </div>

          {/* RIGHT: CATALOG */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-[26px] mb-4">Clothing Catalog</h2>

            <div className="space-y-4">
              {products.map((p) => {
                const isActive = selected?.id === p.id;

                return (
                  <div
                    key={p.id}
                    onClick={() => setSelected(p)}
                    className={`relative border rounded-lg p-4 flex flex-col lg:flex-row gap-4 cursor-pointer transition ${
                      isActive
                        ? "border-orange-500 ring-1 ring-orange-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Checkbox */}
                    <div className="absolute top-3 right-3">
                      <div
                        className={`w-5 h-5 rounded-sm border flex items-center justify-center ${
                          isActive
                            ? "bg-orange-500 border-orange-500"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {isActive && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="p-3 flex justify-center">
                      <div className="w-[156px] h-[199px] bg-gray-200 rounded flex items-end justify-center shrink-0">
                        <div className="flex gap-1 mb-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center lg:text-left">
                      <p className="font-semibold text-[18px] text-gray-900">
                        {p.name}
                      </p>

                      <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
                        <span className="font-bold text-[20px] text-gray-900">
                          ₹{p.price}
                        </span>
                        <span className="line-through text-gray-400 text-[16px]">
                          ₹{p.old}
                        </span>
                        <span className="text-orange-500 text-[14px] font-medium">
                          {p.old - p.price} off
                        </span>
                      </div>

                      <p className="text-[14px] text-red-500 mt-1 font-medium">
                        Save 20% on Your Purchase Today.
                      </p>

                      {/* Sizes */}
                      <div className="mt-3">
                        <p className="text-[14px] text-gray-700 mb-1 font-medium">
                          Select Size
                        </p>
                        <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                          {["S", "M", "L", "XL", "XXL"].map((s) => (
                            <span
                              key={s}
                              className="px-2 py-1 border rounded text-[12px] text-gray-600 hover:border-orange-500 cursor-pointer"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Colors */}
                      <div className="mt-3">
                        <p className="text-[14px] text-gray-700 mb-1 font-medium">
                          Select Colour
                        </p>
                        <div className="flex gap-2 justify-center lg:justify-start">
                          <span className="w-4 h-4 bg-cyan-400 rounded" />
                          <span className="w-4 h-4 bg-green-500 rounded" />
                          <span className="w-4 h-4 bg-orange-400 rounded" />
                          <span className="w-4 h-4 bg-pink-500 rounded" />
                          <span className="w-4 h-4 bg-blue-700 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
