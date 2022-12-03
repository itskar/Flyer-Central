import Image from "next/image";
import UserImg from "../../public/static/user-icon.png";
import React, { useState } from "react";
import CommentButton from "./CommentButton";
import RepostButton from "./RepostButton";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import EditButton from "./EditButton";

const Post = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [repostCount, setRepostCount] = useState(0);
  const [timeStamp, setTimeStamp] = useState("1h")
  return (
    <div className="flex flex-row p-2">
      <div className="flex h-full select-none ">
        <div className="my-2 mx-2 h-12 w-12 rounded-full overflow-hidden">
          <Image src={UserImg} alt="User" />
        </div>
      </div>
      <div className="flex flex-col pt-2 ml-2 ">
        <div className="flex flex-row ">
          <a href="" className="font-bold hover:underline">
            Flyer
          </a>
          <p className="text-medgray ml-1 text-base">@FlyerCentral</p>
          <p className="text-medgray ml-1 text-base">∙{timeStamp}</p>
        </div>
        <div className="">
          <p className="leading-tight text-base font-light mt-0.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex justify-between pt-1">
          <CommentButton
            commentCount={commentCount}
            onClick={() => setCommentCount(commentCount + 1)}
          />
          <RepostButton
            repostCount={repostCount}
            onClick={() => setRepostCount(repostCount + 1)}
          />
          <LikeButton
            likeCount={likeCount}
            onClick={() => setLikeCount(likeCount + 1)}
          />
          <ShareButton onClick={() => console.log("Link copied")} />
        </div>
      </div>
      <div>
        <EditButton onClick={() => console.log("Clicked post edit button!")} />
      </div>
    </div>
  );
};

export default Post;
