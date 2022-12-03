import { useState } from "react";
import { ShareIcon as InactiveIcon } from "@heroicons/react/24/outline";
import { ShareIcon as Icon } from "@heroicons/react/24/solid";

const ShareButton = ({ onClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="flex items-center text-lightgray select-none justify-center xl:justify-start iconHoverAnimation hover:text-commentBlue"
      onClick={() => {
        setActive(!active);
        !active && onClick();
      }}
    >
      <>
        {active ? <Icon className="h-4" /> : <InactiveIcon className="h-4" />}
      </>
    </div>
  );
};

export default ShareButton;
