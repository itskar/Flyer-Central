import { useState } from "react";
import {ShareIcon as InactiveIcon} from "@heroicons/react/24/outline";
import {ShareIcon as Icon} from "@heroicons/react/24/solid";

const ShareButton = ({onClick}) => {
 
  const [active, setActive] = useState(false)

  return (
    <div
      className="flex items-center text-textWhiteSecondary select-none justify-center xl:justify-start hoverAnimation hover:text-commentBlue"
      onClick={() => {
        setActive(!active);
        !active && onClick();
      }}
    >
      <>
        {active ? <Icon className="h-5" /> : <InactiveIcon className="h-5" />}
      </>
    </div>
  );
}

export default ShareButton;
