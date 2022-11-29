import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
        <main className="bg-black min-h-screen flex max-w justify-start">
          {<Sidebar activePage={pageName}/>}
          {<Feed/>}
        </main>
      </div>
   );

}

