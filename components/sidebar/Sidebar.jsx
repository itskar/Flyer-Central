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
  EnvelopeIcon,
  CalendarIcon,
  UserGroupIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

import {
  HomeIcon as HomeIconOutline,
  HashtagIcon as HashtagIconOutline,
  BellIcon as BellIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  CalendarIcon as CalendarIconOutline,
  UserGroupIcon as UserGroupIconOutline,
  EllipsisHorizontalIcon as EllipsisHorizontalIconOutline,
} from "@heroicons/react/24/outline";
import SidebarLink from "./SidebarLink";

const Sidebar = ({activePage}) => {
  const { data: session } = useSession();

  return (
    <div className="hidden bg-[#161616] sm:flex flex-col items-center w-[96px] lg:ml-40 xl:items-start xl:w-[342px] xl:ml-64 p-2 fixed h-full">
      <div className="flex flex-row items-center justify-center hover:cursor-pointer sm:w-14 sm:h-14 p-0 xl:ml-28 xl:w-20 xl:h-20 xl:mt-6 mt-4">
        <Image src={Logo} alt="Lewis University" width={75} height={75} className="xl:ml-2" quality={100}/>
        <h1 className="hidden xl:inline text-white text-2xl text-center font-Belleza leading-tight">
          FLYER CENTRAL
        </h1>
      </div>
      <div className="space-y-1.5 mt-4 mb-2.5 xl:ml-16">
        <SidebarLink text="Home" Icon={HomeIcon} InactiveIcon={HomeIconOutline} active ={activePage=="Home"}/>
        <SidebarLink text="Explore" Icon={HashtagIcon} InactiveIcon={HashtagIconOutline} active ={activePage=="Explore"}/>
        <SidebarLink text="Notifications" Icon={BellIcon} InactiveIcon={BellIconOutline} active ={activePage=="Notifications"}/>
        <SidebarLink text="Messages" Icon={EnvelopeIcon} InactiveIcon={EnvelopeIconOutline} active ={activePage=="Messages"}/>
        <SidebarLink text="Events" Icon={CalendarIcon} InactiveIcon={CalendarIconOutline} active ={activePage=="Events"}/>
        <SidebarLink text="Friends" Icon={UserGroupIcon} InactiveIcon={UserGroupIconOutline} active ={activePage=="Friends"}/>
        <SidebarLink text="More" Icon={EllipsisHorizontalIcon} InactiveIcon={EllipsisHorizontalIconOutline} active ={activePage=="More"}/>
      </div>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-16"
        onClick={signOut}
      >
        <img
          src={UserImg.src}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Flyer</h4>
          <p className="text-[#6e767d]">@lewisu.edu</p>
        </div>
        <EllipsisHorizontalIconOutline className="h-5 hidden text-textWhiteSecondary xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
