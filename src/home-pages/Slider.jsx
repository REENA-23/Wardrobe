import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Slider() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [direction, setDirection] = useState(0); // -1 left | 1 right | 0 idle

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startScroll = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        slider.scrollLeft += direction * 0.6;

        // infinite loop
        if (slider.scrollLeft <= 0) {
          slider.scrollLeft = slider.scrollWidth / 2;
        }
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = slider.scrollWidth / 4;
        }
      }, 16);
    };

    const stopScroll = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    if (direction !== 0) startScroll();
    else stopScroll();

    return () => stopScroll();
  }, [direction]);

  const handleMouseMove = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = rect.width / 2;

    setDirection(x > half ? 1 : -1);
  };

  const items = [
    "Gown",
    "Dresses",
    "Suit Sets",
    "Tops",
    "Co-Ord Sets",
    "Lehenga",
  ];

  return (
    <section className="bg-[#F9F6EE] pt-10">
      {/* TITLE */}
      <div className="text-center mb-8 px-4">
        <h2 className="font-playfair text-xl sm:text-2xl md:text-4xl">
          <span className="text-orange-500 font-aboreto">CATEGORIES </span>
          <span className="text-gray-800 font-aboreto">YOU MIGHT LIKE</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setDirection(1)}
        onMouseLeave={() => setDirection(0)}
        onMouseMove={handleMouseMove}
        className="
          flex gap-6
          px-6
          overflow-hidden
          cursor-pointer
          select-none
        "
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="group flex flex-col items-center shrink-0">
            {/* CARD */}
            <div
              className="
                relative
                h-[380px] w-[250px]
                sm:h-[400px] sm:w-[260px]
                rounded-full
                bg-transparent
                transition
                duration-300
                group-hover:bg-gray-300
              "
            >
              {/* ARROW */}
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-xl">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-4 text-center">
              <p className="text-lg font-medium group-hover:text-black transition">
                {item}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
