import { useState } from "react";
import {ChatBubbleLeftIcon as InactiveIcon} from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon as Icon} from "@heroicons/react/24/solid";

const CommentButton = ({commentCount, onClick}) => {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`${
        active ? "text-commentBlue" : "text-textWhiteSecondary"
      } flex items-center justify-center select-none xl:justify-start hoverAnimation hover:text-commentBlue`}
      onClick={() => {
        setActive(!active);
        !active && onClick();
      }}
    >
      <>
        {active ? <Icon className="h-5" /> : <InactiveIcon className="h-5" />}
        <p className="ml-2 text-sm">{commentCount}</p>
      </>
    </div>
  );
}

export default CommentButton;
