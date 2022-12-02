import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex columns-2">
      {<Sidebar />}
      <div>
        <p class="text-white">Welcome, {session.user.email}</p>
        <button
          className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
