import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function FollowUs() {
  return (
    <section className="w-full px-4 md:px-10 mt-16">
      {/* OUTER CARD */}
      <div
        className="
          max-w-[1312px] mx-auto
          rounded-lg
          bg-gradient-to-r from-[#EAF6FF] via-[#F3FFE9] to-[#FFF1F1]
          shadow-sm
          py-14
        "
      >
        {/* TITLE */}
        <h2 className="text-center text-[24px] md:text-[28px] font-medium mb-10">
          Follow Us to Get Featured
        </h2>

        {/* BUTTON ROW */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          
          {/* INSTAGRAM */}
          <div
            className="
              flex items-center gap-4
              bg-[#EF3FA4]
              text-white
              rounded-full
              px-6
              h-[80px]
              w-[280px] sm:w-[364px]
            "
          >
            {/* ICON CIRCLE */}
            <div
              className="
                w-[50px] h-[50px]
                bg-white
                rounded-full
                flex items-center justify-center
              "
            >
              <FaInstagram className="text-[#EF3FA4] text-xl" />
            </div>

            {/* TEXT */}
            <span className="text-[18px] md:text-[20px] font-medium truncate">
              Thewardrobeboutiquee
            </span>
          </div>

          {/* FACEBOOK */}
          <div
            className="
              flex items-center gap-4
              bg-[#1877F2]
              text-white
              rounded-full
              px-6
              h-[80px]
              w-[280px] sm:w-[364px]
            "
          >
            {/* ICON CIRCLE */}
            <div
              className="
                w-[50px] h-[50px]
                bg-white
                rounded-full
                flex items-center justify-center
              "
            >
              <FaFacebookF className="text-[#1877F2] text-xl" />
            </div>

            {/* TEXT */}
            <span className="text-[18px] md:text-[20px] font-medium truncate">
              Thewardrobeboutiquee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
