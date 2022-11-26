import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";

export default function Events() {
    return (
        <div>
          <main className="bg-black min-h-screen flex max-w justify-start">
            {<Sidebar/>}
            <ComingSoon pageName = "Events"/>
          </main>
        </div>
    );
  }
  