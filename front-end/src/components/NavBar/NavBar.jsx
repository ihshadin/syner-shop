"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import Language from "./Language";
import NavWishlist from "./NavWishlist";
import NavUser from "./NavUser";
import NavCart from "./NavCart";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isBordered>
      {/* <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent> */}

      <NavbarContent as="div" className="!gap-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        <NavbarContent className="!flex !gap-0 !justify-end md:!justify-start !w-full mb-1">
          <Logo />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="center">
        <NavSearch />
      </NavbarContent>

      <NavbarContent
        as="div"
        className="items-center gap-9 md:gap-5"
        justify="end"
      >
        {/* <Language /> */}
        <NavWishlist />
        <NavCart />

        <NavUser />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
