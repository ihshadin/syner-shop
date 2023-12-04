import { Badge } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GoHeart } from "react-icons/go";

const NavWishlist = () => {
  return (
    <Link href="/">
      <GoHeart className="h-6 w-6 lg:h-8 lg:w-8 syner-white" />
    </Link>
  );
};

export default NavWishlist;
