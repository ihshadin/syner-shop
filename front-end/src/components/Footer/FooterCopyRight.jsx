import React from 'react';
import Image from "next/image";
import card from "@/assets/images/all-card.png";

const FooterCopyRight = () => {
    return (
        <div>
        <div className="syner-container flex flex-col-reverse  md:flex md:flex-row items-center justify-between ">
        <p className="text-center text-sm pb-2  md:font-semibold">&copy; 2023 Syner Shop. All Rights Reserved</p>
        <Image className="w-52" src={card} />
        </div> 
        </div>
    );
};

export default FooterCopyRight;