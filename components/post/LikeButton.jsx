import { useState } from "react";
import { HeartIcon as InactiveIcon } from "@heroicons/react/24/outline";
import { HeartIcon as Icon } from "@heroicons/react/24/solid";

const LikeButton = ({ likeCount, onClick }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`${
        active ? "text-likeRed" : "text-lightgray"
      } flex items-center justify-center select-none xl:justify-start hoverAnimation hover:text-likeRed`}
      onClick={() => {
        setActive(!active);
        !active && onClick();
      }}
    >
      <>
        {active ? <Icon className="h-4" /> : <InactiveIcon className="h-4" />}
        <p className="ml-2 text-sm">{likeCount}</p>
      </>
    </div>
  );
};

export default LikeButton;
