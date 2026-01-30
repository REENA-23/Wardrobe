import React from "react";
import { FaExchangeAlt, FaEye } from "react-icons/fa";

export default function New() {
  const products = Array(4).fill({
    title: "Chaniya Choli Kids",
    price: "Rs 2000",
    oldPrice: "Rs 4000",
    colors: "3 Colors",
  });

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-14 pt-14">
      
      {/* HEADER */}
      <div className="flex items-start justify-between mb-14">
        <div className="flex items-start gap-4">
          <img
            src="/leaf.png"
            alt="leaf"
            className="h-16 sm:h-20 md:h-28 object-contain opacity-70"
          />

          <div>
            <h2 className="tracking-widest text-[32px] sm:text-[40px] md:text-[48px] font-normal">
              <span className="text-orange-500 font-aboreto">Best  </span>
              <span className="text-gray-800 font-aboreto">Seller</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
             Shop the Styles Everyone’s Talking About
            </p>
          </div>
        </div>

        {/* TOP VIEW ALL */}
        <button className="hidden sm:block border border-gray-300 rounded-full px-6 py-2 text-sm transition hover:bg-orange-500 hover:text-white hover:border-orange-500">
          View all
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((_, i) => (
          <div key={i}>
            <div className="relative h-[400px] bg-gray-100 rounded overflow-hidden group">

              {/* DISCOUNT */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                40% OFF
              </span>

              {/* RIGHT ICONS */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  <FaExchangeAlt size={14} />
                </button>
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  <FaEye size={14} />
                </button>
              </div>

              {/* BOTTOM HOVER */}
              <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                </div>
                <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-6">
              <p className="font-medium text-sm">
                Chaniya Choli Kids
              </p>

              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-orange-500">Rs 2000</span>
                <span className="line-through text-gray-400">
                  Rs 4000
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                3 Colors
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM VIEW ALL (RIGHT ALIGNED SAME LINE AS TOP) */}
      <div className="flex justify-end mt-14 pb-10">
        <button className="border border-gray-300 rounded-full px-6 py-2 text-sm transition hover:bg-orange-500 hover:text-white hover:border-orange-500">
          View all
        </button>
      </div>

    </section>
  );
}
