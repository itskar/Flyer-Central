import Head from "next/head";
import Image from "next/image";
import LoginImageSection from "../components/login/LoginImageSection";
import LoginInputForm from "../components/login/LoginInputForm";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex columns-2">
      {/* <Sidebar/> */}
      <LoginImageSection/>
      <LoginInputForm/>
    </div>
  );
}
