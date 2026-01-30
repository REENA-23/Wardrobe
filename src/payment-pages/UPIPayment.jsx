import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function UPIPayment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const baseBox =
    "h-[45px] rounded-lg text-sm text-left px-4 border border-[1px] flex items-center transition";

  const hoverStyle = "hover:border-orange-500 hover:bg-orange-50";

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

        {/* ✅ FIXED */}
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
        <h3 className="text-base font-semibold">UPI</h3>
      </div>

      <div className="space-y-4 pb-70">

        {/* GOOGLE PAY */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSelectedMethod("gpay")}
            className={`${baseBox} flex-1
              ${
                selectedMethod === "gpay"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 bg-white"
              } ${hoverStyle}`}
          >
            Google Pay
          </button>

          {selectedMethod === "gpay" && (
            <button className="h-[45px] px-6 bg-orange-500 text-white rounded-lg text-sm font-medium">
              Pay ₹699
            </button>
          )}
        </div>

        {/* ADD / ENTER UPI */}
        <div className="flex items-center gap-4">
          {selectedMethod === "upi" ? (
            <>
              <div className={`${baseBox} flex-1 border-orange-500 bg-orange-50`}>
                <input
                  type="text"
                  placeholder="Enter your UPI ID"
                  className="flex-1 bg-transparent text-sm focus:outline-none"
                />
                <button className="text-sm font-medium text-gray-700">
                  Verify
                </button>
              </div>

              <button className="h-[45px] px-6 bg-orange-500 text-white rounded-lg text-sm font-medium">
                Pay ₹699
              </button>
            </>
          ) : (
            <button
              onClick={() => setSelectedMethod("upi")}
              className={`${baseBox} flex-1 border-gray-200 bg-white text-gray-600 ${hoverStyle}`}
            >
              Add UPI ID
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
