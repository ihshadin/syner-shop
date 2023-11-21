"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMinus, HiOutlineChevronRight, HiPlus } from "react-icons/hi";

const MyCart = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="syner-container">
      <div className="py-5 md:py-8 lg:pt-10 ">
        <p className="inline-flex items-center gap-1 font-medium text-black-2 lg:text-lg">
          <Link
            href="/"
            className="hover:text-my-accent cursor-pointer transition-colors"
          >
            Home
          </Link>
          <HiOutlineChevronRight />
          <Link
            href="/shop"
            className="hover:text-my-accent cursor-pointer transition-colors"
          >
            Shop
          </Link>
          <HiOutlineChevronRight />
          <span>Cart</span> <HiOutlineChevronRight />
        </p>
      </div>
      <div className="md:flex gap-20 mx-auto md:justify-between">
        <div className="md:w-[65%]">

        <h2 className="text-xl font-semibold py-5">Your cart</h2>

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

           {/* Cart Products */}

          <ul className="flex flex-col divide-y">
            <li className="flex md:flex-col py-6 ">
              <div className="md:flex mx-0 px-2 md:px-0 w-full space-x-2 sm:space-x-4">
                <img
                  className="md:flex-shrink-0 justify-center items-center object-cover w-24 h-24 md:w-32 md:h-32 rounded outline-none "
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                  alt="Polaroid camera"
                />
              
                <div className="flex flex-col md:pt-0 md:justify-between w-full py-5 md:py-0">
                  <div className="md:flex md:justify-between w-full pb-2 ">
                    {/* Product name */}
                    <div className="space-y-1  md:w-[60%]">
                      <div className="flex justify-between ">
                      <h3 className="md:hidden md:text-lg font-semibold leadi sm:pr-8">Product: </h3>
                      <h3 className="md:text-lg md:font-semibold leadi sm:pr-8">
                        Polaroid camera
                      </h3>
                      </div>
                      <p className="text-sm dark:text-gray-400">Classic</p>
                    </div>
                    {/* Quantity and price */}

                    <div className="flex justify-between items-center py-2 md:py-0">
                    <h3 className="md:hidden md:text-lg  leadi sm:pr-8">Quantity: </h3>
                    <div className="h-[25px] mt-2 md:mt-0 md:h-[40px] w-[6rem] md:w-[100%] border border-[#c2c2c2] rounded-lg px-2 md:px-4 flex items-center justify-between gap-5 ">
                      <button
                        type="button"
                        disabled={quantity <= 1}
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        <HiMinus />
                      </button>
                      <span className="text-gray-5">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}
                      >
                        <HiPlus />
                      </button>
                    </div>

                    </div>

                    {/* price */}
                    
                    <div className="md:text-right md:w-[20%] pb-5 md:pb-0">
                      <div className="flex justify-between">
                        <div>
                        <h3 className="md:hidden md:text-lg  leadi sm:pr-8">price: </h3>
                        </div>
                          <div>
                          <p className="text-lg font-semibold">59.99€</p>
                      <p className="text-sm line-through dark:text-gray-600">
                        75.50€
                      </p>
                          </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span >Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* 2nd product */}
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">

                {/* image */}
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                  alt="Replica headphones"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  {/* product Name */}
                  <div className="md:flex  justify-between w-full pb-2 ">
                    <div className="space-y-1 md:w-[60%]">
                      <h3 className="text-lg font-semibold leadi sm:pr-8">
                        Replica headphones
                      </h3>
                      <p className="text-sm dark:text-gray-400">White</p>
                    </div>
                     {/* Quantity*/}
                    <div className="flex justify-between items-center py-2 md:py-0">
                    <h3 className="md:hidden md:text-lg  leadi sm:pr-8">Quantity: </h3>
                    <div className="h-[25px] mt-2 md:mt-0 md:h-[40px] w-[6rem] md:w-[100%] border border-[#c2c2c2] rounded-lg px-2 md:px-4 flex items-center justify-between gap-5 ">
                      <button
                        type="button"
                        disabled={quantity <= 1}
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        <HiMinus />
                      </button>
                      <span className="text-gray-5">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}
                      >
                        <HiPlus />
                      </button>
                    </div>
                    </div>
                     {/* Price*/}
                    <div className="md:text-right md:w-[20%] pb-5 md:pb-0">
                      <div className="flex justify-between">
                        <div>
                        <h3 className="md:hidden md:text-lg  leadi sm:pr-8">price: </h3>
                        </div>
                          <div>
                          <p className="text-lg font-semibold">59.99€</p>
                      <p className="text-sm line-through dark:text-gray-600">
                        75.50€
                      </p>
                          </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* 3rd product */}
            {/* <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                  alt="Replica headphones"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1 md:w-[60%]">
                      <h3 className="text-lg font-semibold leadi sm:pr-8">
                        Replica headphones
                      </h3>
                      <p className="text-sm dark:text-gray-400">White</p>
                    </div>
                    <div className="h-[40px] md:w-[20%] border border-[#c2c2c2] rounded-lg !py-0 px-4 flex items-center justify-between gap-5 ">
                      <button
                        type="button"
                        disabled={quantity <= 1}
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        <HiMinus />
                      </button>
                      <span className="text-gray-5">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}
                      >
                        <HiPlus />
                      </button>
                    </div>
                    <div className="md:w-[20%] text-right">
                      <p className="text-lg font-semibold">99.95€</p>
                      <p className="text-sm line-through dark:text-gray-600">
                        150€
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>

        <div className="w-full md:w-[35%]">
          {/* <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div> */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button> */}

              <div className="flex justify-between pt-5 space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:border-violet-400"
                >
                  Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                >
                  <span className="sr-only sm:not-sr-only">Continue to</span>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyCart;