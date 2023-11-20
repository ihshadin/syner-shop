"use client"
import React from "react";
import Logo from "./navutils/Logo";
import NavCart from "./navutils/NavCart";
import NavWishlist from "./navutils/NavWishlist";
import NavUser from "./navutils/NavUser";
import NavSearch from "./navutils/NavSearch";
import "./NavBar.css";
import { useEffect } from "react";

const MidNavbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search");
      search.classList.toggle("active", window.scrollY > 100);
    });
  }, []);

  return (
    <div>
      <div className="search">
        <Logo />
        <NavSearch />
        <div className="flex gap-10 justify-between items-center text-white">
          <NavCart />
          <NavWishlist />
          <NavUser />
        </div>
      </div>
    </div>
  );
};

export default MidNavbar;
