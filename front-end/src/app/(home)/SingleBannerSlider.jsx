import React from 'react';
import "./BannerSlider.css"
import TextModifier from "react-text-modifier";
import Image from 'next/image';
const SingleBannerSlider = ({ slider = {} }) => {
    const { bg, title } = slider;
    return (
        <>
        <Image
        width={1250}
        height={350}
         src={bg}/>
      {/* <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div> */}
      
      {/* <div className=" absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-extrabold text-2xl md:text-3xl lg:text-4xl "
          highlight={["Syner", "Shop"]}
          highlightClassName="text-3xl md:text-4xl lg:text-5xl syner-primary-text"
        />
      </div> */}
    </>
    );
};

export default SingleBannerSlider;