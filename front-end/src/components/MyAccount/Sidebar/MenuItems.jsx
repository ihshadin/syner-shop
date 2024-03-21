import Image from "next/image";
import React from "react";

const MenuItems = ({ Menu, expanded, index }) => {
  const { gap, title, src, alert } = Menu;
  console.log(title);
  return (
    <>
      <li
        className={`flex rounded-md py-2 px-3 cursor-pointer hover:bg-[var(--primary-color)] syner-white items-center relative font-medium transition-colors group ${
          gap ? "mt-9" : "mt-2"
        } ${index === 0 && "syner-primary-bg syner-white"}`}
      >
        <Image width={60} height={60} className="w-5 h-5" src={src} />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {title}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded syner-white-bg ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[var(--secondary-color)] syner-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {title}
          </div>
        )}
      </li>
    </>
  );
};

export default MenuItems;
