import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";

export default function Friends() {
    return (
        <div>
          <main className="bg-black min-h-screen flex max-w justify-start">
            {<Sidebar/>}
            <ComingSoon pageName = "Friends"/>
          </main>
        </div>
    );
  }
  