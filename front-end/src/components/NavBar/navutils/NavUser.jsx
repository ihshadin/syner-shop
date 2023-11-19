'use client'
import { Dropdown, Avatar, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarContent } from "@nextui-org/react";
import Link from "next/link";

const NavUser = () => {
    return (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="warning"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="dashbaord"><Link href="/account/user-account" className="w-full h-full block" >Dashboard</Link></DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    );
};

export default NavUser;