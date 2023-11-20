import React from "react";
import { Input } from "@nextui-org/react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsLatter = () => {
  const size = ["sm", "md", "lg"];
  return (
    <div className="syner-container py-16">
      <div className="grid md:grid-cols-5 gap-16 items-center ">
        <div className="col-span-2">
          <h2 className="text-2xl font-extrabold text-white "> Newsletter </h2>
          <p className="text-sm text-white ">Subscribe to get information about products</p>
        </div>
        <div className="col-span-3">
          <form className=" flex w-full flex-nowrap md:flex-nowrap mb-6 md:mb-0 gap-2">
            <Input
              radius="none"
              className=""
              size="lg"
              type="email"
              placeholder="you@example.com"
              labelPlacement="outside"
              startContent={
                <FaEnvelopeOpenText className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <button
              className="bg-[#ff914d] px-5 md:px-10 py-2  text-white"
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
