import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";

export default function Messages() {
    return (
        <div>
          <main className="bg-black min-h-screen flex max-w justify-start">
            {<Sidebar/>}
            <ComingSoon pageName = "Messages"/>
          </main>
        </div>
    );
  }
  