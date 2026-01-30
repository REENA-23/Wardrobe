export default function TopOfferBar() {
  const Item = () => (
    <span className="flex items-center whitespace-nowrap text-sm sm:text-base">
      <span>
        Up To 30% Off{" "}
        <span className="font-medium">| Shop Now</span>
      </span>

      <span className="mx-6"></span>

      <span>
        Extra 15% Off{" "}
        <span className="font-normal">| Use code:</span>{" "}
        <span className="text-orange-500 font-medium">EXTRA15</span>
      </span>
    </span>
  );

  return (
    <div className="w-full border-b border-gray-700">
      <div
        className="
          h-[40px]              /* slightly taller for mobile */
          sm:h-[35px]
          flex
          items-center
          overflow-hidden
        "
      >
        {/* MOBILE */}
        <div className="flex gap-12 px-4 sm:hidden">
          <Item />
          <Item />
        </div>

        {/* TABLET */}
        <div className="hidden sm:flex lg:hidden gap-12 px-6">
          <Item />
          <Item />
          <Item />
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex gap-12 px-8 w-full justify-between">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
