import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { CiLogin, CiSquareQuestion } from "react-icons/ci";
import { PiUserPlusThin } from "react-icons/pi";
import { Divider } from "@nextui-org/react";

const TopNav = () => {
  return (
    <div className="hidden md:flex justify-between items-center py-2 text-white">
      <ul className="flex h-5 items-center space-x-4 text-small">
        <li>
          <Link href="/seller">Seller Center</Link>
        </li>
        <Divider orientation="vertical" />
        <li className="">Location</li>
        <Divider orientation="vertical" />
        <li>
          <Link href="/download">Download</Link>
        </li>
        <Divider orientation="vertical" />
        <li className="flex items-center">
          <span className="mr-2">Follow us on :</span>
          <div className="flex items-center gap-3">
            <a href="www.facebook.com" target="_blank" >
            <AiOutlineFacebook className="w-[1.4rem] h-[1.4rem]"/>
            </a>
            <a href="www.instagram.com" target="_blank" >
            <AiOutlineInstagram className="w-6 h-6"/>
            </a>
          </div>
        </li>
      </ul>

      <ul className="flex h-5 items-center space-x-4 text-small">
        <li className="flex gap-1 items-center">
        <CiSquareQuestion />
          <Link href="/login">Support</Link>
        </li>
        <Divider orientation="vertical" />
        <li className="flex gap-1 items-center">
        <PiUserPlusThin />
          <Link href="/register">Register</Link>
        </li>
        <Divider orientation="vertical" />
        <li className="flex gap-1 items-center">
          <CiLogin />
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
