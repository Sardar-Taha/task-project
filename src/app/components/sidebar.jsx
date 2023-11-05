"use client";
import Image from "next/image";
import React from "react";
import { sidebarLogo } from "../assets";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { HiDocumentReport, HiDocumentSearch } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import {
  BsFillFileEarmarkSpreadsheetFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { usePathname } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const sidebarData = [
    {
      id: 1,
      text: "Home",
      route: "/",
      image: (
        <AiFillHome
          className={`text-[#fff] text-2xl mb-1 ${
            pathname === "/" ? "text-secondary" : ""
          }`}
        />
      ),
    },
    {
      id: 2,
      text: "Reports",
      route: "/reports",
      image: (
        <HiDocumentReport
          className={`text-[#fff] text-2xl mb-1 ${
            pathname === "/reports" ? "text-secondary" : ""
          }`}
        />
      ),
    },
    {
      id: 3,
      text: "Time Sheets",
      route: "/time-sheets",
      image: (
        <BsFillFileEarmarkSpreadsheetFill
          className={`text-[#fff] text-2xl mb-1 ${
            pathname === "/time-sheets" ? "text-secondary" : ""
          }`}
        />
      ),
    },
    {
      id: 4,
      text: "Upcoming Events",
      route: "/upcoming-events",
      image: (
        <BsFillCalendarEventFill
          className={`text-[#fff] text-2xl mb-1 ${
            pathname === "/upcoming-events" ? "text-secondary" : ""
          }`}
        />
      ),
    },
    {
      id: 5,
      text: "Notices",
      route: "/notices",

      image: (
        <HiDocumentSearch
          className={`text-[#fff] text-2xl mb-1 ${
            pathname === "/notices" ? "text-secondary" : ""
          }`}
        />
      ),
    },
    {
      id: 6,
      text: "Schedule & Help",
      route: "/schedule-and-help",
      image: (
        <FaCalendarAlt
          className={`text-[#fff] text-2xl mb-1 ${
            pathname === "/schedule-and-help" ? "text-secondary" : ""
          }`}
        />
      ),
    },
  ];

  return (
    <div className="w-full bg-secondary h-screen overflow-hidden px-5 hidden lg:block">
      <Image
        src={sidebarLogo}
        alt="Sidebar Logo"
        className="block mx-auto mt-4"
      />
      {sidebarData.map((item) => (
        <div
          key={item.id}
          className={`flex items-center gap-4  mt-4 cursor-pointer py-4 px-2 ${
            pathname === item.route ? "bg-white rounded-lg" : ""
          }`}
          onClick={() => router.push(item.route)}
        >
          {item.image}
          <h1
            className={`text-[16px] font-normal text-[#fff] ${
              pathname === item.route ? "text-secondary font-[600]" : ""
            }`}
          >
            {item.text}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
