import { FiX } from "react-icons/fi";

export default function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      {/* CARD */}
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl p-8">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500"
        >
          <FiX />
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-normal mb-6">Log in</h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Id"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none"
        />

        {/* LOGIN BUTTON */}
        <button className="w-full bg-neutral-900 text-white py-3 rounded-lg mb-6">
          Log in
        </button>

        {/* CREATE ACCOUNT */}
        <p className="text-center text-sm mb-4">
          New Customer?{" "}
          <span className="text-orange-500 cursor-pointer">
            Create Your Account.
          </span>
        </p>

        {/* OR */}
        <div className="text-center text-sm text-gray-500 mb-4">
          Or
        </div>

        {/* SIGN UP WITH */}
        <div className="flex justify-center">
          <button className="px-6 py-2 border rounded-full text-gray-600">
            Sign up With
          </button>
        </div>
      </div>
    </div>
  );
}
