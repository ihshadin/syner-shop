"use client"

import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const ProductSortingMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex items-center gap-3">
            <div className="filter-medicine">
                <Menu
                    menuButton={
                        <MenuButton onClick={toggleMenu} className="flex items-center gap-2 font-semibold p-2 rounded-md  ease-in text-sm duration-150">
                            Filter Medicines {isMenuOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                        </MenuButton>
                    }
                    transition
                    isOpen={isMenuOpen}
                >
                    <MenuItem onClick={() => handelSort("phtl")} className="font-medium text-gray-5">
                        Price low to high
                    </MenuItem>
                    <MenuItem onClick={() => handelSort("plth")} className="font-medium text-gray-5">
                        Price High to low
                    </MenuItem>
                    <MenuItem onClick={() => handelSort("byRating")} className="font-medium text-gray-5">
                        Height selling
                    </MenuItem>
                    <MenuItem onClick={() => handelSort("fNew")} className="font-medium text-gray-5">
                        New Product
                    </MenuItem>
                    <MenuItem onClick={() => handelSort("fOld")} className="font-medium text-gray-5">
                        Old product
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default ProductSortingMenu;