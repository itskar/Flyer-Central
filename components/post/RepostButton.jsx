import { useState } from "react";
import {ArrowPathRoundedSquareIcon as InactiveIcon} from "@heroicons/react/24/outline";
import {ArrowPathRoundedSquareIcon as Icon} from "@heroicons/react/24/solid";

const RepostButton = ({repostCount, onClick}) => {
 
  const [active, setActive] = useState(false)
  return (
    <div
      className={`${
        active ? "text-repostGreen" : "text-textWhiteSecondary"
      } flex items-center justify-center xl:justify-start select-none hoverAnimation hover:text-repostGreen`}
      onClick={() => {
        setActive(!active);
        !active && onClick();
      }}
    >
      <>
        {active ? <Icon className="h-5" /> : <InactiveIcon className="h-5" />}
        <p className="ml-2 text-sm">{repostCount}</p>
      </>
    </div>
  );
}

export default RepostButton;
