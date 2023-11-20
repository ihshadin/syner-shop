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
import MailIcon from "./Modal/MailIcon";
import LockIcon from "./Modal/LockIcon";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                className="my-2"
                readOnly
              />
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
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
