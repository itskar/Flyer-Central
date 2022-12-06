import CreatePost from "../createpost/CreatePost";
import Post from "../post/Post";
import { SparklesIcon } from "@heroicons/react/24/outline";
import {useState, useEffect} from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../../firebase";
import { useSession } from "next-auth/react";

const Feed = () => {
  const [feed, setFeed] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setFeed(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div
      className="text-textWhitePrimary flex-grow border-l-[1px] border-darkgray
        border-r max-w-[620px] sm:ml-[73px] xl:ml-[380px]"
    >
      
      <div className="flex items-center sm:justify-between py-2 px-4 sticky top-0 z-50 backdrop-blur-xl bg-[#101116b0]">
        <h1 className="text-lg sm:text-xl font-semibold">Home</h1>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>  
      </div>
      <CreatePost/>
      {feed.map((post) => <Post key={post.id} id={post.id} post={post.data()} />)}
    </div>
  );
};

export default Feed;
