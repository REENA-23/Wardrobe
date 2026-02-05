import { useNavigate } from "react-router-dom";
import Footer from "../home-pages/Footer";
import CartNavbar from "./CartNavbar";
import TrendingItems from "./TrendingItems";

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <>
      <CartNavbar />
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        {/* Breadcrumb */}
        <div className="w-full max-w-6xl mb-10 text-left text-sm text-gray-500">
          Home / <span className="text-black">Add to cart</span>
        </div>

        {/* Empty Cart Illustration */}
        <div className="w-[180px] h-[180px] rounded-full bg-gray-100 mb-6 flex items-center justify-center">
          {/* You can replace this with an image later */}
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold mb-4">
          Hey! No items in your cart
        </h2>

        {/* Button */}
        <button
          onClick={() => navigate("/collection")}
          className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
        >
          Go to Collection
        </button>
      </div>
      <TrendingItems/>
      <Footer />
    </>
  );
}
