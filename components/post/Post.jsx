import Image from "next/image";
import Logo from "../../public/static/Flyer-Logo.png";

import {
    ChatIcon as Reply,
    HeartIcon as Heart,
    UploadIcon as Share,
    RefreshIcon as Retweet,
    DotsHorizontalIcon as Edit
} from "@heroicons/react/outline"

import PostLink from "./PostLink";
    
const Post = () => {
    return (
        <div className="mb-2 relative">
            <div className="flex flex-row">
                <div class="my-5 ml-5 mr-2 h-14 w-14 rounded-full bg-white">
                    <Image src={Logo}/>
                </div>
                <div className="py-5">
                    <a href="" className="font-bold hover:underline">Flyer</a>
                </div>
                <div className="py-5 px-1">
                    <p className="text-[#6e767d] text-base">@FlyerCentral</p>
                </div>
                <div className="absolute top-3 right-5">
                    <PostLink text="" Icon={Edit} InactiveIcon={Edit} active />
                </div>
            </div>
            <div className="ml-[85px] relative">
                <div className="w-[500px]">
                    <p className="absolute top-[-50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="pt-8 flex justify-center gap-12">
                <PostLink Icon={Reply} InactiveIcon={Reply} active />
                <PostLink Icon={Retweet} InactiveIcon={Retweet} active />
                <PostLink Icon={Heart} InactiveIcon={Heart} active />
                <PostLink Icon={Share} InactiveIcon={Share} active />
            </div>      
        </div>
    )
}

export default Post;