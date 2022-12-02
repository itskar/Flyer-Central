import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";
import Head from "next/head";

export default function Friends() {
  const pageName = "Friends";
  return (
    <div>
      <Head>
        <title>Flyer Central | {pageName}</title>
        <meta property="og:title" content="Flyer Central" key="title" />
      </Head>
      <main className="min-h-screen flex max-w justify-start">
        <Sidebar activePage={pageName} />
        <ComingSoon pageName={pageName} />
      </main>
    </div>
  );
}
