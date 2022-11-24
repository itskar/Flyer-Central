import { useRouter } from "next/router";

function PostLink({ Icon, InactiveIcon, text, active }) {
  const router = useRouter();
  return (
    <div
      className={`${
        active ? "text-darkgray" : "text-[#e2e2e2]"
      } flex items-center justify-center xl:justify-start hoverAnimation ${
        active && "font-bold"
      }`}
      onClick={() => active && router.push("/")}
    >
      <>
        {active ? <Icon className="h-5" /> : <InactiveIcon className="h-5" />}
      </>
      
    </div>
  );
}

export default PostLink;
