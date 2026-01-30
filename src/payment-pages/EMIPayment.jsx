import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function EMIPayment() {
  const navigate = useNavigate();

  const inputBase =
    "h-[45px] px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 pb-76">

      {/* DELIVERY INFO */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex justify-between items-start mb-6">
        <div>
          <p className="text-sm font-medium">
            Delivering to Dhara Keshwala
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, lorem ipsum,
            PORBANDAR, GUJARAT, 360579, India
          </p>
        </div>

        <button
          onClick={() => navigate("/payment")}
          className="text-sm underline text-gray-700 hover:text-orange-500"
        >
          Edit Address
        </button>
      </div>

      {/* BACK + TITLE */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-orange-500 text-xl hover:text-orange-600 transition"
        >
          <IoChevronBack />
        </button>
        <h3 className="text-base font-semibold">EMI</h3>
      </div>

      {/* FORM */}
      <div className="space-y-4">

        {/* CARD NUMBER — 70% */}
        <input
          type="text"
          placeholder="Card Number"
          className={`${inputBase} w-[80%]`}
        />

        {/* SECOND ROW */}
        <div className="flex items-center justify-between">

          {/* INPUTS */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Valid Through"
              className={`${inputBase} w-[300px]`}
            />

            <input
              type="text"
              placeholder="CVV"
              className={`${inputBase} w-[300px]`}
            />
          </div>

          {/* PAY BUTTON */}
          <button
            className="
              h-[45px]
              px-8
              bg-orange-500
              hover:bg-orange-600
              text-white
              rounded-lg
              text-sm
              font-medium
            "
          >
            Pay 699
          </button>
        </div>

      </div>
    </div>
  );
}
