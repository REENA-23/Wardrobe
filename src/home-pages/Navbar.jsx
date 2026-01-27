import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import SearchOverlay from "./SearchOverlay";
import WishlistDrawer from "./WishlistDrawer";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b relative z-50">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          {/* SOCIAL ICONS */}
          <div className="hidden md:flex gap-4">
            <button className="w-[24px] h-[24px] flex items-center justify-center">
              <FaInstagram size={24} />
            </button>
            <button className="w-[24px] h-[24px] flex items-center justify-center">
              <FaFacebookF size={24} />
            </button>
            <button className="w-[24px] h-[24px] flex items-center justify-center">
              <FaWhatsapp size={24} />
            </button>
            <button className="w-[24px] h-[24px] flex items-center justify-center">
              <FaYoutube size={24} />
            </button>
          </div>

          {/* LOGO (REGULAR FONT WEIGHT) */}
          <div className="text-2xl md:text-3xl font-normal tracking-widest">
            LOGO
          </div>

          {/* ACTION ICONS */}
          <div className="flex gap-4 md:gap-5">
            {/* SEARCH */}
            <button
              onClick={() => setOpenSearch(true)}
              className="w-[24px] h-[24px] flex items-center justify-center"
            >
              <FiSearch size={24} />
            </button>

            {/* WISHLIST */}
            <button
              onClick={() => setOpenWishlist(true)}
              className="hidden sm:flex w-[24px] h-[24px] items-center justify-center"
            >
              <FiHeart size={24} />
            </button>

            {/* CART */}
            <button className="w-[24px] h-[24px] flex items-center justify-center">
              <FiShoppingCart size={24} />
            </button>

            {/* USER */}
            <button
              onClick={() => setOpenLogin(true)}
              className="w-[24px] h-[24px] flex items-center justify-center"
            >
              <FiUser size={24} />
            </button>
          </div>
        </div>

        {/* MENU BAR */}
        <nav className="hidden md:block bg-neutral-900 text-white">
          <ul className="flex justify-center gap-12 py-3 text-sm font-normal">
            <li>
              <Link to="/" className="hover:text-gray-300">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/gown" className="hover:text-gray-300">
                Gown
              </Link>
            </li>
            <li>
              <Link to="/dresses" className="hover:text-gray-300">
                Dresses
              </Link>
            </li>
            <li>
              <Link to="/suitset" className="hover:text-gray-300">
                Suit Set
              </Link>
            </li>
            <li>
              <Link to="/tops" className="hover:text-gray-300">
                Top&apos;s
              </Link>
            </li>
            <li>
              <Link to="/coordset" className="hover:text-gray-300">
                Co-Ord Set
              </Link>
            </li>
            <li>
              <Link to="/lahenga" className="hover:text-gray-300">
                Lehenga
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* SEARCH OVERLAY */}
      {openSearch && <SearchOverlay onClose={() => setOpenSearch(false)} />}

      {/* WISHLIST DRAWER */}
      {openWishlist && (
        <WishlistDrawer onClose={() => setOpenWishlist(false)} />
      )}

      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}

    </>
  );
}
