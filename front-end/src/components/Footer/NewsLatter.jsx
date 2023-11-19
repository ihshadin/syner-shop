import React from "react";
import { Input } from "@nextui-org/react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsLatter = () => {
  return (
    <div className="syner-container py-16">
      <div className="grid md:grid-cols-5 gap-16 items-center md:px-20">
        <div className="col-span-2">
          <h2 className="text-2xl font-extrabold"> Newsletter </h2>
          <p className="text-sm">Subscribe to get information about products</p>
        </div>
        <div className="col-span-3">
          <form className=" flex w-full flex-nowrap md:flex-nowrap mb-6 md:mb-0 gap-2">
            <Input
              className=""
              type="email"
              placeholder="you@example.com"
              labelPlacement="outside"
              startContent={
                <FaEnvelopeOpenText className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <button
              className="bg-[#ff914d] px-5 md:px-10 py-2 rounded-md text-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
