import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Dresses from "./pages/Dresses";
import Coordset from "./pages/Coordset";
import Gown from "./pages/Gown";
import Suitset from "./pages/Suitset";
import Tops from "./pages/Tops";
import Lahenga from "./pages/Lahenga";

// home-pages (icon pages)
import Search from "./home-pages/SearchOverlay";
import Favourite from "./home-pages/WishlistDrawer";
import Cart from "./cart-pages/Cart";
import Checkout from "./cart-pages/Checkout";
import Person from "./home-pages/LoginModal";
import Payment from "./payment-pages/Payment";


export default function App() {
  return (
    <Routes>
      {/* product pages */}
      <Route path="/" element={<Home />} />
      <Route path="/coordset" element={<Coordset />} />
      <Route path="/dresses" element={<Dresses />} />
      <Route path="/gown" element={<Gown />} />
      <Route path="/lahenga" element={<Lahenga />} />
      <Route path="/suitset" element={<Suitset />} />
      <Route path="/tops" element={<Tops />} />

      {/* icon pages */}
      <Route path="/search" element={<Search />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/account" element={<Person />} />
      <Route path="/payment" element={<Payment />} />
      
    </Routes>
  );
}
