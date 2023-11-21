"use client";
import React from "react";

const CheckOut = () => {
  return (
    <div className="syner-container">
      <div className="">
        {/* Special Offer coupon code */}
        {/* <div className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg  mx-auto">
          <div className="text-3xl font-bold mb-4">Special Offer!</div>
          <div className="text-lg mb-4">
            Get <span className="text-yellow-400 font-bold">25% OFF</span> your
            next purchase!
          </div>
          <div className="text-base mb-4">Use coupon code:</div>
          <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
            <span className="text-2xl font-semibold">TAILOFFER25</span>
            <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Copy
            </button>
          </div>
          <div className="text-sm mt-4">
            <p>
              Valid until{" "}
              <span className="font-semibold">December 31, 2023</span>
            </p>
            <p>Terms and conditions apply.</p>
          </div>
        </div> */}
        {/* <!-- Shipping Information --> */}
        <div className="md:flex gap-10 py-10">
          <div className="bg-white md:w-[65%] p-8 rounded-lg shadow-md border">
            {/* <h1 className="text-2xl font-bold text-gray-800  mb-4">Checkout</h1> */}

            {/* Special Offer coupon code */}
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg  mx-auto">
              <div className="text-3xl font-bold mb-2">Special Offer!</div>
              <div className="text-lg mb-2">
                Get <span className="text-yellow-400 font-bold">25% OFF</span>{" "}
                your next purchase!
              </div>
              <div className="text-base mb-2">Use coupon code:</div>
              <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
                <span className="text-2xl font-semibold">TAILOFFER25</span>
                <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Copy
                </button>
              </div>
              <div className="text-sm mt-4 flex justify-between">
                <p>
                  Valid until{" "}
                  <span className="font-semibold">December 31, 2023</span>
                </p>
                <p>Terms and conditions apply.</p>
              </div>
            </div>

            {/* <!-- Shipping Address --> */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700  py-8">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label for="first_name" className="block text-gray-700  mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full rounded-lg border py-2 px-3 "
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label for="last_name" className="block text-gray-700  mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="w-full rounded-lg border py-2 px-3 "
                  />
                </div>
              </div>
              {/* Company Name */}
              <div className="mt-4">
                <label for="company-name" className="block text-gray-700  mb-1">
                  Company name (Optional)
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* Country */}
              <div className="mt-4">
                <label for="country" className="block text-gray-700  mb-1">
                  Type your country
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* Address */}
              <div className="mt-4">
                <label
                  for="street-address"
                  className="block text-gray-700  mb-1"
                >
                  Street address
                </label>
                <input
                  placeholder="House number and state name"
                  type="text"
                  id="street-address"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* Address */}
              <div className="mt-4">
                <label
                  for="address"
                  className="block text-gray-700  mb-1"
                ></label>
                <input
                  placeholder="Apartment, suite, unite etc (optional)"
                  type="text"
                  id="address"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* District */}
              <div className="mt-4">
                <label for="district" className="block text-gray-700  mb-1">
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* City */}
              <div className="mt-4">
                <label for="city" className="block text-gray-700  mb-1">
                  City / town
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* Post code */}
              <div className="mt-4">
                <label for="post-code" className="block text-gray-700  mb-1">
                  Post Code / zip (optional)
                </label>
                <input
                  type="number"
                  id="post-code"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* Phone Number */}
              <div className="mt-4">
                <label for="phone" className="block text-gray-700  mb-1">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
              {/* Email */}
              <div className="mt-4">
                <label for="email" className="block text-gray-700  mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border py-2 px-3 "
                />
              </div>
            </div>
          </div>
          {/* payment information */}
          <div className="md:w-[35%] h-fit px-2 my-5 md:my-0 rounded-lg shadow-md border">
            <div className="flex flex-col p-5 pb-10 space-y-4 divide-y ">
              <h2 className="text-2xl font-semibold">Order items</h2>
              <ul className="flex flex-col pt-4 space-y-2">
                <li className="flex items-start justify-between">
                  <h3>
                    Hard taco, chicken
                    <span className="text-sm dark:text-violet-400">x3</span>
                  </h3>
                  <div className="text-right">
                    <span className="block">$7.50</span>
                    <span className="text-sm dark:text-gray-400">$2.50</span>
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <h3>
                    Hard taco, beef
                    <span className="text-sm dark:text-violet-400">x3</span>
                  </h3>
                  <div className="text-right">
                    <span className="block">$8.25</span>
                    <span className="text-sm dark:text-gray-400">$2.75</span>
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <h3>
                    Curly fries
                    <span className="text-sm dark:text-violet-400">x1</span>
                  </h3>
                  <div className="text-right">
                    <span className="block">$1.75</span>
                    <span className="text-sm dark:text-gray-400">$1.75</span>
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <h3>
                    Large soda
                    <span className="text-sm dark:text-violet-400">x2</span>
                  </h3>
                  <div className="text-right">
                    <span className="block">$4.00</span>
                    <span className="text-sm dark:text-gray-400">$2.00</span>
                  </div>
                </li>
              </ul>
              <div className="pt-4 space-y-2">
                <div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$21.50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-3 h-3 mt-1 fill-current dark:text-violet-400"
                    >
                      <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                      <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                    </svg>
                    <span className="dark:text-gray-400">
                      Spend $20.00, get 20% off
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-$4.30</span>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>$0.50</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span>Delivery fee</span>
                    <span>$4.00</span>
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-violet-400"
                  >
                    How do our fees work?
                  </a>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="font-semibold">$22.70</span>
                  </div>

                  {/* <!-- Payment Information --> */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700  mb-2">
                      Payment Information
                    </h2>
                    <div className="mt-4">
                      <label
                        for="card_number"
                        className="block text-gray-700  mb-1"
                      >
                        Card Number
                      </label>
                      <input
                        placeholder="0000 0000 0000 0000"
                        type="text"
                        id="card_number"
                        className="w-full rounded-lg border py-2 px-3 "
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <label
                          for="exp_date"
                          className="block text-gray-700  mb-1"
                        >
                          Expiration Date
                        </label>
                        <input
                          placeholder="MM / YY"
                          type="text"
                          id="exp_date"
                          className="w-full rounded-lg border py-2 px-3 "
                        />
                      </div>
                      <div>
                        <label for="cvv" className="block text-gray-700  mb-1">
                          CVV
                        </label>
                        <input
                          placeholder="000"
                          type="text"
                          id="cvv"
                          className="w-full rounded-lg border py-2 px-3 "
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
