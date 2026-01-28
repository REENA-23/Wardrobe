import { useNavigate } from "react-router-dom";

export default function Wlpayment() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">

      {/* APPLY COUPON */}
      <div className="flex items-center gap-4 pb-5 border-b">
        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 text-xl font-bold">
          %
        </div>
        <div>
          <p className="text-sm font-semibold">
            APPLY COUPON CODE
          </p>
          <p className="text-xs text-gray-500">
            Login to find coupons
          </p>
        </div>
      </div>

      {/* FREE SHIPPING */}
      <div className="mt-5 bg-orange-50 rounded-xl py-4 text-center">
        <p className="text-sm font-semibold tracking-wide">
          FREE SHIPPING
        </p>
        <p className="text-sm text-orange-500">
          on your 1<sup>st</sup> order
        </p>
      </div>

      {/* PAYMENT INFORMATION */}
      <div className="mt-7">
        <h3 className="text-lg font-semibold mb-4">
          Payment Information
        </h3>

        {/* HEADER */}
        <div className="flex justify-between text-sm font-medium border-b pb-2">
          <span>Products</span>
          <span>Price</span>
        </div>

        {/* DETAILS */}
        <div className="flex justify-between text-sm mt-4">
          <span>Value of Products</span>
          <span className="font-medium">₹9000</span>
        </div>

        <div className="flex justify-between text-sm mt-3 text-orange-500">
          <span>Discount(-)</span>
          <span className="font-medium">-₹5000</span>
        </div>

        <div className="flex justify-between text-sm mt-3">
          <span>Shipping Charges</span>
          <span className="font-semibold">FREE</span>
        </div>

        <div className="flex justify-between text-sm mt-3 text-orange-500">
          <span>Handling Charges</span>
          <span>
            <span className="line-through mr-1">₹29</span>
            free
          </span>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <span className="text-base font-semibold">
            Amount Payable
          </span>
          <span className="text-xl font-bold text-green-600">
            ₹4000
          </span>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={() => navigate("/checkout")}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-semibold transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
