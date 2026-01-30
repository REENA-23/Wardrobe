import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  const navigate = useNavigate();

  const baseButton =
    "h-[45px] border rounded-lg text-sm text-left px-4 transition";

  const hoverStyle = "hover:border-orange-500 hover:bg-orange-50";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 pb-78">
      {/* DELIVERY INFO */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex justify-between items-start mb-6">
        <div>
          <p className="text-sm font-medium">Delivering to Dhara Keshwala</p>
          <p className="text-xs text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, lorem ipsum, PORBANDAR, GUJARAT, 360579,
            India
          </p>
        </div>

        <button
          onClick={() => navigate("/payment")}
          className="text-sm underline text-gray-700 hover:text-orange-500"
        >
          Edit Address
        </button>
      </div>

      <h3 className="text-base font-semibold mb-4">Choose Payment Method</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* UPI */}
        <button
          onClick={() => navigate("/payment-method/upi")}
          className={`${baseButton} border-gray-200 ${hoverStyle}`}
        >
          UPI
        </button>

        {/* CARD */}
        <button
          onClick={() => navigate("/payment-method/card")}
          className={`${baseButton} border-gray-200 ${hoverStyle}`}
        >
          Credit Card or Debit Card
        </button>

        {/* EMI */}
        <button
          onClick={() => navigate("/payment-method/emi")}
          className={`${baseButton} border-gray-200 ${hoverStyle}`}
        >
          EMI
        </button>

        {/* COD */}
        <button
          onClick={() => navigate("/payment-method/cod")}
          className={`${baseButton} border-gray-200 ${hoverStyle}`}
        >
          Cash on Delivery
        </button>
      </div>
    </div>
  );
}
