"use client";
import { profileImage } from "../assets";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";
import MobileDrawer from "./mobileDrawer";

const NavbarComp = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* nav-bar-start */}
      <div className="bg-[#fff] p-4 flex justify-between">
        {/* left-div */}

        <div className="flex gap-4 items-center max-lg:justify-between max-lg:w-full">
          <CgMenuMotion
            className="text-[42px] text-secondary block lg:hidden"
            onClick={toggleSidebar}
          />

          {open && (
            <div className="fixed max-lg:block hidden top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.8)] z-10 "></div>
          )}

          {open && <MobileDrawer open={open} toggleSidebar={toggleSidebar} />}
          <h1 className="font-[600] text-[24px] text-right lg:text-left">
            {(pathname === "/" && "Home") ||
              (pathname === "/reports" && "Reports") ||
              (pathname === "/time-sheets" && "Time Sheets") ||
              (pathname === "/upcoming-events" && "Upcoming Events") ||
              (pathname === "/notices" && "Notices") ||
              (pathname === "/schedule-and-help" && "Schedule And Help")}
          </h1>
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search here"
              className="pl-8 nav-placeholder w-[235px] h-[50px] py-2 px-3 bg-[#F4F8F1] border  border-[#0B1903] border-opacity-[0.1] rounded shadow-none focus:outline-none"
            />
            <AiOutlineSearch className="absolute top-4 left-2 z-1 text-[18px] cursor-pointer text-[rgba(0,0,0,0.5)]" />
          </div>
        </div>
        {/* left-div */}

        {/* right-div */}
        <div className="hidden lg:flex items-center  ">
          <div>
            <h1 className="text-[16px] font-[500]">James Williams</h1>
            <p className="text-end text-[#000] text-opacity-[0.41]">Designer</p>
          </div>

          {/* profile */}

          <Image
            src={profileImage}
            alt="Profile Img"
            className="w-[49px] h-[49px] ml-[15px]"
          />

          {/* profile */}
        </div>
        {/* right-div */}
      </div>
      {/* nav-bar-end */}
    </div>
  );
};

export default NavbarComp;
