import { Link } from "react-router-dom";

export default function Hero() {
  const circleBase = `
    w-14 h-14
    sm:w-16 sm:h-16
    md:w-20 md:h-20
    lg:w-24 lg:h-24
    xl:w-40 xl:h-40
    rounded-full
    flex items-center justify-center
    text-center
    leading-tight
    font-normal
    shrink-0
    transition-transform duration-300
  `;

  return (
    <div className="w-full overflow-x-auto">
      <div
        className="
          flex flex-nowrap
          gap-4 sm:gap-6 md:gap-8
          px-4 sm:px-6 md:px-10
          py-4
          min-w-max
          xl:justify-center
        "
      >
        {/* SALE */}
        <div className="flex flex-col items-center cursor-pointer group">
          <div
            className={`${circleBase} bg-black text-white text-[10px] sm:text-xs md:text-lg xl:text-5xl group-hover:scale-110`}
          >
            Sale
          </div>
          <p className="mt-2 text-[9px] sm:text-xs md:text-sm xl:text-lg text-center font-normal group-hover:text-orange-500">
            Sale
          </p>
        </div>

        {/* NEED HELP */}
        <div className="flex flex-col items-center cursor-pointer group">
          <div
            className={`${circleBase}
    font-salsa
    border-2 border-red-500
    text-red-500
    text-[9px] sm:text-xs md:text-lg xl:text-4xl
    leading-tight
    text-center
    group-hover:bg-red-500
    group-hover:text-white
  `}
          >
            Need
            <br />
            Help?
          </div>

          <p className="mt-2 text-[9px] sm:text-xs md:text-sm xl:text-lg text-center font-normal group-hover:text-orange-500">
            Need Help?
          </p>
        </div>

        {/* OTHER ITEMS */}
        {[
          "New Arrivals",
          "Best Seller",
          "Top Rated",
          "Brands We Love",
          "Trending",
        ].map((item, i) => (
          <Link
            to="/new"
            key={i}
            className="flex flex-col items-center cursor-pointer shrink-0 group"
          >
            <div
              className={`${circleBase}
                border-5 border-gray-300
                group-hover:scale-110
                group-hover:border-gray-300
              `}
            />
            <p className="mt-2 text-[9px] sm:text-xs md:text-sm xl:text-lg text-center font-normal group-hover:text-orange-500">
              {item}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
