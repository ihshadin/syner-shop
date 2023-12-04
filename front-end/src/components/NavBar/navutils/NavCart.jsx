"use client";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

const NavCart = () => {
  return (
    <Link href="/" className="relative">
      <BsCartDash className="h-6 w-6 lg:h-8 lg:w-8 " />
    </Link>
  );
};

export default NavCart;
