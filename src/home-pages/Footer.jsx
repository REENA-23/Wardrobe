import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          {/* LEFT LINKS */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">
                Important Links
              </h4>
              <ul className="space-y-3">
                <li className="hover:text-orange-500 cursor-pointer">
                  All Products
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  New Arrivals
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  Collections
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  Best Seller
                </li>
              </ul>
            </div>

            <div className="mt-8 lg:mt-10">
              <ul className="space-y-3">
                <li className="hover:text-orange-500 cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <div className="border border-orange-500 rounded-2xl px-10 py-6 text-4xl tracking-widest">
              LOGO
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="text-sm space-y-4">
            <p>
              <span className="text-orange-500 font-semibold">Address:</span>{" "}
              Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet,
            </p>
            <p>
              <span className="text-orange-500 font-semibold">Email:</span>{" "}
              demo@gmail.com
            </p>
            <p>
              <span className="text-orange-500 font-semibold">Phone:</span>{" "}
              (+91) 2434 59453
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 pt-4">
              {[
                <FaYoutube />,
                <FaInstagram />,
                <FaFacebookF />,
                <FaGoogle />,
                <FaGoogle />,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-black text-white
                  flex items-center justify-center cursor-pointer
                  transition-all duration-300
                  hover:bg-orange-500"
                >
                  {Icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-orange-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
          <span>All rights reserved by @demo</span>
          <span>Design & Developed by Pruthatek</span>
        </div>
      </div>
    </footer>
  );
}
