import React from 'react';
import Image from "next/image";
import card from "@/assets/images/more-card.png";

const FooterCopyRight = () => {
    return (
        <div>
        <div className="syner-container flex flex-col-reverse  md:flex md:flex-row items-center justify-between pb-2 ">
        <p className="text-center text-sm pb-2 text-white md:font-semibold">&copy; 2023 Syner Shop. All Rights Reserved</p>
        <Image className="w-auto" src={card} />
        </div> 
        </div>
    );
};

export default FooterCopyRight;