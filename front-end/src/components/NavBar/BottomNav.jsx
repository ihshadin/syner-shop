"use client"
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";

const BottomNav = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="pb-4 text-white">
      <div className="container flex justify-between">
      <div className='flex items-center gap-1'>
            <TbCategory className="h-6 w-6"/>
            <div className="flex items-center gap-2">
              Categories
              <FaChevronDown className="h-4 w-4 pt-1"/>
            </div>
          </div>

        <div className="navlink">
          <ul
            className="link flex capitalize gap-4"
            onClick={() => setMobileMenu(false)}
          >
            <li className="flex items-center gap-5">
              <Link href="/">home</Link>
            <Divider orientation="vertical" className="bg-[var(--text-color)] h-4 w-[1px]"/>
            </li>
            <li className="flex items-center gap-5">
              <Link href="/pages">Products</Link>
            <Divider orientation="vertical" className="bg-[var(--text-color)] h-4 w-[1px]"/>
            </li>
            <li className="flex items-center gap-5">
              <Link href="/user">user account</Link>
            <Divider orientation="vertical" className="bg-[var(--text-color)] h-4 w-[1px]"/>
            </li>
            <li className="flex items-center gap-5">
              <Link href="/vendor">vendor account</Link>
            <Divider orientation="vertical" className="bg-[var(--text-color)] h-4 w-[1px]"/>
            </li>
            <li className="flex items-center gap-5">
              <Link href="/track">track my order</Link>
            <Divider orientation="vertical" className="bg-[var(--text-color)] h-4 w-[1px]"/>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          {/* <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? <FaTimes /> : <FaBars />}
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default BottomNav;
