import { useState } from "react";
import CartNavbar from "../cart-pages/CartNavbar";
import PaymentSummary from "../cart-pages/PaymentSummary";
import PaymentForm from "./PaymentForm";
import PaymentModal from "./PaymentModal";
import Footer from "../home-pages/Footer";

export default function Payment() {
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <CartNavbar />

      {/* PAGE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        
        {/* BREADCRUMB */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Add to cart
        </p>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT – SHIPPING / BASIC DETAILS FORM */}
          <div className="lg:col-span-2">
            <PaymentForm />
          </div>

          {/* RIGHT – PAYMENT SUMMARY */}
          <div>
            <PaymentSummary onPay={() => setOpenPayment(true)} />
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />

      {/* PAYMENT MODAL */}
      {openPayment && (
        <PaymentModal onClose={() => setOpenPayment(false)} />
      )}
    </>
  );
}
