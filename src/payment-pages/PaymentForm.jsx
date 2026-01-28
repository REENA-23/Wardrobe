export default function PaymentForm() {
  return (
  <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">


      {/* SHIPPING ADDRESS */}
      <h3 className="text-orange-500 text-lg font-semibold mb-5">
        Shipping Address
      </h3>

      {/* Address Line 1 & 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Address Line 1
          </label>
          <input
            type="text"
            placeholder="Enter House no, flat no, etc"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Address Line 2
          </label>
          <input
            type="text"
            placeholder="Enter Landmark, street, etc"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Postal / City / State */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="Enter City, Town"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            State
          </label>
          <input
            type="text"
            placeholder="Enter State"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-3 mt-8">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 accent-orange-500"
        />
        <span className="text-sm text-gray-800">
          Make this as my default address
        </span>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* BASIC DETAILS */}
      <h3 className="text-orange-500 text-lg font-semibold mb-5">
        Basic Details
      </h3>

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last name"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Mobile & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Mobile No.
          </label>
          <input
            type="text"
            placeholder="Enter Mobile no."
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>
      </div>
    </div>
  );
}
