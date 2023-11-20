"use client";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";

const BottomNav = () => {

  return (
    <header className="pb-4 text-[var(--white-color)] !w-full">
      <div className="flex justify-between">
        <button
          className="flex items-center gap-1"
          // onMouseEnter={() => setIsDrawerOpen(true)}
          // onMouseLeave={() => setIsDrawerOpen(false)}
        >
          <TbCategory className="h-6 w-6" />
          <div className="flex items-center gap-2">
            Categories
            <FaChevronDown className="h-4 w-4 pt-1" />
          </div>
        </button>

        <ul className="flex capitalize gap-4">
          <li className="flex items-center gap-5">
            <Link href="/">home</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/pages">Products</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/user">user account</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/vendor">vendor account</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/track">track my order</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </div>

      {/* <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? <FaTimes /> : <FaBars />}
          </button> */}
    </header>
  );
};

export default BottomNav;
