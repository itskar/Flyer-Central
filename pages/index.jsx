import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
      <div>
        <main className="bg-black min-h-screen flex max-w justify-start">
          {<Sidebar/>}
          {<Feed/>}
        </main>
      </div>
  );
}
