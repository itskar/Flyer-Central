import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "../../public/static/Flyer-Logo.png";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  CalendarIcon,
  UserGroupIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const { data: session } = useSession();
  
  return (
    <div className="hidden sm:flex flex-col items-center border-r-[1px] border-darkgray xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex flex-row items-center justify-center hover:cursor-pointer w-20 h-20 p-0 xl:ml-32 xl:w-30 xl:h-30 mt-4">
        <Image src={Logo} width={90} height={90} className="ml-2 xl:ml-6" />
        <h1 className="hidden xl:inline text-white text-2xl text-center font-Belleza">FLYER CENTRAL</h1>
      </div>
      <div className="space-y-1.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Events" Icon={CalendarIcon} />
        <SidebarLink text="Friends" Icon={UserGroupIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto"
        onClick={signOut}
      >
        <img
          src={Logo.src}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Flyer"</h4>
          <p className="text-[#6e767d]">@lewisu.edu</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
