import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "../components/login/Login";
import RightSidePlaceholder from "../components/temp/RightSidePlaceholder";

export default function Home() {
  const pageName = "Home"
  const { data: session } = useSession();

    if(!session){
      return (
        <div className="flex align-middle w-screen bg-login">
          <Login/>
        </div>
      )
    }
    else if(!session.user.email.endsWith("@lewisu.edu")){
      console.log("Email doesn't end with @lewisu.edu")
      return (
        <div className="flex align-middle w-screen bg-login">
          <Login/>
        </div>
      )
    }
    return (
      <div>
        <main className="min-h-screen flex max-w justify-start">
          <Sidebar activePage={pageName}/>
          <Feed/>
          <RightSidePlaceholder/>
        </main>
      </div>
   );

}

