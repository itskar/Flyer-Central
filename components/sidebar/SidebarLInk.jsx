import { useRouter } from "next/router";
import React, { useState } from 'react';

function SidebarLink({ Icon, InactiveIcon, text, active }) {
  const router = useRouter();
  const [route, setRoute] = useState(text.toLowerCase());

  return (
    <div
      className={`${
        active ? "text-textWhitePrimary" : "text-textWhiteSecondary"
      } flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation`}
      onClick={async() => router.push(`/${text == "Home" ? "" : route }`)}
    >
      <>
        {active ? <Icon className="h-7 w-9" /> : <InactiveIcon className="h-7 w-9" />}
      </>
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
