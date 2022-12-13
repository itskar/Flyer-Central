import Image from "next/image";
import { useState } from "react";

const NewsButton = (props) => {
  const skipImage =
    "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg";
  return (
    <div className="pl-5 newsHoverAnimation">
      <div className="py-1">
        <a href={props.link} target="_blank">
          <p className="text-xs text-medgray">
            {props.source} ∙ {props.timeStamp}
          </p>
          <p className="leading-tight pb-1">{props.title}</p>
          {props.imageSrc != skipImage && (
            <div className="w-1/2 h-auto rounded-md overflow-clip">
              <Image src={props.imageSrc} alt={props.source} width={500} height={500} />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default NewsButton;
