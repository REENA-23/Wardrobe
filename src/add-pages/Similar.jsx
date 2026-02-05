import { useNavigate } from "react-router-dom";
import Products from "../home-pages/Products";

export default function Similar() {
  const navigate = useNavigate();

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
              <span className="text-orange-500 font-aboreto">SIMILAR </span>
              <span className="text-gray-800 font-aboreto">STYLES</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Fresh Selections
            </p>
          </div>
        </div>

        <button className="hidden sm:block border border-gray-300 rounded-full px-6 py-2 text-sm transition hover:bg-orange-500 hover:text-white hover:border-orange-500">
          View all
        </button>
      </div>

      {/* PRODUCTS */}
      <Products />

      {/* BOTTOM VIEW ALL */}
      <div className="flex justify-end mt-14 pb-10">
        <button className="border border-gray-300 rounded-full px-6 py-2 text-sm transition hover:bg-orange-500 hover:text-white hover:border-orange-500">
          View all
        </button>
      </div>
    </section>
  );
}
