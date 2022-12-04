import Image from "next/image";
import UserImg from "../../public/static/user-icon.png";
import React, { useState } from "react";
import CommentButton from "./CommentButton";
import RepostButton from "./RepostButton";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import EditButton from "./EditButton";
import CreatePost from "../createpost/CreatePost";

const Post = ({text, userName, userTag, userImg}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [repostCount, setRepostCount] = useState(0);
  const [timeStamp, setTimeStamp] = useState("1m")
  return (
    <div className="flex flex-row p-2 border-b-[1px] border-darkgray hover:backdrop-brightness-125 transition ease-in-out duration-200">
      <div className="flex h-full select-none ">
        <div className="my-2 mx-2 h-12 w-12 overflow-hidden">
          <Image src={userImg} width ={50} height={50} className="rounded-full"alt="User" />
        </div>
      </div>
      <div className="flex flex-col pt-2 ml-2 ">
        <div className="flex flex-row ">
          <a href="" className="font-semibold hover:underline">
            {userName}
          </a>
          <p className="text-medgray ml-1 text-base">{userTag}</p>
          <p className="text-medgray ml-1 text-base">∙{timeStamp}</p>
        </div>
        <div className="">
          <p className="leading-tight text-base font-light mt-0.5 w-[500px]">
            {text}
          </p>
        </div>

        <div className="flex justify-between pt-1">
          <CommentButton
            commentCount={commentCount}
            onClick={() => setCommentCount(commentCount => commentCount + 1)}
          />
          <RepostButton
            repostCount={repostCount}
            onClick={() => setRepostCount(repostCount => repostCount + 1)}
          />
          <LikeButton
            likeCount={likeCount}
            onClick={() => setLikeCount(likeCount => likeCount + 1)}
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
