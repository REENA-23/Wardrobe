import { useState } from "react";
import CartNavBar from "../cart-pages/CartNavbar";
import Footer from "../home-pages/Footer";

const products = [
  { id: 1, name: "Butterfly Cotton Frock", price: 2000, old: 4500 },
  { id: 2, name: "Butterfly Cotton Frock", price: 2000, old: 4500 },
  { id: 3, name: "Butterfly Cotton Frock", price: 2000, old: 4500 },
];

export default function VirtualTryOnPage() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <CartNavBar />
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">Home / Virtual Try-On</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT: MIRROR */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h2 className="font-semibold mb-4">Virtual Try-On Mirror</h2>

            <div className="flex-1 flex flex-col items-center justify-center border rounded-lg bg-gray-50">
              <div className="w-32 h-48 bg-gray-200 rounded mb-4" />
              <p className="text-sm font-medium">Select items to try on</p>
              <p className="text-xs text-gray-400">
                Browse the catalog to get started
              </p>
            </div>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-medium">
              Add to Bag
            </button>
          </div>

          {/* RIGHT: CATALOG */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-4">Clothing Catalog</h2>

            <div className="space-y-4">
              {products.map((p) => {
                const isActive = selected === p.id;

                return (
                  <div
                    key={p.id}
                    onClick={() => setSelected(p.id)}
                    className={`border rounded-lg p-4 flex gap-4 cursor-pointer transition ${
                      isActive
                        ? "border-orange-500 ring-1 ring-orange-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-24 bg-gray-200 rounded" />

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-sm">{p.name}</p>
                          <div className="flex items-center gap-2 text-sm mt-1">
                            <span className="font-semibold">₹{p.price}</span>
                            <span className="line-through text-gray-400 text-xs">
                              ₹{p.old}
                            </span>
                            <span className="text-orange-500 text-xs">
                              ₹{p.old - p.price} off
                            </span>
                          </div>
                          <p className="text-xs text-red-500 mt-1">
                            Save 20% on Your Purchase Today.
                          </p>
                        </div>

                        {/* Custom Checkbox */}
                        <label className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isActive}
                            readOnly
                            className="peer hidden"
                          />
                          <div className="w-5 h-5 rounded border-2 border-orange-500 flex items-center justify-center peer-checked:bg-orange-500">
                            <svg
                              className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
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
                          </div>
                        </label>
                      </div>

                      {/* Sizes */}
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">
                          Select Size
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {["S", "M", "L", "XL", "XXL"].map((s) => (
                            <span
                              key={s}
                              className="px-2 py-1 border rounded text-xs text-gray-600 hover:border-orange-500 cursor-pointer"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Colors */}
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">
                          Select Colour
                        </p>
                        <div className="flex gap-2">
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
