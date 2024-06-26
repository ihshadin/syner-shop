"use client";
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
      // const bg = document.querySelector("._background");
      search.classList.toggle("active", window.scrollY > 100);
      // bg.classList.toggle("_synerBackground", window.scrollY > 100);
    });
  }, []);

  return (
    <div className="bg-[var(--secondary-color)]">
      <div className="flex items-center max-w-[1280px] mx-auto px-[10px]">
        <div className="search">
          <Logo />
          <div className="flex items-center justify-between w-[72%]">
            <NavSearch />
            <div className="flex gap-10 justify-between text-white">
              <NavCart />
              <NavWishlist />
              <NavUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidNavbar;
