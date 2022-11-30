import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";

export default function Events() {
  const pageName = "Events"
    return (
        <div>
          <main className="min-h-screen flex max-w justify-start">
            <Sidebar activePage={pageName}/>
            <ComingSoon pageName = {pageName}/>
          </main>
        </div>
    );
  }
  