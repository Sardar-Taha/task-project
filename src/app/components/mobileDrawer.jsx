"use client";
import { IoIosArrowDropleft } from "react-icons/io";
import React from "react";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { HiDocumentReport, HiDocumentSearch } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import {
  BsFillFileEarmarkSpreadsheetFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { usePathname } from "next/navigation";
import { sidebarLogo } from "../assets";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { profileImage } from "../assets";

function MobileDrawer({ open, toggleSidebar }) {
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
    <div>
      <nav
        className={`navbar w-64 absolute overflow-x-scroll top-0 left-0 z-10  bg-secondary h-screen px-5 py-4 ${
          open ? "navbar-open" : "navbar-close"
        }`}
      >
        <div className="flex pr-2 justify-end">
          <IoIosArrowDropleft
            className="text-[58px] text-white "
            onClick={toggleSidebar}
          />
        </div>
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
            onClick={() => {
              router.push(item.route);
              toggleSidebar();
            }}
          >
            {item.image}
            <h1
              className={`text-[16px] font-normal text-[#fff] ${
                pathname === item.route ? "text-secondary" : ""
              }`}
            >
              {item.text}
            </h1>
          </div>
        ))}
        <div className="relative block lg:hidden mt-8">
          <input
            type="text"
            placeholder="Search here"
            className="pl-8 nav-placeholder w-full h-[50px] py-2 px-3 bg-[#F4F8F1] border  border-[#0B1903] border-opacity-[0.1] rounded shadow-none focus:outline-none"
          />
          <AiOutlineSearch className="absolute top-4 left-2 z-1 text-[18px] cursor-pointer text-[rgba(0,0,0,0.5)]" />
        </div>
        <div className="flex flex-row gap-5 justify-start  mt-8">
          <Image
            src={profileImage}
            alt="Profile Img"
            className="w-[49px] h-[49px]"
          />
          <div>
            <h1 className="text-[16px] font-[500] text-white">
              James Williams
            </h1>
            <p className="text-center text-white">Designer</p>
          </div>

          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default MobileDrawer;
