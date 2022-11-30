import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";
export default function Notifications() {
  const pageName = "Notifications"
    return (
        <div>
          <main className=" min-h-screen flex max-w justify-start">
            {<Sidebar activePage={pageName}/>}
            <ComingSoon pageName = {pageName}/>
          </main>
        </div>
    );
  }
  