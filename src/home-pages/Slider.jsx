import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [direction, setDirection] = useState(0); // -1 left | 1 right | 0 stop
  const navigate = useNavigate();

  const items = [
    { name: "Gown", path: "/gown" },
    { name: "Dresses", path: "/dresses" },
    { name: "Suit Sets", path: "/Suitset" },
    { name: "Tops", path: "/tops" },
    { name: "Co-Ord Sets", path: "/coordset" },
    { name: "Lehenga", path: "/Lahenga" },
  ];

  const startScroll = () => {
    if (intervalRef.current || direction === 0) return;

    const slider = sliderRef.current;
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      slider.scrollLeft += direction * 1;

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
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
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

  return (
    <section className="bg-[#F9F6EE] pt-10 h-[780px]">
      {/* TITLE */}
      <div className="text-center mb-8 pt-10">
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
        className="flex gap-6 px-6 overflow-hidden cursor-pointer select-none"
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
                flex items-end justify-center
                pb-4
              "
            >
              {/* ARROW BUTTON */}
              <button
                type="button"
                onMouseEnter={() => {
                  stopScroll();
                  setDirection(0);
                }}
                onMouseLeave={() => {
                  setDirection(1);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(item.path);
                }}
                className=" w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition " >
                <FiArrowUpRight />
              </button>
            </div>

            {/* TEXT */}
            <div className="mt-4 text-center">
              <p className="text-lg font-medium group-hover:text-black transition">
                {item.name}
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
