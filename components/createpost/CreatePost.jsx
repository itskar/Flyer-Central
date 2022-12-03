import UserImg from "../../public/static/user-icon.png";
import Image from "next/image";
import {useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Feed from "../feed/Feed";
import Post from "../post/Post";
import { useSession } from "next-auth/react";



const CreatePost = ({feed, setFeed}) => {

    
    const [message, setMessage] = useState('');
    return (
        <div className="mb-2 flex flex-col justify-evenly relative">
            <div className="flex flex-row select-none">
                <div className="my-5 ml-5 mr-2 h-12 w-12 rounded-full overflow-hidden">
                    <Image src={UserImg} alt="User" />
                </div>
                <div className="mt-6 mb-1">
                    <TextareaAutosize
                    placeholder="What's happening?" 
                    className="bg-[#15161D] py-1 resize-none focus:outline-none
                    w-[500px] overflow-hidden placeholder:text-xl"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                    <div className="pl-[460px] pt-5">
                        <button 
                            class="bg-primaryPurple hover:bg-opacity-80 
                            text-white font-bold py-2 px-4 rounded-full
                            w-20"
                            onClick={() => setFeed(feed => [...feed, {text:message}])}>Post
                        </button>
                    </div>
                </div>
            </div>
      </div>
    )

    
}

export default CreatePost;