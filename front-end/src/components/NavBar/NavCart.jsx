'use client'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from "next/link";
import { Badge } from "@nextui-org/react";

const NavCart = () => {
    return (
        <Link href="/" className="relative pt-3 md:pt-2">
       <Badge content="15" size="lg" color="warning">

        <HiOutlineShoppingCart className="h-6 w-6 lg:h-8 lg:w-8 syner-primary" />
       </Badge>
      
      </Link>
    );
};

export default NavCart;