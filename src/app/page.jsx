import Image from "next/image";
import React from "react";
import {
  addressIcon,
  emailIcon,
  locationIcon,
  mailIcon,
  userProfileImg,
} from "./assets";

export default function Home() {
  return (
    <div className="px-2 lg:px-8 pb-8">
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-[100%]  lg:w-[30%] rounded-xl">
          <div className="bg-white border border-[#D9D9D9] p-7 rounded-xl block ">
            <Image
              src={userProfileImg}
              alt="User Profile Image"
              className="h-[140px] block mx-auto"
            />

            <h1 className="text-[#000] text-[18px] font-[700] font-dmSans text-center  mt-4">
              James Wlliams
            </h1>

            <p className="text-[16px] text-[#777] font-dmSans text-center">
              Patient
            </p>

            <div className="flex justify-center  gap-2 mt-2">
              <Image
                src={locationIcon}
                alt="Location Icon"
                className="h-[19px]"
              />
              <p className="text-[#26710C] text-[16px] font-[400]">
                USA, New York
              </p>
            </div>

            <button
              className={`w-full xl:w-[251px] block mx-auto h-[40px] bg-btnBGColor text-white text-16 font-normal rounded-[5px] border-none mt-4`}
            >
              Log Out
            </button>
          </div>

          <div className="bg-white border border-[#D9D9D9] rounded-xl mt-5 p-7 ">
            <div className="flex gap-3">
              <Image src={emailIcon} alt="Email Icon" className="h-[26px]" />
              <p className="text-[#000] text-[16px] font-[400]">
                email@gmail.com
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <Image src={addressIcon} alt="Email Icon" className="h-[26px]" />
              <p className="text-[#000] text-[16px] font-[400]">Paul</p>
            </div>

            <div className="flex gap-3 mt-4">
              <Image src={mailIcon} alt="Email Icon" className="h-[26px]" />
              <p className="text-[#000] text-[16px] font-[400]">+6668768778</p>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:w-[70%]  bg-[#fff] p-7 min-h-[calc(100vh-150px)] rounded-xl ">
          <h1 className="text-[#000] text-[24px] font-[700]">User Profile</h1>

          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="w-full">
              <label className="block text-[#777] text-[16px] font-[400] mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="James "
                className="dashboard-placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
              />

              <label className="block text-[#777] text-[16px] font-[400] mb-2  mt-[2rem]">
                Email Address
              </label>
              <input
                type="text"
                placeholder="email@gmail.com"
                className="dashboard-placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
              />
              <label className="block text-[#777] text-[16px] font-[400] mb-2  mt-[2rem]">
                City
              </label>
              <input
                type="text"
                placeholder="New York "
                className="dashboard-placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
              />
            </div>

            <div className="w-full">
              <label className="block text-[#777] text-[16px] font-[400] mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Williams"
                className="dashboard-placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
              />

              <label className="block text-[#777] text-[16px] font-[400] mb-2 mt-8">
                Password
              </label>
              <input
                type="text"
                placeholder="Williams"
                className="dashboard-placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
              />

              <label className="block text-[#777] text-[16px] font-[400] mb-2 mt-[2rem]">
                Sate
              </label>
              <input
                type="text"
                placeholder="Francisco"
                className="dashboard-placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
              />
            </div>
          </div>

          <label className="block text-[#777] text-[16px] font-[400] mb-2 mt-[2rem]">
            Address
          </label>
          <textarea className="dashboard-placeholder w-full  py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none min-h-[175px]" />
          <button
            className={`w-[211px] h-[50px] bg-btnBGColor text-white text-16 font-normal rounded-[5px] border-none mt-8`}
          >
            Update Account
          </button>
        </div>
      </div>
    </div>
  );
}
