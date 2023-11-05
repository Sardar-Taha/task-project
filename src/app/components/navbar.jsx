"use client";
import { navNotification, profileImage } from "@/app/assets";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const NavbarComp = () => {
  const pathname = usePathname();

  return (
    <div>
      {/* nav-bar-start */}
      <div className="bg-[#fff] p-4 flex justify-between">
        {/* left-div */}

        <div className="flex gap-4 items-center">
          <h1 className="font-[600] text-[24px]">
            {(pathname === "/" && "Home") ||
              (pathname === "/reports" && "Reports") ||
              (pathname === "/time-sheets" && "Time Sheets") ||
              (pathname === "/upcoming-events" && "Upcoming Events") ||
              (pathname === "/notices" && "Notices") ||
              (pathname === "/schedule-and-help" && "Schedule And Help")}
          </h1>
          <input
            type="text"
            placeholder="Search here"
            className="nav-placeholder w-[235px] h-[50px] py-2 px-3 bg-[#F4F8F1] border  border-[#0B1903] border-opacity-[0.1] rounded shadow-none focus:outline-none"
          />
        </div>
        {/* left-div */}

        {/* right-div */}
        <div className="flex items-center ">
          <Image
            src={navNotification}
            className="w-[24.78px] h-[30px] mr-[2rem]"
            alt="Notification Bell"
          />

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
