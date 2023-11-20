"use client";
import { useState } from "react";
import { Progress } from "@nextui-org/react";
import ReviewCard from "./ReviewCard";
import { Rating } from "@smastrom/react-rating";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

import Image from "next/image";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const img = "https://i.ibb.co/7zSsMP6/product-image-1.jpg";

  return (
    <div className="min-h-screen mt-14 ">
      <div className="flex gap-8">
        <div className="w-[45%]">
          {/* left side Progress section  */}
          <h2 className="font-bold text-lg">RATING SNAPSHOT</h2>
          <p className="text-sm pb-4">Select a row below to filter reviews.</p>
          <div className="flex flex-col gap-2 w-full max-w-md">
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">5</p>
                <span>star</span>
              </div>
              <Progress
                aria-label="Loading..."
                classNames={{
                  base: "max-w-md",
                  indicator: "!bg-[var(--primary-color)]",
                  label: "tracking-wider",
                  value: "text-foreground/60",
                }}
                value={95}
              />
              <p>90</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">4</p>
                <span>star</span>
              </div>
              <Progress
                color="#fff"
                aria-label="Loading..."
                classNames={{
                  base: "max-w-md",
                  indicator: "!bg-[var(--primary-color)] ",
                  label: "tracking-wider",
                  value: "text-foreground/60",
                }}
                value={60}
              />
              <p>60</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">3</p>
                <span>star</span>
              </div>
              <Progress
                color="#fff"
                aria-label="Loading..."
                classNames={{
                  base: "max-w-md",

                  indicator: "!bg-[var(--primary-color)] ",
                  label: "tracking-wider",
                  value: "text-foreground/60",
                }}
                value={70}
              />
              <p>70</p>
            </div>
          </div>

          {/* Right side progress Section  */}
          <div className="flex flex-col gap-2 w-full max-w-md">
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">2</p>
                <span>star</span>
              </div>
              <Progress
                color="#fff"
                aria-label="Loading..."
                classNames={{
                  base: "max-w-md",
                  indicator: "!bg-[var(--primary-color)] ",
                  label: "tracking-wider",
                  value: "text-foreground/60",
                }}
                value={30}
              />
              <p>30</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">1</p>
                <span>star</span>
              </div>
              <Progress
                color="#fff"
                aria-label="Loading..."
                classNames={{
                  base: "max-w-md",

                  indicator: "!bg-[var(--primary-color)] ",
                  label: "tracking-wider",
                  value: "text-foreground/60",
                }}
                value={5}
              />
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <h2 className="font-bold text-lg uppercase">Overall rating</h2>
          <div className="flex gap-4 items-center pt-1">
            <h1 className="text-5xl font-bold text-gray-500">4.5</h1>
            <div>
              {" "}
              <Rating style={{ maxWidth: 120 }} value={4.5} readOnly />
              <span className="text-lg font-medium">3909 Reviews</span>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <h2 className="font-bold text-lg">REVIEW THIS PRODUCT</h2>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={(newRating) => {
              onOpen();
              setRating(newRating);
            }}
            className="my-2"
            isRequired
          />
          <p className="text-sm">
            Adding a review will require a valid email for verification
          </p>
        </div>
      </div>
      <hr className="border border-gray-300 my-10" />

      {/* Modal  */}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="p-1">
          {(onClose) => (
            <div>
              <ModalHeader className="flex gap-3">
                <Image src={img} alt="Product Image" width={90} height={30} />
                <div>
                  <h2 className="font-normal text-sm">My Review</h2>
                  <h1 className="font-base font-semibold">
                    Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie
                  </h1>
                </div>
              </ModalHeader>

              <Rating
                style={{ maxWidth: 120 }}
                value={rating}
                className="my-2 mx-4 mb-8"
                readOnly
              />

              <form>
                <label htmlFor="" className="mx-[18px] text-gray-500 text-sm">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="email"
                  className="block w-[92%] mx-auto rounded border mt-1 border-gray-300  shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 mb-4 pl-2 py-2"
                  id=""
                  placeholder="Enter you name"
                />

                <label htmlFor="" className="mx-[18px] text-gray-500 text-sm">
                  Write you Review*
                </label>
                <input
                  type="text"
                  name="text"
                  required
                  id=""
                  className="block  w-[92%] mx-auto rounded border mt-1 mb-3 border-gray-300  shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 pb-20 pl-2 pt-2"
                  placeholder="Example: Product wonderful"
                />

                <label for="image" className="mx-[18px] text-gray-500 text-sm">
                  Upload product Image
                </label>

                <input
                  type="file"
                  className="block w-[92%] mx-auto px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-slate-200 file:text-[ var(--text-color)] file:text-sm file:px-4 file:py-1 file:border-none file:rounded-md placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                />
              </form>
              <ModalFooter>
                <Button
                  color="warning"
                  radius="sm"
                  onPress={onClose}
                  variant="bordered"
                >
                  Save
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>

      {/* Individual reviews */}
      <div className="">
        <ReviewCard
          name="John Doe"
          rating={4}
          date="Jan 12, 2023"
          verified={true}
          review="This product is amazing! I love it!"
          likes={12}
          dislikes={2}
          profilePicture="URL_TO_JOHN_DOE_PROFILE_PICTURE"
        />
      </div>
      {/* Individual reviews */}
      <div className="">
        <ReviewCard
          name="Imam Hossien"
          rating={5}
          date="Jan 12, 2023"
          verified={true}
          review="This product is amazing! I love it!"
          likes={7}
          dislikes={4}
          profilePicture="URL_TO_JOHN_DOE_PROFILE_PICTURE"
        />
      </div>
    </div>
  );
};

export default Reviews;
