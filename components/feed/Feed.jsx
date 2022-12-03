import CreatePost from "../createpost/CreatePost";
import Post from "../post/Post";
import { SparklesIcon } from "@heroicons/react/24/outline";

const Feed = () => {
  return (
    <div
      className="text-textWhitePrimary flex-grow border-l-[1px] border-darkgray
        border-r max-w-[620px] sm:ml-[73px] xl:ml-[400px] divide-y-[1px] divide-darkgray"
    >
      <div className="flex items-center sm:justify-between py-2 px-4 sticky top-0 z-50 backdrop-blur-md backdrop-brightness-50">
        <h1 className="text-lg sm:text-xl font-semibold">Home</h1>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
