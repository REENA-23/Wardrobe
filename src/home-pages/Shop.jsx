import React from "react";

function Shop() {
  return (
    <section className="bg-[#D2D4AB] w-full">
      {/* HEIGHT CONTROL */}
      <div
        className="
          h-[420px]
          sm:h-[480px]
          md:h-[560px]
          lg:h-[620px]
          xl:h-[650px]
          flex items-start
        "
      >
        {/* CONTENT WRAPPER */}
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-8
            md:px-16
            lg:px-24
            pt-16
            sm:pt-20
            md:pt-28
          "
        >
          {/* DRESS */}
          <h1
            className="
              font-aboreto
              uppercase
              text-[#85780E]
              text-[32px]
              sm:text-[40px]
              md:text-[56px]
              lg:text-[76px]
              pl-24
            "
          >
            Dress
          </h1>

          {/* SUB TEXT */}
          <p
            className="
              mt-3
              font-mplus
              text-[#231F20]/80
              text-[18px]
              sm:text-[22px]
              md:text-[28px]
              lg:text-[60px]
              tracking-wide
            "
          >
            UP TO 30% OFF
          </p>

          {/* CTA */}
          <div className="pl-34">
            <button
            className="
              mt-3
              sm:mt-
              px-8
              sm:px-8
              py-2
              sm:py-3
              bg-white
              rounded-full
              text-xs
              sm:text-sm
              md:text-base
              font-medium
              shadow
              transition
              hover:bg-amber-600
              hover:text-white
              pl-24
            "
          >
            Shop Now
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
