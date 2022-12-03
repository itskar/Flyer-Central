import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const CreatePost = ({ feed, setFeed }) => {
  const { data: session } = useSession();
  const userTag = `@${session?.user?.email.split('@')[0]}`;
  const userName = session?.user?.name?.split(' ')[0]; 
    
  const [message, setMessage] = useState("");
  return (
    <div className="mb-2 flex flex-col justify-evenly relative">
      <div className="flex flex-row select-none">
        <div className="my-5 ml-5 mr-2 h-12 w-12 overflow-hidden">
          <Image src={session?.user?.image} width ={50} height={50} className="rounded-full" alt="User" />
        </div>
        <div className="mt-6 mb-1">
          <TextareaAutosize
            placeholder="What's happening?"
            className="bg-[#15161D] py-1 px-1 resize-none focus:outline-none
                    w-[500px] overflow-hidden placeholder:text-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="pl-[450px] pt-5">
            <button
              class="bg-primaryPurple hover:bg-opacity-80 
                            text-white font-bold py-2 px-4 rounded-full
                            w-20 disabled:bg-darkgray"
              onClick={() => setFeed((feed) => [{ text: message, userName: userName, userTag: userTag, userImg: session?.user?.image}, ...feed ])}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
