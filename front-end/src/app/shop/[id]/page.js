"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import HtmlParser from "react-html-parser";
import "@smastrom/react-rating/style.css";
import {
  BiLogoFacebook,
  BiLogoGooglePlus,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTumblr,
  BiLogoTwitter,
  BiSolidEnvelope,
} from "react-icons/bi";

import ReactImageMagnify from "react-image-magnify";

const SinglePage = () => {
  const [loading, setLoading] = useState(true);
  const [medicine, setMedicine] = useState([0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setMedicine(data);
        console.log("from data", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const {
    _id,
    medicine_name,
    image,
    price,
    sellQuantity,
    available_quantity,
    medicine_summary,
    medicine_description,
    tags,
    rating,
    feature_with_details,
    category,
    allRatings,
    discount,
    pharmacist_email,
    order_quantity,
  } = medicine[0] || {};

  const cartMedicine = {
    medicine_Id: _id,
    medicine_name,
    image,
    price,
    discount,
    quantity,
    order_quantity,
  };

  return (
    <section className="syner-container">
      <div className="container mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-2">
        <p className="inline-flex items-center gap-1 font-medium md:font-semibold tracking-wider text-black-2 lg:text-lg">
          <Link
            href="/"
            className="hover:text-my-accent cursor-pointer transition-colors"
          >
            Home
          </Link>

          <Link
            href="/"
            className="hover:text-my-accent cursor-pointer transition-colors"
          >
            Medicines
          </Link>
          <span>Details</span>
        </p>
      </div>
      {/* product details */}
      <div className="syner-secondary-bg rounded-md">
        <div className="xl:flex gap-3">
          <div className="xl:w-1/2 h-[500px]">
            <ReactImageMagnify
              className="z-50"
              {...{
                smallImage: {
                  alt: "medicine image",
                  isFluidWidth: true,
                  src: image,
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </div>
          <div className="xl:w-1/2 space-y-5 lg:space-y-7">
            <div className="space-y-1">
              {discount > 0 && (
                <p className="bg-black rounded-md py-1 px-2 text-xs font-medium text-white w-fit">
                  -{discount}% OFF
                </p>
              )}
              <h3 className="text-xl lg:text-3xl font-medium lg:font-semibold tracking-wider text-title-color">
                {medicine_name}
              </h3>
            </div>
            <Rating
              style={{ maxWidth: 80 }}
              value={rating}
              readOnly
              //   itemStyles={customStyles}
            />
            <p className="inline-flex gap-1">
              <span className="font-semibold lg:font-bold text-my-pink inline-flex items-center text-lg md:text-xl lg:text-2xl">
                ৳{" "}
                {discount > 0
                  ? (price - (price / 100) * discount)?.toFixed(2)
                  : price?.toFixed(2)}
              </span>
              {discount > 0 && (
                <span className="font-medium inline-flex items-center text-base lg:text-xl text-gray-5 line-through">
                  ৳ {price}
                </span>
              )}
            </p>
            <p className="font-medium text-black-2 tracking-wide text-sm lg:text-base">
              Availability:{" "}
              {available_quantity === sellQuantity ? (
                <span className="text-red-500">Out of Stock</span>
              ) : (
                <span className="text-my-primary">In Stock</span>
              )}
            </p>
            <p className="text-gray-4 text-justify text-sm lg:text-base lg:leading-7 w-full">
              {medicine_summary}
            </p>
            <div className="border border-gray-3 py-5 px-3 rounded-md font-semibold flex items-center justify-around">
              <span className="text-base lg:text-lg tracking-wide">
                Quantity:
              </span>
              <div className="border border-gray-3 rounded-full w-fit py-3 px-5 flex items-center justify-between gap-5">
                <button
                  type="button"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                  className="cursor-no-drop"
                >
                  {/* <HiMinus /> */} hin -
                </button>
                <span className="text-gray-5">{quantity}</span>
                <button
                  type="button"
                  disabled={quantity >= 5}
                  onClick={() => setQuantity(quantity + 1)}
                  className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}
                >
                  {/* <HiPlus />*/} hin +
                </button>
              </div>
              {/* {available_quantity === sellQuantity ? (
                <ReqToStockButton reqToStock={reqToStock} cls="req-btn-lg" />
              ) : (
                <AddCartButton cartMedicine={cartMedicine} cls="cart-btn" />
              )} */}
              <button>Add To Card</button>
            </div>
            <div className="text-[14px] space-y-1 md:space-y-2">
              <p className="font-medium text-black-2">
                SKU: <span className="text-gray-4">N/A-202</span>
              </p>
              <p className="font-medium text-black-2">
                Categories:{" "}
                <span className="text-gray-4">{category?.label}</span>
              </p>
              <p className="font-medium text-black-2">
                Tags:{" "}
                {tags?.map((tag, idx) => (
                  <span key={idx} className="text-gray-4 mr-2">
                    {tag?.label}
                  </span>
                ))}
              </p>
              <p className="font-medium text-black-2">
                Share:{" "}
                <span className="text-gray-4 inline-flex items-center gap-2">
                  <BiLogoFacebook className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoTwitter className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoGooglePlus className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoLinkedin className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoTwitter className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoInstagram className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoPinterest className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoTumblr className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiSolidEnvelope className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Description & reviews */}
      <div className="my-container bg-white mt-10 rounded-md">
        <div className="flex gap-8">
          <div
            className={`${
              isOpen ? "border-b-[3px]" : ""
            } text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent border-my-accent pb-3 cursor-pointer transition duration-200`}
          >
            <button type="button" onClick={toggleOpen}>
              Description
            </button>
          </div>
          <div
            className={`${
              isOpen ? "" : "border-b-[3px]"
            } text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent border-my-accent pb-3 cursor-pointer transition duration-200`}
          >
            <button type="button" onClick={toggleOpen}>
              Reviews ({allRatings?.length || 0})
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative">
          {/* description */}
          {isOpen && (
            <div className="transition-all duration-500 max-w-[100vw]">
              <div className="lg:leading-8 pt-6 lg:pt-8">
                {HtmlParser(medicine_description)}
              </div>
              <div className="space-y-6 lg:space-y-10 pt-8 lg:pt-10">
                <h3 className="text-xl lg:text-2xl font-medium lg:font-semibold tracking-wide text-black-2">
                  Product Features
                </h3>
                <div>{HtmlParser(feature_with_details)}</div>
              </div>
            </div>
          )}

          {/* Reviews  */}
          {!isOpen && (
            <div className="mt-8 w-full max-w-[100vw] transition-all duration-500">
              {allRatings && <MedicineReviews allRatings={allRatings} />}
              <div className="lg:w-4/5">
                <h4 className="my-5 text-gray-5">
                  Your feedback is invaluable.Share your thoughts and
                  experiences with a quick review.
                </h4>
                <h3 className="my-1 text-xl font-semibold lg:tracking-wide">
                  Your Rating
                </h3>
                <div>
                  <Rating
                    className="mb-5"
                    style={{ maxWidth: 100 }}
                    value={rating1}
                    onChange={setRating}
                    isRequired
                  />
                </div>
                <div>
                  <form onSubmit={handleReviews}>
                    <div className="pb-6">
                      <textarea
                        required
                        placeholder="Your Review"
                        className="w-full outline-my-primary rounded-md border-[1px] border-gray-3 p-2"
                        name="reviewMessage"
                        rows="4"
                      />
                    </div>
                    <input
                      className="circle-btn"
                      type="submit"
                      value="SUBMIT YOUR REVIEW"
                    />
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
