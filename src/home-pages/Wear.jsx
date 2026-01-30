
import React, { useRef, useEffect, useState } from "react";

function Wear() {
  const boxRef = useRef(null);
  const [scrollOn, setScrollOn] = useState(false);

  useEffect(() => {
    let timer;

    if (scrollOn) {
      timer = setInterval(() => {
        if (boxRef.current) {
          const box = boxRef.current;
          if (box.scrollLeft + box.clientWidth >= box.scrollWidth) {
            box.scrollLeft = 0;
          } else {
            box.scrollLeft += 1;
          }
        }
      }, 20);
    }

    return () => clearInterval(timer);
  }, [scrollOn]);
  return (
    <>
      <div className="pt-6 sm:pt-8 md:pt-10">
        <div className="bg-[#F9F6EE]  opacity-85 min-h-75 sm:min-h-100 md:min-h-125 py-8 sm:py-12 md:py-16">
          <div className=" flex flex-col sm:flex-row justify-center items-center">
            <p className="font-aboreto items-center text-amber-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">WEAR IT</p>
            <p className="font-aboreto sm:pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">AND SHARE IT</p>
          </div>
          <div className="flex justify-center items-center text-gray-500 text-sm sm:text-base md:text-lg
                    pt-2 sm:pt-3">
            <p>Lorem ispum dolor sit amet.</p>
          </div>
          <div
            ref={boxRef}
            onMouseEnter={() => setScrollOn(true)}
            onMouseLeave={() => setScrollOn(false)}
            className="flex overflow-x-hidden w-full px-4 sm:px-6 md:px-10"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={item} className="pt-6 pl-7 shrink-0">
                <img
                  src="frame.png"
                  className="w-[310] h-[480]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} export default Wear
