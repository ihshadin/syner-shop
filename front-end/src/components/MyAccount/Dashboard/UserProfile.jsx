import React from "react";

const UserProfile = () => {
  return (
    <>
      <div>
        <div>
          <label className="flex flex-col relative">
            <input
              type="text"
              placeholder="Input"
              className="bg-transparent border border-slate-500 p-3 rounded-md outline-none syner-white capitalize focus:text-teal-500 focus:transform translate"
            />
            <span className="absolute text-slate-600 uppercase tracking-[3px] pointer-events-none duration-200">
              Input
            </span>
          </label>
        </div>
      </div>
      <div className="px-6 py-3 rounded-lg syner-secondary-bg syner-white">
        <div>
          <h2>Hi, Shadin</h2>
          <p>It's good to see you again</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
