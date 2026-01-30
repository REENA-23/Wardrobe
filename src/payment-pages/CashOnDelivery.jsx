import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function CashOnDelivery() {
  const navigate = useNavigate();

  const boxStyle =
    "h-[45px] px-4 border border-orange-500 bg-orange-50 rounded-lg text-sm flex items-center";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

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
        <h3 className="text-base font-semibold">
          Cash on Delivery
        </h3>
      </div>

      {/* COD ROW */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-[720px]">

        {/* COD BOX */}
        <div className={`${boxStyle} flex-1`}>
          Cash on Delivery
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
            whitespace-nowrap
          "
        >
          Pay ₹699
        </button>

      </div>

    </div>
  );
}
