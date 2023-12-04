import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import Image from "next/image";
import React from "react";
import { FaUpload } from "react-icons/fa";

const AccountDetailsPage = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md ml-10">
      <h2 className="text-2xl md:text-3xl font-medium">Personal Information</h2>
      <hr className="mt-2" />
      <form className="mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                required=""
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                placeholder="Your First Name"
                className="text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required=""
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                placeholder="Your Last Name"
                className="text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              for="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required=""
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                placeholder="Your Email Address"
                className="text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              for="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                required=""
                type="number"
                name="phone"
                id="phone"
                autocomplete="tel"
                placeholder="Your Phone Number"
                className="text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Edit your profile
            </label>
            <div className="mt-3 flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                width={100}
                height={100}
                src="https://source.unsplash.com/100x100/?portrait"
                alt="User Image"
              />
              <input
                className="w-full mx-auto px-3 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-slate-200 file:text-[ var(--text-color)] file:text-sm file:px-4 file:py-1 file:border-none file:rounded-md placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                id="image"
                type="file"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 w-1/3">
          <PrimaryBtn
            btnType="syner-solid"
            btnText="update"
            btnIcon={<FaUpload className="w-5 h-5" />}
          />
        </div>
      </form>
    </div>
  );
};

export default AccountDetailsPage;
