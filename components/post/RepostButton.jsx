import { useState } from "react";
import { ArrowPathRoundedSquareIcon as InactiveIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon as Icon } from "@heroicons/react/24/solid";

const RepostButton = ({ repostCount, onClick }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`${
        active ? "text-repostGreen" : "text-lightgray"
      } flex items-center justify-center xl:justify-start select-none iconHoverAnimation hover:text-repostGreen`}
      onClick={() => {
        setActive(!active);
        !active && onClick();
      }}
    >
      <>
        {active ? <Icon className="h-4" /> : <InactiveIcon className="h-4" />}
        <p className="ml-2 text-sm">{repostCount}</p>
      </>
    </div>
  );
};

export default RepostButton;
