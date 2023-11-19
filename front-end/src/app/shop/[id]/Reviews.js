"use client";
import { useState } from "react";
import { Progress } from "@nextui-org/react";
import { BsStarFill } from "react-icons/bs";
import ReviewCard from "./ReviewCard";
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
  const [rating, setRating] = useState(5);

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
            onChange={setRating}
            className="my-2"
            isRequired
          />
          <p className="text-sm">
            Adding a review will require a valid email for verification
          </p>
        </div>
      </div>
      <hr className="border border-gray-300 my-10" />

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
