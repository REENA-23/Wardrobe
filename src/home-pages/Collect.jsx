import React from "react";

function Collect() {
  return (
    <>
      <div className="pt-6 sm:pt-8 md:pt-10">
        <div className="bg-[#D4C6AB] min-h-75 sm:min-h-100 md:min-h-125 pt-8 sm:pt-12">

          <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center md:items-end text-center md:text-right">
            <p className="pr-20 font-aboreto font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-500 ">SUIT SET
            </p>
            <p className=" font-mplus mt-3 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-700">Made For Celebrations</p>
            <div className="pr-25">
                <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white rounded-full shadow text-xs sm:text-sm hover:bg-amber-600 hover:text-white transition">
              Shop The Collection</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} export default Collect