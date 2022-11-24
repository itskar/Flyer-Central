import Logo from "../../public/static/Flyer-Logo.png";
import Image from "next/image";
import Post from "../post/Post"

const Feed = () => {
    return (
        <div class="text-white flex-grow
        border-r border-darkgray max-w-2xl sm:ml-[354px] xl:ml-[596px] divide-y-[1px] divide-darkgray">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
    )

}

export default Feed;