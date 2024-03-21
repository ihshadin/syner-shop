import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/images/Syner_Shop_white-2.png";
import LogoImgRes from "@/assets/images/syner-shop-logo-res.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center ">
      <Image className="w-32 pb-1 hidden md:block" src={LogoImg} alt="logo" />
      <Image className="w-14 pb-1 md:hidden" src={LogoImgRes} alt="logo" />
    </Link>
  );
};

export default Logo;
