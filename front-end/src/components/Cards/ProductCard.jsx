"use client";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/assets/images/product-image-1.jpg";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiCartAdd } from "react-icons/bi";
import { BsEye, BsHeart } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";

const ProductCard = ({product}) => {
  const {name, reg_price, self_price, category, productImage} = product;
  return (
    <div className="rounded-md shadow-md hover:shadow-xl overflow-hidden transition-shadow relative group ">
      <p className="z-10 rounded py-1 px-2 text-xs font-medium absolute top-3 left-3 syner-primary-bg syner-white">
        -12% OFF
      </p>
      <div className="flex flex-col h-full">
        <div className="relative">
          <Image
            width={400}
            height={400}
            className="h-[180px] md:h-[200px] lg:h-[250px] object-cover transition-all duration-300"
            src={productImage}
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-100 translate-x-20 group-hover:translate-x-0 flex flex-col gap-1 absolute right-1 top-1/2 -translate-y-1/2 transition-all duration-300">
            <BsEye className="w-4 h-4 p-1 rounded box-content shadow-lg cursor-pointer syner-white-bg" />
            <TbArrowsExchange className="w-4 h-4 p-1 rounded box-content shadow-lg cursor-pointer syner-white-bg" />
            <BsHeart className="w-4 h-4 p-1 rounded box-content shadow-lg cursor-pointer syner-white-bg" />
          </div>
        </div>
        <div className="p-2">
          <div className="">
            <p className="text-gray-5 text-xs font-semibold capitalize opacity-60">
              {category}
            </p>
            <Link href={`/products/854`}>
              <h2 className="text-base font-medium hover:underline hover:cursor-pointer h-12 line-clamp-2">
                {name}
              </h2>
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <Rating
                style={{ maxWidth: 70 }}
                value={4.5}
                readOnly
                className="[&>*]:!fill-yellow-400 [&>*]:!stroke-yellow-400"
              />
              <span className="text-xs font-semibold px-2 py-0.5 rounded syner-primary-bg syner-white">
                4.5
              </span>
            </div>
            <p className="inline-flex items-center gap-1 syner-black">
              <span className="text-base lg:text-lg font-bold">${reg_price}</span>
              <span className="text-sm lg:text-base opacity-70 line-through">
                ${self_price}
              </span>
            </p>
          </div>
        </div>
        <div className="text-center text-xs">
          <PrimaryBtn
            btnType={"syner-solid"}
            btnText={"Add To Cart"}
            btnIcon={<BiCartAdd className="w-5 h-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
