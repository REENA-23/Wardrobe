
import CartItem from "./CartItem";
import PaymentSummary from "./PaymentSummary";
import TrendingItems from "./TrendingItems";
import CartNavbar from "./CartNavbar";
import Footer from "../home-pages/Footer";

export default function Checkout() {
  return (
    <div>
      <CartNavbar/>
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
    
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Home / Add to cart
      </p>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE – CART ITEMS */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <CartItem />
          <hr className="my-6" />
          <CartItem />
        </div>

        {/* RIGHT SIDE – PAYMENT */}
        <PaymentSummary />
        
      </div>
      
    </div>
    <TrendingItems/>
    <Footer/>
    </div>
  );
}
