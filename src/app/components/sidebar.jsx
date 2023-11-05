import Image from "next/image";
import React from "react";
import {
  eventIcon,
  homeIcon,
  noticeIcon,
  reportIcon,
  sheduleIcon,
  sidebarLogo,
  timeSheetIcon,
} from "../assets";

function Sidebar() {
  return (
    <div className="w-full bg-secondary h-screen overflow-hidden">
      <Image
        src={sidebarLogo}
        alt="Sidebar Logo"
        className="block mx-auto mt-4"
      />

      <div className="flex ml-[2.5rem] gap-4  mt-10">
        <Image src={homeIcon} alt="Home Icon" className="bg-white" />
        <h1 className="text-[16px] font-normal text-[#fff] cursor-pointer ">
          Home
        </h1>
      </div>
      <div className="flex ml-[2.5rem] gap-4  mt-10">
        <Image src={timeSheetIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff] cursor-pointer ">
          Time Sheets
        </h1>
      </div>
      <div className="flex ml-[2.5rem] gap-4  mt-10 ">
        <Image src={eventIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff] cursor-pointer ">
          Upcomng events
        </h1>
      </div>
      <div className="flex ml-[2.5rem] gap-4  mt-10">
        <Image src={reportIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff] cursor-pointer ">
          Reports
        </h1>
      </div>
      <div className="flex ml-[2.5rem] gap-4  mt-10">
        <Image src={noticeIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff] cursor-pointer ">
          Notices
        </h1>
      </div>
      <div className="flex ml-[2.5rem] gap-4  mt-10">
        <Image src={sheduleIcon} alt="Home Icon" className="h-[20px]" />
        <h1 className="text-[16px] font-normal text-[#fff] cursor-pointer ">
          Shedule & Help
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
