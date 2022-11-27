import React from "react";
import Image from "next/image";
import Logo from "../../public/static/Logo.png";
import UserImg from "../../public/static/user-icon.png";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  CalendarIcon,
  UserGroupIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";

import {
  HomeIcon as HomeIconOutline,
  HashtagIcon as HashtagIconOutline,
  BellIcon as BellIconOutline,
  InboxIcon as InboxIconOutline,
  CalendarIcon as CalendarIconOutline,
  UserGroupIcon as UserGroupIconOutline,
  DotsCircleHorizontalIcon as DotsCircleHorizontalIconOutline,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";

const Sidebar = ({activePage}) => {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] ml-64 p-2 fixed h-full">
      <div className="flex flex-row items-center justify-center hover:cursor-pointer w-20 h-20 p-0 xl:ml-32 xl:w-30 xl:h-30 mt-4">
        <Image src={Logo} width={90} height={90} className="ml-2 xl:ml-6" />
        <h1 className="hidden xl:inline text-white text-2xl text-center font-Belleza">
          FLYER CENTRAL
        </h1>
      </div>
      <div className="space-y-1.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} InactiveIcon={HomeIconOutline} active ={activePage=="Home"}/>
        <SidebarLink text="Explore" Icon={HashtagIcon} InactiveIcon={HashtagIconOutline} active ={activePage=="Explore"}/>
        <SidebarLink text="Notifications" Icon={BellIcon} InactiveIcon={BellIconOutline} active ={activePage=="Notifications"}/>
        <SidebarLink text="Messages" Icon={InboxIcon} InactiveIcon={InboxIconOutline} active ={activePage=="Messages"}/>
        <SidebarLink text="Events" Icon={CalendarIcon} InactiveIcon={CalendarIconOutline} active ={activePage=="Events"}/>
        <SidebarLink text="Friends" Icon={UserGroupIcon} InactiveIcon={UserGroupIconOutline} active ={activePage=="Friends"}/>
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} InactiveIcon={DotsCircleHorizontalIconOutline} active ={activePage=="More"}/>
      </div>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto"
        onClick={signOut}
      >
        <img
          src={UserImg.src}
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
