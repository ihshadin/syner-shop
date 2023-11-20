import Link from "next/link";
import React from "react";

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

        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
          <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
            Create an Account!
          </h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="firstName"
                >
                  First Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="lastName"
                >
                  Last Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
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
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  id="c_password"
                  type="password"
                  placeholder="******************"
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

              {/* <input
                type="file"
                className="block w-[92%] mx-auto px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-slate-200 file:text-[ var(--text-color)] file:text-sm file:px-4 file:py-1 file:border-none file:rounded-md placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              /> */}
            </div>
            <div className="mb-6 text-center">
              {/* <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register Account
              </button> */}
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
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
