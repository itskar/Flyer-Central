import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RightSidePlaceholder from "../components/temp/RightSidePlaceholder";

export default function Home() {
  const router = useRouter();
  const pageName = "Home"
  const { data: session } = useSession();

  useEffect(() => {
    if(!session){
      router.push("/login")
    }
  }, [session])
    return (
      <div>
        <main className="min-h-screen flex max-w justify-start grid-cols-4">
          <Sidebar activePage={pageName}/>
          <Feed className="col-span-2"/>
          <RightSidePlaceholder/>
        </main>
      </div>
   );

}

