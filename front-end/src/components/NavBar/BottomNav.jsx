"use client";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";

const BottomNav = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuOpen = (index) => {
    setOpenSubMenu(index);
  };

  const handleSubMenuClose = () => {
    setOpenSubMenu(null);
  };

  const menuData = [
    {
      label: "Category",
      link: "https://www.startech.com.bd/ups-ips",
      subMenu: [
        {
          label: "Online UPS",
          link: "https://www.startech.com.bd/online-ups",
          subMenu: [
            {
              label: "MaxGreen",
              link: "https://www.startech.com.bd/online-ups/maxgreen",
            },
            {
              label: "SANTAK",
              link: "https://www.startech.com.bd/santak-online-ups",
            },
            {
              label: "Some Nested UPS",
              link: "https://www.startech.com.bd/nested-ups",
              subMenu: [
                {
                  label: "Nested Item 1",
                  link: "https://www.startech.com.bd/nested-ups/item-1",
                },
                {
                  label: "Nested Item 2",
                  link: "https://www.startech.com.bd/nested-ups/item-2",
                },
              ],
            },
          ],
        },
        {
          label: "Offline UPS",
          link: "https://www.startech.com.bd/ups-ips/offline-ups",
          subMenu: [
            {
              label: "MaxGreen",
              link: "https://www.startech.com.bd/ups-ips/offline-ups/maxGreen-offline-ups",
            },
            // Add other offline UPS items here
          ],
        },
        // Add other UPS items here
      ],
    },
    // {
    //   label: "Appliance",
    //   link: "https://www.startech.com.bd/appliance",
    //   subMenu: [
    //     {
    //       label: "AC",
    //       link: "https://www.startech.com.bd/air-conditioner",
    //       // subMenu: [
    //       //   {
    //       //     label: "Samsung",
    //       //     link: "https://www.startech.com.bd/samsung-air-conditioner",
    //       //   },
    //       //   // Add other AC items here
    //       // ],
    //     },
    //     {
    //       label: "Sewing Machine",
    //       link: "https://www.startech.com.bd/sewing-machine",
    //       subMenu: [
    //         {
    //           label: "Brother",
    //           link: "https://www.startech.com.bd/brother-sewing-machine",
    //         },
    //         // Add other sewing machine items here
    //       ],
    //     },
    //     // Add other appliance sections and items here
    //   ],
    // },
    // Add other menu sections here
  ];

  return (
    <header className="pb-4 text-[var(--white-color)] !w-full">
      <div className="flex justify-between">
        <ul className="flex space-x-4 z-50 text-black">
          {menuData.map((menuSection, index) => (
            <li
              key={index}
              className="relative group/jahid"
              onMouseEnter={() => handleSubMenuOpen(index)}
              onMouseLeave={handleSubMenuClose}
            >
              <Link href="" className="flex items-center gap-1 text-white">
                <TbCategory className="h-6 w-6" />
                <div className="flex items-center gap-2">
                  {menuSection.label}
                  <FaChevronDown className="h-4 w-4 pt-1" />
                </div>
              </Link>
              {menuSection.subMenu && openSubMenu === index && (
                <ul className="group-hover/jahid:block absolute left-0 top-full hidden bg-white shadow-md border px-3 rounded-md py-4 space-y-2">
                  {menuSection.subMenu.map((subMenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="border-b text-sm hover:bg-[var(--text-color)] min-w-[9rem] px-2 py-1 rounded-md group/jahid2 w-fit whitespace-nowrap transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <a href={subMenuItem.link}>{subMenuItem.label}jahid2</a>
                      {subMenuItem.subMenu && (
                        <ul className="group-hover/jahid2:block absolute left-full top-0 hidden bg-white shadow-md border px-3 rounded-md py-2 space-y-2">
                          {subMenuItem.subMenu.map(
                            (nestedMenuItem, nestedIndex) => (
                              <li
                                key={nestedIndex}
                                className="border-b text-xs hover:bg-[var(--text-color)] min-w-[9rem] px-2 py-1 rounded-md transition duration-100 ease-in-out transform hover:scale-105"
                              >
                                <a href={nestedMenuItem.link}>
                                  {nestedMenuItem.label}
                                  jahid3
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ul className="flex capitalize gap-4">
          <li className="flex items-center gap-5 ">
            <Link href="/" className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--primary-color)]">home</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/pages" className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--primary-color)]">Products</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/user" className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--primary-color)]">user account</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/vendor" className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--primary-color)]">vendor account</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex items-center gap-5">
            <Link href="/track" className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--primary-color)]">track my order</Link>
            <Divider
              orientation="vertical"
              className="bg-[var(--text-color)] h-4 w-[1px]"
            />
          </li>
          <li className="flex">
            <Link href="/contact" className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--primary-color)]">contact</Link>
          </li>
        </ul>
      </div>

      {/* <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? <FaTimes /> : <FaBars />}
          </button> */}
    </header>
  );
};

export default BottomNav;
