"use client";
import React, { useState } from "react";
import Dashboard from "@/components/MyAccount/Dashboard/Dashboard";
import { BsDashLg } from "react-icons/bs";

const StudentMenus = [
  {
    title: "My Dashboard",
    src: "/dashboard/student-dashboard",
    icon: <BsDashLg />,
  },
  {
    title: "My Payments",
    src: "/dashboard/student-payment",
    icon: <BsDashLg />,
  },
  {
    title: "My Profile",
    src: "/dashboard/student-profile",
    icon: <BsDashLg />,
  },
  {
    title: "Support Center",
    src: "/dashboard/student-support-center",
    icon: <BsDashLg />,
  },
];

const UserAccountLayout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section>
      <div className="max-w-[1280px] mx-auto flex">
        <div className="flex flex-col md:flex-row gap-4 w-full overflow-hidden">
          <div
            className={`syner-secondary-bg rounded-lg p-4 pt-8 fixed md:relative transition-all duration-300 ${
              expanded ? "ml-0" : "-ml-20 md:ml-0"
            }`}
          >
            <Dashboard expanded={expanded} setExpanded={setExpanded} />
          </div>
          {/* <div
            className={`${
              expanded ? "w-72 w-60 px-5" : "md:w-[80px]  w-0"
            } pt-8 duration-500  bg-[#1c1e1f] fixed z-10  font-Jost tracking-wider font-bold text-lg text-white shadow-lg rounded-xl ml-4 h-full  transform translate-x-0 md:translate-x-0 `}
          >
            <p
              className={`text-2xl absolute font-PTSans select-none cursor-pointer boxShadowDashboard text-white -right-6 md:-right-7 border-white border top-9 bg-[#1c1e1f] rounded-lg px-2 ${
                !expanded && "rotate-180"
              }`}
              onClick={() => setExpanded(!expanded)}
            >
              &lt;
            </p>
            <div className="flex items-center gap-2 justify-center   py-1 rounded-md bg-opacity-10  mx-3 ">
              <img
                className="h-8 boxShadowDashboard rounded-full"
                src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                alt=""
              />

              <h1 className={`text-white ${!expanded ? "hidden" : ""} `}>
                CM <span className="text-[#1BBF72]">Academy</span>
              </h1>
            </div>

            <div className=" h-full overflow-y-auto pb-20">
              <div className={` ${expanded ? "block duration-500" : ""} `}>
                <div
                  className={`flex flex-col items-center mt-10 mb-6   ${
                    !expanded ? "mb-0" : ""
                  }`}
                >
                  <img
                    className={`rounded-xl flex h-24 w-24 mb-2 mt-2 boxShadowDashboard ${
                      !expanded ? "h-9 w-9" : ""
                    }`}
                    src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                    alt=""
                  />
                  <h1
                    className={`laptop:text-base text-white font-semibold  ${
                      !expanded && "hidden  "
                    }`}
                  >
                    dsfasdfasdfasdf
                  </h1>
                </div>
              </div>

              <div className="pt-6  ">
                <>
                  {StudentMenus.map((menu, index) => (
                    <div
                      to={menu.src}
                      key={index}
                      onClick={() => handleSelectedButton(menu.title)}
                    >
                      <li
                        className={`text-white text-sm boxShadowDashboard ${
                          "selectedButton" == menu.title ? "bg-[#1bbf7231]" : ""
                        } hover:text-green-400 hover:bg-[#1bbf7231]  pl-2 ${
                          !expanded ? "justify-center mx-5" : ""
                        }  rounded-md flex items-center font-normal  gap-2 mb-4 cursor-pointer mx-2 `}
                      >
                        <span to={menu.src} className="flex my-2 items-center">
                          {" "}
                          <span className=" me-2">
                            <img className="h-4" src={menu?.icon} alt="" />{" "}
                          </span>
                          <span
                            className={`${
                              !expanded ? "hidden" : ""
                            } origin-left duration-200 `}
                          >
                            {menu.title}
                          </span>
                        </span>
                      </li>
                    </div>
                  ))}
                </>
              </div>
              <hr className=" my-6" />
              <div className=" flex items-center justify-center">
                <button className="text-sm text-gray-700 flex gap-1 items-center font-Raleway border-2 ms-1 font-bold py-1 rounded-xl px-2 bg-white hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-green-400 shadow-md ">
                  <p className="text-3xl">
                    <img className="h-4" src={"lkjf"} alt="" />
                  </p>
                  <span
                    className={`${
                      !expanded ? "hidden" : ""
                    } origin-left duration-200 `}
                  >
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div> */}
          <div className="h-screen w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default UserAccountLayout;
