import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import Link from "next/link";
import React from "react";
import { PiUserPlusThin } from "react-icons/pi";

const RegisterPage = () => {
  return (
    <div className="py-16">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl flex">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        ></div>

        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="py-4 text-2xl text-center text-gray-800 ">
            Create an Account!
          </h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
                >
                  First Name
                </label>
                <input
                  className="text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  autoComplete="off"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-70"
                  for="lastName"
                >
                  Last Name
                </label>
                <input
                  className=" text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                for="email"
              >
                Email
              </label>
              <input
                className=" text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  className=" text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg pb-[5px] px-4 block w-full appearance-none"
                  id="password"
                  type="password"
                  placeholder="******************"
                  style={{ paddingTop: "11px" }}
                />
                {/* <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p> */}
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-70"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  className=" text-gray-700 focus:outline-[8px] outline-[var(--primary-outline-color)] focus:shadow-outline border border-gray-300 rounded-lg pb-[5px] px-4 block w-full appearance-none"
                  id="password"
                  type="password"
                  placeholder="******************"
                  style={{ paddingTop: "11px" }}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 "
                for="email"
              >
                Upload your Image
              </label>
              <input
                className="w-full mx-auto px-3 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-slate-200 file:text-[ var(--text-color)] file:text-sm file:px-4 file:py-1 file:border-none file:rounded-md placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                id="email"
                type="file"
              />
            </div>
            <div className="mb-6 text-center">
              {/* <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Register Account
              </button> */}
              <PrimaryBtn
                btnType="syner-solid"
                btnText="Register Account"
                btnIcon={<PiUserPlusThin className="w-5 h-5" />}
              />
            </div>
            <hr className="mb-4 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-gray-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-gray-500 align-baseline hover:text-blue-800"
                href="login"
              >
                Already have an account? Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
