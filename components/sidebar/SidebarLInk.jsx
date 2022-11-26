import { useRouter } from "next/router";
import React, { useState } from 'react';

function SidebarLink({ Icon, InactiveIcon, text, active }) {
  const router = useRouter();
  const [route, setRoute] = useState(text.toLowerCase());

  return (
    <div
      className={`${
        active ? "text-[#dddddd]" : "text-[#999999]"
      } flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
      onClick={() => router.push(`/${text == "Home" ? "/" : route }`)}
    >
      <>
        {active ? <Icon className="h-7" /> : <InactiveIcon className="h-7" />}
      </>
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
