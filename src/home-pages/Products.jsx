import { FaExchangeAlt, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Products() {
  const navigate = useNavigate();   

  const products = Array(4).fill({
    title: "Chaniya Choli Kids",
    price: "Rs 2000",
    oldPrice: "Rs 4000",
    colors: "3 Colors",
  });
  return (
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
              {/* ADD TO COMPARE */}
              <div className="relative group/icon">
                <button
                  onClick={() => navigate("/compare-product")}
                  className="relative z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                >
                  <FaExchangeAlt size={14} />
                </button>

                <div
                  onClick={() => navigate("/compare-product")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-10 bg-black text-white flex items-center pr-12 pl-4 text-sm whitespace-nowrap rounded-full origin-right scale-x-0 transition-transform duration-300 group-hover/icon:scale-x-100"
                >
                  Add to Compare
                </div>
              </div>

              {/* QUICK VIEW */}
              <div className="relative group/icon">
                <button className="relative z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  <FaEye size={14} />
                </button>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 bg-black text-white flex items-center pr-12 pl-4 text-sm whitespace-nowrap rounded-full origin-right scale-x-0 transition-transform duration-300 group-hover/icon:scale-x-100">
                  Quick View
                </div>
              </div>
            </div>

            {/* BOTTOM HOVER */}
            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>

              {/*  NAVIGATE TO ADD TO CART PAGE */}
              <button
                onClick={() => navigate("/add-to-cart")}
                className="w-full bg-black text-white py-2 hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* INFO */}
          <div className="mt-6">
            <p className="font-medium text-sm">Chaniya Choli Kids</p>

            <div className="flex items-center gap-2 mt-1 text-sm">
              <span className="text-orange-500">Rs 2000</span>
              <span className="line-through text-gray-400">Rs 4000</span>
            </div>

            {/* COLORS */}
            <div className="relative inline-block group/colors mt-1">
              <p className="text-sm text-gray-600 cursor-pointer">3 Colors</p>

              <div
                className="absolute left-0 top-6 bg-white shadow rounded px-3 py-2
                          flex gap-2 opacity-0 group-hover/colors:opacity-100 transition"
              >
                <span className="w-3 h-3 rounded bg-pink-500" />
                <span className="w-3 h-3 rounded bg-black" />
                <span className="w-3 h-3 rounded bg-green-600" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
