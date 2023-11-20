import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/images/Syner_Shop_white-2.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center ">
      <Image className="w-32 pb-1" src={LogoImg} alt="logo" /> 
      {/* <h2 className="text-2xl font-bold pt-1 text-[#0d344f]">Syner Shop</h2> */}
    </Link>
  );
};

export default Logo;