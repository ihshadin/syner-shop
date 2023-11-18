import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/pngwing.com (1).png"

const Logo = () => {
  return (
    <Link href="/" >
      <Image className="w-24 md:w-24" src={LogoImg} alt="logo" /> 
    </Link>
  );
};

export default Logo;
//className="flex flex-col md:flex-row gap-5 items-center pb-1"



{/* <div className=" hidden md:block text-center font-bold pt-2 text-lg">
        <p className="syner-primary">Syner Shop</p>
      </div> */}