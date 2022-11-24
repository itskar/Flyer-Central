import Head from "next/head";
import Image from "next/image";
import Feed from "../components/feed/Feed";
import LoginImageSection from "../components/login/LoginImageSection";
import LoginInputForm from "../components/login/LoginInputForm";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
      <div>
        <main className="bg-black min-h-screen flex max-w">
          {<Sidebar/>}
          {<Feed/>}
        </main>
      </div>

      

  
  );
}
