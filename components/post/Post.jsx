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
    <div className="mb-2 flex flex-col justify-evenly relative">
      <div className="flex flex-row select-none">
        <div className="my-5 ml-5 mr-2 h-12 w-12 xl:h-14 xl:w-14 rounded-full overflow-hidden">
          <Image src={UserImg} alt="User" />
        </div>
        <div className="py-5">
          <a href="" className="font-bold hover:underline ml-2">
            Flyer
          </a>
        </div>
        <div className="py-5 px-1">
          <p className="text-[#6e767d] text-base">@FlyerCentral</p>
        </div>
        <div className="absolute top-3 right-1">
          <EditButton
            onClick={() => console.log("Clicked post edit button!")}
          />
        </div>
      </div>
      <div className="ml-[85px] relative">
        <div className="w-[400px]">
          <p className="absolute top-[-40px] xl:top-[-45px] xl:ml-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
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
