export default function RatingReview() {
  return (
    /* FULL BLEED BACKGROUND */
    <section className="w-full ">
      <div
        className="
          max-w-[1436px] mx-auto
          min-h-[850px]
          flex flex-col items-center justify-center
          px-4 sm:px-6 bg-[#FFF7E8]
        "
      >
        {/* TITLE */}
        <h2
          className="
            font-aboreto tracking-wide
            text-[32px] sm:text-[40px] md:text-[52px]
            mb-2 text-center
          "
        >
          <span className="text-orange-500">RATING</span>
          <span className="text-black"> & REVIEW</span>
        </h2>

        {/* SUBTITLE */}
        <p
          className="
            text-[12px] sm:text-[14px]
            text-gray-400
            mb-10 text-center
          "
        >
          Tap on the stars to Rate this product
        </p>

        {/* FORM BLOCK */}
        <div
          className="
            w-full max-w-[420px]
            flex flex-col items-center
          "
        >
          {/* TITLE INPUT */}
          <input
            type="text"
            placeholder="Review Title"
            className="
              w-full h-[40px] px-4 mb-4
              text-[14px]
              bg-white
              border border-[#E6E7E7]
              rounded-md outline-none
            "
          />

          {/* TEXTAREA */}
          <textarea
            placeholder="Write your review here"
            className="
              w-full h-[160px] px-4 py-3 mb-5
              text-[14px]
              bg-white
              border border-[#E6E7E7]
              rounded-md outline-none resize-none
            "
          />

          {/* UPLOAD LABEL */}
          <p className="w-full text-left text-[12px] text-gray-400 mb-2">
            Upload photo/ video
          </p>

          {/* UPLOAD BOXES */}
          <div
            className="
              w-full flex gap-4 sm:gap-7
              mb-8 justify-start
            "
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="
                  w-[65px] h-[65px]
                  sm:w-[83px] sm:h-[83px]
                  bg-white
                  border border-[#E6E7E7]
                  rounded-md
                "
              />
            ))}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            className="
              w-full h-[40px]
              bg-[#1E1E1E]
              text-white text-[14px]
              rounded-md
            "
          >
            Submit Review
          </button>
        </div>
      </div>
    </section>
  );
}
