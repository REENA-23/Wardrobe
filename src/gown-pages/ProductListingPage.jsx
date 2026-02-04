import { useState } from "react";
import { FaEye, FaBars } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

/*  PAGE  */
export default function ProductListingPage() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between
        px-4 py-3 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setOpenFilter(true)}>
          <FaBars size={20} />
        </button>
        <p className="text-sm text-gray-600">
          Showing 3 of 30 products
        </p>
      </div>

      <div className="flex gap-10 px-10 py-8 max-md:px-4">

        {/* FILTER */}
        <FilterSidebar
          open={openFilter}
          onClose={() => setOpenFilter(false)}
        />

        {/* PRODUCTS */}
        <ProductSection />
      </div>
    </div>
  );
}

/*  FILTER SIDEBAR  */
function FilterSidebar({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden
        transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <aside className="hidden md:block w-[300px] bg-white p-6 shadow-sm">
        <FilterContent />
      </aside>

      <aside
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white
        rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">FILTER BY</h3>
          <button onClick={onClose} className="text-sm text-gray-500">
            Close
          </button>
        </div>

        <FilterContent />
      </aside>
    </>
  );
}

/*  FILTER CONTENT */
function FilterContent() {
  return (
    <>
      <FilterSection title="Price Range">
        <input type="range" className="w-full accent-orange-500" />
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>₹0</span>
          <span>₹5000</span>
        </div>
      </FilterSection>

      <Divider />

      <FilterGroup
        title="Discount"
        items={[
          "Upto 10% (96)",
          "10%-20% (17)",
          "20%-30% (15)",
          "30%-40% (10)",
          "More than 40% (8)",
        ]}
      />

      <Divider />

      <FilterGroup
        title="Colour"
        items={[
          "Pink (96)",
          "Pink (17)",
          "Pink (15)",
          "Pink (10)",
          "Pink (8)",
        ]}
      />

      <Divider />

      <FilterGroup
        title="Size"
        items={["S (96)", "M (17)", "L (15)", "XL (10)", "XXL (8)"]}
      />
    </>
  );
}

function FilterSection({ title, children }) {
  return (
    <div className="mb-6">
      <p className="font-medium mb-3">{title}</p>
      {children}
    </div>
  );
}

function FilterGroup({ title, items }) {
  return (
    <div className="mb-6">
      <p className="font-medium mb-3">{title}</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-3 text-sm mb-2">
          <input type="checkbox" className="accent-orange-500" />
          {item}
        </label>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 my-5" />;
}

/*  PRODUCT SECTION  */

function ProductSection() {
  return (
    <div className="flex-1">

      <div className="hidden md:flex bg-white rounded-xl shadow-sm
        px-6 py-4 mb-10 justify-between items-center">
        <p className="text-gray-500">Showing 3 of 30 products</p>

        <select className="border rounded-lg px-4 py-2 text-sm">
          <option>Best Seller</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-x-14 gap-y-24
        max-xl:grid-cols-2
        max-md:grid-cols-1">
        {Array.from({ length: 30 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}

/*  PRODUCT CARD  */
function ProductCard() {
  const navigate = useNavigate(); 

  return (
    <div>
      <div className="relative h-[400px] bg-gray-100 rounded overflow-hidden group">

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
          40% OFF
        </span>

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">

          <div className="relative group/icon">
            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
              <HiOutlineSwitchHorizontal size={14} />
            </button>
          </div>

          <div className="relative group/icon">
            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
              <FaEye size={14} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>

          {/* NAVIGATION */}
          <button
            onClick={() => navigate("/add-to-cart")}
            className="w-full bg-black text-white py-2 hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-medium text-sm">Chaniya Choli Kids</p>

        <div className="flex items-center gap-2 mt-1 text-sm">
          <span className="text-orange-500">Rs 2000</span>
          <span className="line-through text-gray-400">Rs 4000</span>
        </div>

        <p className="text-sm text-gray-600 mt-1">3 Colors</p>
      </div>
    </div>
  );
}
