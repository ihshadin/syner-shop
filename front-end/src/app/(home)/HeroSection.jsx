import Image from "next/image";
import React from "react";
import image1 from "../../../public/bannerImage/image-2.png";
import image2 from "../../../public/bannerImage/image-1.webp";
import BannerSlider from "./BannerSlider";


const HeroSection = () => {
  return (
    <>
      <div className="syner-container md:grid grid-cols-4 gap-2">
        {/* Slider Section */}
        <div className="col-span-3 ">
          <BannerSlider />
        </div>
        {/* Banner Section */}
        <div className="flex flex-col gap-2 pt-2 md:pt-0">
          <div>
            <Image
              src={image1}
              alt="Picture of the author"
              className="w-[100%] h-[32vh] rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image2}
              alt="Picture of the author"
              className="w-[100%] h-[32vh] rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
