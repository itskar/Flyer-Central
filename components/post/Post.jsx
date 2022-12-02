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

  return (
    <div className="mb-2 flex flex-col justify-evenly relative p-2">
      <div className="flex flex-row select-none">
        <div className="my-2 ml-2 mr-4 h-12 w-12 rounded-full overflow-hidden">
          <Image src={UserImg} alt="User" />
        </div>
        <div className="py-2">
          <a href="" className="font-bold hover:underline">
            Flyer
          </a>
        </div>
        <div className="py-2 px-1">
          <p className="text-[#6e767d] text-base">@FlyerCentral</p>
        </div>
        <div className="absolute top-2 right-1">
          <EditButton
            onClick={() => console.log("Clicked post edit button!")}
          />
        </div>
      </div>
      <div className="ml-20 top-[-34px] xl:top-[-34px] max-w-[500px] relative">
        <p className="absolute">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="pt-12 flex justify-center gap-20">
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
  );
};

export default Post;
