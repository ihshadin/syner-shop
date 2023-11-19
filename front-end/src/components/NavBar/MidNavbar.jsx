import React from "react";
import Logo from "./navutils/Logo";
import NavCart from "./navutils/NavCart";
import NavWishlist from "./navutils/NavWishlist";
import NavUser from "./navutils/NavUser";
import NavSearch from "./navutils/NavSearch";

const MidNavbar = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-between items-center mb-4">
        <Logo />

        {/* Unique Search Bar */}
        <NavSearch />

 
          {/* Cart, Favorite, Compare, and User Icons */}
          {/* Include your icon components or use external libraries */}
          <div className="flex gap-10 justify-between items-center text-white">
            {/* Your Cart Icon */}
                <NavCart />
            {/* Your Favorite Icon */}
                <NavWishlist />
            {/* Your Compare Icon */}
                
            {/* Your User Icon */}
                <NavUser />
          </div>
        
      </div>
    </div>
  );
};

export default MidNavbar;
