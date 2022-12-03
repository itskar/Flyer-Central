import { useState } from "react";
import { EllipsisHorizontalIcon as InactiveIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon as Icon } from "@heroicons/react/24/solid";

const EditButton = ({ onClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="flex items-center text-lightgray justify-center xl:justify-start iconHoverAnimation hover:text-textWhitePrimary"
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
};

export default EditButton;
