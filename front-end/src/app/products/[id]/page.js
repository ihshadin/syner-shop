"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./SingleProduct.css";

import {
  BiCartAdd,
  BiLogoFacebook,
  BiLogoGooglePlus,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTumblr,
  BiLogoTwitter,
  BiShoppingBag,
  BiSolidEnvelope,
} from "react-icons/bi";
import { HiMinus, HiOutlineChevronRight, HiPlus } from "react-icons/hi";

import ReactImageMagnify from "react-image-magnify";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import ProductReview from "./ProductReview";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import SectionTitle from "@/components/Titles/SectionTitle";

const SinglePage = () => {
  const [loading, setLoading] = useState(true);
  const [swiperRef, setSwiperRef] = useState(null);
  const [medicine, setMedicine] = useState([0]);
  const [rating1, setRating] = useState(0);
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
    productsImages,
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
    <section className="syner-container border border-[#c2c2c2] rounded">
      <div className="container mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-2">
        <p className="inline-flex items-center gap-1 tracking-wider text-black-2 lg:text-lg">
          <Link
            href="/"
            className="hover:text-my-accent cursor-pointer transition-colors"
          >
            Home
          </Link>
          <HiOutlineChevronRight />
          <Link
            href="/products"
            className="hover:text-my-accent cursor-pointer transition-colors"
          >
            Products
          </Link>
          <HiOutlineChevronRight />
          <span>Details</span> <HiOutlineChevronRight />
          <span className="hidden md:block">{medicine_name}</span>
        </p>
      </div>
      {/* product details */}
      <div className="">
        <div className="md:flex gap-5 ">
          <div className="md:w-1/2">
            {/* <ReactImageMagnify
              className="z-50"
              {...{
                smallImage: {
                  alt: "medicine image",
                  isFluidWidth: true,
                  src: image,
                  style: {
                    width: "800px",
                    height: "800px",
                  },
                },
                largeImage: {
                  src: image,
                  width: 1400,
                  height: 1000,
                  style: {
                    "object-fit": "cover",
                    "object-possition": "center center",
                  },
                },
              }}
            /> */}
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: image,

                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "100%",
                },
              }}
            />
            <div className="mt-4">
              <Swiper
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={5}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper "
                initialSlide={2}
              >
                {productsImages?.map((img) => (
                  <SwiperSlide>
                    <img
                      className="h-28 w-28"
                      src={img?.image}
                      alt=""
                      srcset=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h3 className="text-xl lg:text-3xl font-medium lg:font-semibold tracking-wider text-title-color">
              {medicine_name}
            </h3>
            <div className="flex gap-x-2 items-center py-4">
              <Rating
                style={{ maxWidth: 70 }}
                value={rating}
                readOnly
                className="[&>*]:!fill-yellow-400 [&>*]:!stroke-yellow-400"
              />
              <span>{rating}</span>
              <p className="font-medium  tracking-wide text-sm lg:text-base text-[#5cb85c] ">
                {available_quantity === sellQuantity ? (
                  <span className="text-red-500">Out of Stock</span>
                ) : (
                  <span className="text-my-primary">In Stock</span>
                )}
              </p>
            </div>
            <div className=" bg-gray-100 p-4 rounded mb-5">
              {discount > 0 && (
                <div className="flex gap-2">
                  <p className="font-medium line-through text-gray-400">
                    $ {price}
                  </p>
                  <span>Inclusive of all taxes</span>
                </div>
              )}

              <div className="flex gap-2 items-center mt-1">
                <p className="font-semibold syner-primary-text  text-lg md:text-xl lg:text-2xl">
                  ${" "}
                  {discount > 0
                    ? (price - (price / 100) * discount)?.toFixed(2)
                    : price?.toFixed(2)}
                </p>

                {discount > 0 && (
                  <p className="z-10 rounded py-1 px-2 text-xs font-medium  syner-primary-bg syner-white w-[4.7rem]">
                    -{discount}% OFF
                  </p>
                )}
              </div>
            </div>
            <p className="text-gray-4 text-justify text-sm lg:text-base lg:leading-5 w-full">
              {medicine_summary}
            </p>

            <div class="mb-4 pt-4">
              <span class="font-bold text-gray-700">Select Color:</span>
              <div class="flex items-center mt-2">
                <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div class="mb-4">
              <span class="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div class="flex items-center mt-2">
                <button class="bg-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button class="bg-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button class="bg-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button class="bg-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button class="bg-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>

            <div className=" md:flex gap-4 my-4 pt-4">
              <div className="border border-[#c2c2c2] rounded  px-4 font-semibold flex items-center justify-between gap-5 ">
                <button
                  type="button"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <HiMinus />
                </button>
                <span className="text-gray-5 w-1">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}
                >
                  <HiPlus />
                </button>
              </div>
              <div className="w-[200px]">
                <PrimaryBtn
                  btnType={"syner-outline"}
                  btnText={"buy now"}
                  btnIcon={<BiShoppingBag className="w-5 h-5" />}
                />
              </div>
              <div className="w-[200px]">
                <PrimaryBtn
                  btnType={"syner-solid"}
                  btnText={"Add To Cart"}
                  btnIcon={<BiCartAdd className="w-5 h-5" />}
                />
              </div>
            </div>
            <div className="text-[14px] space-y-1 md:space-y-2">
              <p className="font-medium text-black-2">
                SKU: <span className="text-gray-4">N/A-202</span>
              </p>
              <p className="font-medium text-black-2">
                Categories:{" "}
                {/* <span className="text-gray-4">{category?.label}</span> */}
                <span className="text-gray-4">HeadPhone</span>
              </p>
              <p className="font-medium text-black-2">
                Tags:{" "}
                {tags?.map((tag, idx) => (
                  <span key={idx} className="text-gray-4 mr-2">
                    {tag}
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
      <div className="bg-white mt-16 rounded-md">
        <div className="flex gap-8">
          <div
            className={`${
              isOpen ? "border-b-[3px] syner-primary-border" : ""
            } text-xl lg:text-2xl font-semibold tracking-wide cursor-pointer pb-1 transition duration-200`}
          >
            <button type="button" onClick={toggleOpen}>
              Description
            </button>
          </div>
          <div
            className={`${
              isOpen
                ? ""
                : "border-b-[3px] border-[var(--primary-border-color)]"
            } text-xl lg:text-2xl font-semibold tracking-wide cursor-pointer pb-1 transition duration-200`}
          >
            <button type="button" onClick={toggleOpen}>
              Reviews ({allRatings?.length || 0})
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative">
          {/* description */}
          {isOpen && (
            <div className="transition-all duration-500">
              <p className="lg:leading-8 pt-6 lg:pt-8">
                {medicine_description}
              </p>
              <div className="pt-8">
                <SectionTitle title="Product Features" />
                <p className="pt-4">{feature_with_details}</p>
              </div>
            </div>
          )}

          {/* Reviews  */}
          {!isOpen && (
            <div className="mt-8 w-full max-w-[100vw] transition-all duration-500">
              {allRatings && <ProductReview allRatings={allRatings} />}
            </div>
          )}
        </div>
      </div>
      {/* Related Products */}
      <div className="mb-8">
        <div className="my-6">
          <SectionTitle title="Related Products" />
        </div>
        <RelatedProduct />
      </div>
    </section>
  );
};

export default SinglePage;
