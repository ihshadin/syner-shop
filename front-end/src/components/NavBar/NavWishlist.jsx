import { Badge } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GoHeart } from "react-icons/go";

const NavWishlist = () => {
  return (
    <Link href="/" className="relative pt-3 md:pt-2">
      <Badge content="5" size="lg" color="warning">
        <GoHeart className="h-6 w-6 lg:h-8 lg:w-8 syner-primary" />
      </Badge>
    </Link>
  );
};

export default NavWishlist;
