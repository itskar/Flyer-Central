import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";

export default function Messages() {
  const pageName = "Messages"

    return (
        <div>
          <main className="bg-black min-h-screen flex max-w justify-start">
            <Sidebar activePage={pageName}/>
            <ComingSoon pageName = {pageName}/>
          </main>
        </div>
    );
  }
  