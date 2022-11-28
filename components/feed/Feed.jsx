import Logo from "../../public/static/Flyer-Logo.png";
import Image from "next/image";
import Post from "../post/Post"

const Feed = () => {
    return (
        <div className="text-textWhitePrimary flex-grow border-l-[1px] border-darkgray
        border-r max-w-[640px] sm:ml-[98px] lg:ml-[258px] xl:ml-[600px] divide-y-[1px] divide-darkgray">
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