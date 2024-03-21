import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsChevronDoubleRight } from "react-icons/bs";

const SectionTitle = ({ title, subTitle, btnText, btnLink }) => {
  return (
    <div className="py-5">
      <div className="relative z-0 pl- md:pl-4">
        <div className="relative flex items-center gap-2 max-w-full">
          <div className="absolute left-6 md:left-7 z-10 h-16 md:h-24 w-2 md:w-4 skew-x-[-20deg] syner-primary-bg"></div>
          <div className=" h-10 md:h-14 w-2 skew-x-[-20deg] syner-secondary-bg"></div>
          <div className=" h-10 md:h-14 pr-10 flex flex-col justify-end relative max-w-[90%] skew-x-[-20deg] syner-secondary-bg">
            <h2 className="pl-6 md:pl-10 uppercase md:pb-1 font-bold text-lg md:text-2xl tracking-wide skew-x-[20deg] line-clamp-1 syner-white">
              {title}
            </h2>
            <div className="self-end -mr-12 -mb-2 max-w-[80%] syner-primary-bg">
              <h4 className="py-[1px] px-5 text-center uppercase text-[10px] md:text-xs tracking-wider line-clamp-1 skew-x-[20deg] syner-white">
                {subTitle}
              </h4>
            </div>
          </div>
        </div>
        {btnText && (
          <Link
            href={btnLink}
            className="absolute right-0 top-1/2 -translate-y-1/2 mt-0 uppercase rounded-md flex items-center justify-end gap-1 font-semibold"
          >
            <span className="hidden md:block">{btnText}</span>
            <BsChevronDoubleRight className="w-6 h-6 md:w-4 md:h-4" />
          </Link>
        )}
        <div className="absolute bottom-0 right-0 -z-10 h-[2px] w-[95%] opacity-0 md:opacity-30 syner-secondary-bg"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
