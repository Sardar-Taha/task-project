"use client";
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
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-full bg-secondary h-screen overflow-hidden">
      <Image
        src={sidebarLogo}
        alt="Sidebar Logo"
        className="block mx-auto mt-4"
      />

      <div
        className="flex items-center ml-[2.5rem] gap-4  mt-10 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <AiFillHome className="text-[#fff] text-2xl mb-1" />
        <h1 className="text-[16px] font-normal text-[#fff]  ">Home</h1>
      </div>
      <div
        className="flex ml-[2.5rem] gap-4  mt-10 cursor-pointer"
        onClick={() => router.push("/reports")}
      >
        <Image src={reportIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff]  ">Reports</h1>
      </div>
      <div
        className="flex ml-[2.5rem] gap-4  mt-10 cursor-pointer"
        onClick={() => router.push("/time-sheets")}
      >
        <Image src={timeSheetIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff]  ">Time Sheets</h1>
      </div>
      <div
        className="flex ml-[2.5rem] gap-4  mt-10 cursor-pointer "
        onClick={() => router.push("/upcoming-events")}
      >
        <Image src={eventIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff]  ">
          Upcoming Events
        </h1>
      </div>

      <div
        className="flex ml-[2.5rem] gap-4  mt-10 cursor-pointer"
        onClick={() => router.push("/notices")}
      >
        <Image src={noticeIcon} alt="Home Icon" className="h-[22px]" />
        <h1 className="text-[16px] font-normal text-[#fff]  ">Notices</h1>
      </div>
      <div
        className="flex ml-[2.5rem] gap-4  mt-10 cursor-pointer"
        onClick={() => router.push("/schedule-and-help")}
      >
        <Image src={sheduleIcon} alt="Home Icon" className="h-[20px]" />
        <h1 className="text-[16px] font-normal text-[#fff]  ">
          Schedule & Help
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
