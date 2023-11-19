"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const BottomNav = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="mb-4 text-white">
      <div className="container flex justify-end">
        <div className="navlink">
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link flex capitalize gap-4 "
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/pages">pages</Link>
            </li>
            <li>
              <Link href="/user">user account</Link>
            </li>
            <li>
              <Link href="/vendor">vendor account</Link>
            </li>
            <li>
              <Link href="/track">track my order</Link>
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
