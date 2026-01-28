import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchOverlay from "../home-pages/SearchOverlay";
import WishlistDrawer from "../home-pages/WishlistDrawer";
import LoginModal from "../home-pages/LoginModal";

export default function CartNavbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b z-50">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* LEFT – SOCIAL ICONS */}
          <div className="hidden md:flex gap-4">
            <button className="w-6 h-6 flex items-center justify-center">
              <FaInstagram size={24} />
            </button>
            <button className="w-6 h-6 flex items-center justify-center">
              <FaFacebookF size={24} />
            </button>
            <button className="w-6 h-6 flex items-center justify-center">
              <FaWhatsapp size={24} />
            </button>
            <button className="w-6 h-6 flex items-center justify-center">
              <FaYoutube size={24} />
            </button>
          </div>

          {/* CENTER – LOGO */}
          <div className="text-3xl font-normal tracking-widest">
            LOGO
          </div>

          {/* RIGHT – ACTION ICONS */}
          <div className="flex gap-5">
            <button
              onClick={() => setOpenSearch(true)}
              className="w-6 h-6 flex items-center justify-center"
            >
              <FiSearch size={24} />
            </button>

            <button
              onClick={() => setOpenWishlist(true)}
              className="hidden sm:flex w-6 h-6 items-center justify-center"
            >
              <FiHeart size={24} />
            </button>

            <Link
              to="/cart"
              className="w-6 h-6 flex items-center justify-center"
            >
              <FiShoppingCart size={24} />
            </Link>

            <button
              onClick={() => setOpenLogin(true)}
              className="w-6 h-6 flex items-center justify-center"
            >
              <FiUser size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAYS */}
      {openSearch && <SearchOverlay onClose={() => setOpenSearch(false)} />}
      {openWishlist && (
        <WishlistDrawer onClose={() => setOpenWishlist(false)} />
      )}
      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </>
  );
}
