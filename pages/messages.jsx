import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";
import Head from "next/head";
import RightSidePlaceholder from "../components/temp/RightSidePlaceholder";

export default function Messages() {
  const pageName = "Messages";

  return (
    <div>
      <Head>
        <title>Flyer Central | {pageName}</title>
        <meta property="og:title" content="Flyer Central" key="title" />
      </Head>
      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar activePage={pageName} />
        <ComingSoon pageName={pageName} />
        <RightSidePlaceholder />
      </main>
    </div>
  );
}
