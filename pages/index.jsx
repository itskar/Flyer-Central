import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "../components/login/Login";
import RightSidePlaceholder from "../components/temp/RightSidePlaceholder";
import Head from "next/head";

export default function Home() {
  const pageName = "Home";
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex align-middle w-screen bg-login">
        <Head>
          <title>Flyer Central | Login</title>
          <meta property="og:title" content="Flyer Central" key="title" />
        </Head>
        <Login />
      </div>
    );
  } else if (!session.user.email.endsWith("@lewisu.edu")) {
    console.log("Email doesn't end with @lewisu.edu");
    return (
      <div className="flex align-middle w-screen bg-login">
        <Head>
          <title>Flyer Central | Login</title>
          <meta property="og:title" content="Flyer Central" key="title" />
        </Head>
        <Login />
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Flyer Central | {pageName}</title>
        <meta property="og:title" content="Flyer Central" key="title" />
      </Head>
      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar activePage={pageName} />
        <Feed />
        <RightSidePlaceholder />
      </main>
    </div>
  );
}
