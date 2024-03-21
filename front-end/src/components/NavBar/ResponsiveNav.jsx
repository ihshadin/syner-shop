import React from "react";
import Logo from "./navutils/Logo";
import NavSearch from "./navutils/NavSearch";
import NavUser from "./navutils/NavUser";
import NavCart from "./navutils/NavCart";
import { TbCategory, TbMenu2, TbHome } from "react-icons/tb";

const ResponsiveNav = () => {
  return (
    <div className="md:hidden">
      <div className="syner-secondary-bg flex items-center gap-2 w-full px-[10px] py-2">
        <Logo />
        <NavSearch />
      </div>
      <div className="flex items-center justify-between py-2 px-[10px] fixed bottom-0 z-50 w-full bg-gray-400">
        <TbMenu2 className="h-6 w-6" />
        <TbCategory className="h-6 w-6" />
        <TbHome className="h-6 w-6" />
        <NavCart />
        <NavUser />
      </div>
    </div>
  );
};

export default ResponsiveNav;
