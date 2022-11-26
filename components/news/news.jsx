import { Result } from "postcss";

function News({ result }) {
    return (
    <div className = "hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
        <div className = "space-y-0.5">
            <p className = "text-[$6e767d] text-xs font-medium">{result.heading}</p>
            <h6 className = "font-bold max-w-p250px] text-sm">
                {result.descrption}
            </h6>
            <p>Recent News {result.tags.map}</p>
    </div>
    </div>
    );
}

export default News;