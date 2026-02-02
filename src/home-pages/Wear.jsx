import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function WearAndShare() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const directionRef = useRef(0); // -1 left, +1 right
  const speed = 0.6;

  // animation loop
  useEffect(() => {
    let raf;

    const animate = () => {
      if (isActive && trackRef.current) {
        trackRef.current.scrollLeft += directionRef.current * speed;

        // infinite loop
        const maxScroll =
          trackRef.current.scrollWidth / 2;

        if (trackRef.current.scrollLeft <= 0) {
          trackRef.current.scrollLeft = maxScroll;
        }

        if (trackRef.current.scrollLeft >= maxScroll * 2) {
          trackRef.current.scrollLeft = maxScroll;
        }
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [isActive]);

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    directionRef.current = x < bounds.width / 2 ? -1 : 1;
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseMove={handleMouseMove}
      className="bg-[#F9F6EE] py-20 overflow-hidden"
    >
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl tracking-widest">
          <span className="font-aboreto  items-center text-amber-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">WEAR IT</span>{" "}
          <span className="font-aboreto sm:pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">AND SHARE IT</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* SLIDER */}
      <div
        ref={trackRef}
        className="flex gap-6 px-10 overflow-hidden scroll-smooth"
      >
        {[...cards, ...cards].map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

/* CARD DATA */
const cards = Array.from({ length: 9 }).map((_, i) => ({
  text: "Impressed by the Quality !!",
  name: "Rena Chaudhari",
  rating: 5,
}));

/* CARD COMPONENT */
function Card({ text, name, rating }) {
  return (
    <div className="min-w-[310px] h-[485px] bg-white rounded-xl shadow-md flex flex-col justify-end p-6 transition hover:bg-gray-100">
      <div className="mb-4 text-center text-xl tracking-widest">••••</div>

      <p className="text-sm text-gray-700 mb-2">
        {text}
      </p>

      <div className="flex gap-1 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>

      <p className="text-xs text-gray-400 text-right">
        – {name}
      </p>
    </div>
  );
}

      // <div className="pt-6 sm:pt-8 md:pt-10">
      //   <div className="bg-[#F9F6EE]  opacity-85 min-h-75 sm:min-h-100 md:min-h-125 py-8 sm:py-12 md:py-16">
      //     <div className=" flex flex-col sm:flex-row justify-center items-center">
      //       <p className="font-aboreto items-center text-amber-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">WEAR IT</p>
      //       <p className="font-aboreto sm:pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">AND SHARE IT</p>
      //     </div>
      //     <div className="flex justify-center items-center text-gray-500 text-sm sm:text-base md:text-lg
      //               pt-2 sm:pt-3">
      //       <p>Lorem ispum dolor sit amet.</p>
      //     </div>
         