import { useNavigate, useLocation } from "react-router-dom";

export default function PaymentSummary() {
  const navigate = useNavigate();
  const location = useLocation();
  const isPaymentPage = location.pathname === "/payment";

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-sm
        p-6
        flex
        flex-col
      "
    >
      {/* TOP CONTENT */}
      <div className="space-y-8">

        {/* COUPON */}
        <div>
          <h3 className="text-base font-semibold mb-3">
            Coupon code
          </h3>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="
              w-full
              h-[45px]
              px-4
              border
              border-gray-200
              rounded-lg
              text-sm
              focus:outline-none
              focus:ring-1
              focus:ring-orange-400
            "
          />
        </div>

        <hr />

        {/* PAYMENT INFO */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">
            Payment Information
          </h3>

          {/* HEADER */}
          <div className="flex justify-between text-sm font-medium border-b pb-3">
            <span>Products</span>
            <span>Price</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Value of Products</span>
            <span>₹9000</span>
          </div>

          <div className="flex justify-between text-sm text-orange-500">
            <span>Discount(-)</span>
            <span>-₹5000</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Shipping Charges</span>
            <span className="font-medium">FREE</span>
          </div>

          <div className="flex justify-between text-sm text-orange-500">
            <span>Handling Charges</span>
            <span>
              <span className="line-through mr-1">₹29</span> free
            </span>
          </div>

          <hr />

          <div className="flex justify-between items-center pt-2">
            <span className="text-base font-semibold text-gray-800">
              Amount Payable
            </span>
            <span className="text-xl font-bold text-green-600">
              ₹4000
            </span>
          </div>
        </div>
      </div>

      {/* PUSH BUTTON TO BOTTOM */}
      <div className="mt-auto pt-6">
        <button
          onClick={() => {
            if (!isPaymentPage) navigate("/payment");
          }}
          className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-3
            rounded-md
            text-sm
            font-medium
            transition
          "
        >
          {isPaymentPage ? "Make Payment" : "Place Order"}
        </button>
      </div>
    </div>
  );
}
