import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "@firebase/firestore";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconFilled,
  ArrowPathRoundedSquareIcon as ArrowPathRoundedSquareIconFilled,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../atoms/modalAtoms";
import { db } from "../../firebase";

function Post({ id, post, postPage }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.name,
      });
    }
  };

  return (
    <div
      className="p-3 flex cursor-pointer border-b border-darkgray"
      onClick={() => router.push(`/postId=${id}`)}
    >
      {!postPage && (
        <Image
          src={post?.userImg}
          alt=""
          width={50}
          height={50}
          className="h-11 w-11 rounded-full mr-4"
        />
      )}
      <div className="flex flex-col space-y-2 select-none w-full">
        <div className={`flex ${!postPage && "justify-between"}`}>
          {postPage && (
            <Image
              src={post?.userImg}
              alt="Profile Picture"
              width={50}
              height={50}
              className="h-11 w-11 rounded-full mr-4"
            />
          )}
          <div className="text-lightgray">
            <div className="inline-block group">
              <h4
                className={`font-semibold text-[15px] sm:text-base text-textWhitePrimary select-none group-hover:underline ${
                  !postPage && "inline-block"
                }`}
              >
                {post?.username}
              </h4>
              <span
                className={`text-sm sm:text-[15px] select-none ${
                  !postPage && "ml-1.5"
                }`}
              >
                @{post?.tag}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm select-none sm:text-[15px]">
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
            {!postPage && (
              <p className="text-textWhitePrimary text-[15px] sm:text-base mt-0.5">
                {post?.text}
              </p>
            )}
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <EllipsisHorizontalIcon className="h-[18px] text-lightgray group-hover:text-primaryPurple" />
          </div>
        </div>
        {postPage && (
          <p className="text-textWhitePrimary mt-0.5 text-xl">{post?.text}</p>
        )}
        <img
          src={post?.image}
          alt=""
          className="rounded-2xl select-none max-h-[700px] object-cover mr-2"
        />
        <div
          className={`text-lightgray flex justify-between w-11/12 ${
            postPage && "mx-auto"
          }`}
        >
          <div
            className="flex items-center space-x-1 hgroup"
            onClick={(e) => {
              e.stopPropagation();
              setPostId(id);
              setIsOpen(true);
            }}
          >
            <div className="icon group-hover:bg-primaryPurple">
              <ChatBubbleLeftIcon className="h-[18px] group-hover:text-primaryPurple" />
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-primaryPurple text-sm">
                {comments.length}
              </span>
            )}
          </div>

          <div className="icon group">
            <ArrowPathRoundedSquareIcon className="h-[18px] group-hover:text-[#1d9bf0]" />
          </div>

          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              likePost();
            }}
          >
            <div className="icon group-hover:bg-likeRed/10">
              {liked ? (
                <HeartIconFilled className="h-[18px] text-likeRed" />
              ) : (
                <HeartIcon className="h-[18px] group-hover:text-likeRed" />
              )}
            </div>
            {likes.length > 0 && (
              <span
                className={`group-hover:text-likeRed text-sm ${
                  liked && "text-likeRed"
                }`}
              >
                {likes.length}
              </span>
            )}
          </div>

          {session.user.uid === post?.id ? (
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                deleteDoc(doc(db, "posts", id));
                router.push("/");
              }}
            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-[18px] group-hover:text-likeRed" />
              </div>
            </div>
          ): (
            <div
              className="flex items-center space-x-1 group"
            >
              <div className="icon group-hover:bg-red-600/10">
                <ShareIcon className="h-[18px] group-hover:text-textWhiteSecondary" />
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default Post;
