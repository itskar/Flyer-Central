import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";
export default function Notifications() {
    return (
        <div>
          <main className="bg-black min-h-screen flex max-w justify-start">
            {<Sidebar/>}
            <ComingSoon pageName = "Notifications"/>
          </main>
        </div>
    );
  }
  