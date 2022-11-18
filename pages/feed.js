import { Input } from "postcss";

function Feed() {
    return (
        <div className = "text-[#d9d9d9] flex-grow border-l border-r border-gray-700 max-w-2x1 sm:ml-[73px] xl:ml-[340px]">
        <div className = "text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
            <h2 className = "text-lg sm:text-xl font-bold">Home</h2>
            <div className = "hoverAnimation w-9 h-9 flex items-center justify-center">
            </div>
        </div>

        <Input/>

        </div>
    );
}

export default Feed;
