import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Wear() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [isSectionActive, setIsSectionActive] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const speed = 1;

  /*  Detect when section is visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionActive(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ▶ Card movement */
  useEffect(() => {
    let raf;

    const move = () => {
      if (isSectionActive && !isCardHovered && trackRef.current) {
        trackRef.current.scrollLeft += speed;
      }
      raf = requestAnimationFrame(move);
    };

    move();
    return () => cancelAnimationFrame(raf);
  }, [isSectionActive, isCardHovered]);

  return (
    <section ref={sectionRef} className="bg-[#F2CF74]/10 py-24 overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="tracking-widest">
          <span className="font-aboreto text-amber-600 text-4xl">WEAR IT</span>{" "}
          <span className="font-aboreto text-4xl">AND SHARE IT</span>
        </h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p>
      </div>

      {/* SLIDER */}
      <div ref={trackRef} className="flex gap-8 px-20 overflow-hidden">
        {cards.map((card, i) => (
          <Card key={i} {...card} onHover={setIsCardHovered} />
        ))}
      </div>
    </section>
  );
}

/* CARD DATA (ONLY 9 CARDS) */
const cards = Array.from({ length: 9 }).map(() => ({
  text: "Impressed by the Quality !!",
  name: "Rena Chaudhari",
  rating: 5,
}));

/* CARD COMPONENT */
function Card({ text, name, rating, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="
    group
    min-w-[310px] h-[485px]
    bg-white
    rounded-xl
    shadow-md
    flex flex-col justify-end
    p-6
    transition-all duration-300
    hover:bg-gray-100
  "
    >
      <div className="mb-4 text-center tracking-widest">••••</div>

      <p className="text-sm text-gray-700 mb-2">{text}</p>

      <div className="flex gap-1 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar
            key={i}
            className="
              text-[#F6B73C]
              group-hover:text-orange-500
              transition-colors duration-300
              text-sm
            "
          />
        ))}
      </div>

      <p className="text-xs text-gray-400 text-right">– {name}</p>
    </div>
  );
}
