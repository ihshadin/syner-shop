import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/syner-shop-favicon.png";

const SiteInfo = ({ expanded }) => {
  return (
    <div className="flex items-center">
      <Image
        width={40}
        height={40}
        className={`cursor-pointer duration-500`}
        src={`${logo.src}`}
      />
      <div
        className={`transition-all duration-200 ${
          expanded ? "w-52 ml-2" : "w-0 invisible"
        }`}
      >
        <h1
          className={`whitespace-nowrap syner-white origin-left font-semibold text-lg`}
        >
          SYNER SHOP
        </h1>
        <p className="whitespace-nowrap syner-white opacity-80 text-xs -mt-1">
          Your Trusted online Friend
        </p>
      </div>
    </div>
  );
};

export default SiteInfo;
