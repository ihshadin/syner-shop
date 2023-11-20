import React from "react";
import Logo from "./navutils/Logo";
import NavCart from "./navutils/NavCart";
import NavWishlist from "./navutils/NavWishlist";
import NavUser from "./navutils/NavUser";
import NavSearch from "./navutils/NavSearch";

const MidNavbar = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-between items-center py-4">
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
