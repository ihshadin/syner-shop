"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chart_fill from "@/assets/images/dashboard/Chart_fill.png";
import Chat from "@/assets/images/dashboard/Chat.png";
import User from "@/assets/images/dashboard/User.png";
import Calendar from "@/assets/images/dashboard/Calendar.png";
import Search from "@/assets/images/dashboard/Search.png";
import Chart from "@/assets/images/dashboard/Chart.png";
import Folder from "@/assets/images/dashboard/Folder.png";
import Setting from "@/assets/images/dashboard/Setting.png";
import control from "@/assets/images/dashboard/control.png";
import logo from "@/assets/logo/syner-shop-favicon.png";
import { BsChevronBarRight } from "react-icons/bs";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const DashboardSection = () => {
  const [expanded, setExpanded] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill.src, alert },
    { title: "Inbox", src: Chat.src },
    { title: "Accounts", src: User.src, gap: true, alert },
    { title: "Schedule ", src: Calendar.src },
    { title: "Search", src: Search.src },
    { title: "Analytics", src: Chart.src },
    { title: "Files ", src: Folder.src, gap: true },
    { title: "Setting", src: Setting.src },
  ];

  return (
    <>
      {/* <div className="h-full p-3 space-y-2 rounded-xl shadow-md">
        <div className="flex items-center p-2 space-x-4">
          <Image
            className="w-12 h-12 rounded-full"
            width={100}
            height={100}
            src="https://source.unsplash.com/100x100/?portrait"
            alt="User Image"
          />
          <div>
            <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
            <Link
              rel="noexpandeder noreferrer"
              href="#"
              className="text-xs hover:underline"
            >
              Edit profile
            </Link>
          </div>
        </div>
        <div className="divide-y dark:divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="dark:bg-gray-800 dark:text-gray-50">
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
                <span>My review</span>
              </a>
            </li>
            <li>
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                  <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                </svg>
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                  <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                  <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                </svg>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                <span>Wishlist</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li>
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                  <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                </svg>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a
                rel="noexpandeder noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div
        className={`syner-secondary-bg p-4 pt-8 relative transition-all duration-300`}
        // ${
        //   expanded ? "w-72" : "w-20 "
        // }
      >
        <HiChevronDoubleLeft
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 syner-white syner-primary-bg p-1 border-[--secondary-color]
           border-2 rounded-full  ${!expanded && "rotate-180"}`}
          onClick={() => setExpanded(!expanded)}
        />

        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            className={`cursor-pointer duration-500`}
            src={`${logo.src}`}
          />
          <div
            className={`transition-all duration-200 ${
              expanded ? "w-52 ml-2" : "w-0 invisible"
            }`}
          >
            <h1
              className={`whitespace-nowrap syner-white origin-left font-semibold text-lg`}
            >
              SYNER SHOP
            </h1>
            <p className="whitespace-nowrap syner-white opacity-80 text-xs -mt-1">
              Your Trusted online Friend
            </p>
          </div>
        </div>
        <ul className="pt-3">
          {Menus.map((Menu, index) => (
            // <li
            //   key={index}
            //   className={`flex rounded-md p-2 cursor-pointer hover:bg-[var(--primary-color)] syner-white items-center h-9
            //   ${Menu.gap ? "mt-9" : "mt-2"} ${
            //     index === 0 && "syner-primary-bg syner-white"
            //   } `}
            // >
            //   <Image
            //     width={60}
            //     height={60}
            //     className="w-5 h-5"
            //     src={`${Menu.src}`}
            //   />
            //   <span
            //     className={`${
            //       expanded ? "w-52 ml-3" : "w-0 invisible"
            //     } origin-left duration-200`}
            //   >
            //     {Menu.title}
            //   </span>
            // </li>
            <li
              className={`flex rounded-md py-2 px-3 cursor-pointer hover:bg-[var(--primary-color)] syner-white items-center relative font-medium transition-colors group ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "syner-primary-bg syner-white"}`}
              // ${
              //   active
              //     ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              //     : "hover:bg-indigo-50 text-gray-600"
              // }
            >
              {/* {icon} */}
              <Image
                width={60}
                height={60}
                className="w-5 h-5"
                src={`${Menu.src}`}
              />
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                }`}
              >
                {/* {text} */}
                {Menu.title}
              </span>
              {Menu.alert && (
                <div
                  className={`absolute right-2 w-2 h-2 rounded syner-white-bg ${
                    expanded ? "" : "top-2"
                  }`}
                />
              )}

              {!expanded && (
                <div
                  className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[var(--secondary-color)] syner-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                  {/* {text} */}
                  {Menu.title}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardSection;
