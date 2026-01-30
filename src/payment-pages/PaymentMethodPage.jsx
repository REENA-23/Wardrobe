import { useLocation } from "react-router-dom";

import CartNavbar from "../cart-pages/CartNavbar";
import PaymentSummary from "../cart-pages/PaymentSummary";
import PaymentMethod from "./PaymentMethod";
import UPIPayment from "./UPIPayment";
import CardPayment from "./CardPayment";
import EMIPayment from "./EMIPayment";
import CashOnDelivery from "./CashOnDelivery";
import Footer from "../home-pages/Footer";

export default function PaymentMethodPage() {
  const { pathname } = useLocation();

  const isUpiPage = pathname === "/payment-method/upi";
  const isCardPage = pathname === "/payment-method/card";
  const isEmiPage = pathname === "/payment-method/emi";
  const isCodPage = pathname === "/payment-method/cod";

  return (
    <>
      {/* NAVBAR */}
      <CartNavbar />

      {/* PAGE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <p className="text-sm text-gray-500 mb-4">
          Home / Add to cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2">
            {!isUpiPage && !isCardPage && !isEmiPage && !isCodPage && (
              <PaymentMethod />
            )}
            {isUpiPage && <UPIPayment />}
            {isCardPage && <CardPayment />}
            {isEmiPage && <EMIPayment />}
            {isCodPage && <CashOnDelivery />}
          </div>

          {/* RIGHT SECTION */}
          <div>
            <PaymentSummary />
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
