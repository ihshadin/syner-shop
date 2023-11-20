"use client";
import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const NavSearch = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };
  return (
    <form className="relative">
      <div class="flex md:w-[40rem] ">
        <Dropdown
          
          // style={{
          //   position: "absolute !important",
          //   zIndex: "100000 !important",
          //   top: "100px !important",
          //   maxHeight: "115.333px !important",
          //   left: "261.281px !important",
          // }}
          radius="none"
        >
          <DropdownTrigger radius="none">
            <Button
              radius="none"
              className="flex-shrink-0 inline-flex items-center h-[2.5.5rem] px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
              auto
              ghost
              onClick={toggleDropdown}
            >
              All categories{" "}
              <svg
                className={`w-2.5 h-2.5 ms-2.5 ${
                  isDropdownVisible ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none focus:bg-gray-100"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <Button
            size="xs"
            radius="none"
            type="submit"
            className="absolute top-0 end-0 p-2.5 w-1 text-sm font-medium h-full text-white syner-primary-bg fucus:syner-primary-bg"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NavSearch;
