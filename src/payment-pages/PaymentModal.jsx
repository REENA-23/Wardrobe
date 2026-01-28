// src/payment/PaymentModal.jsx
export default function PaymentModal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[420px] rounded-xl shadow-lg relative p-6">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
