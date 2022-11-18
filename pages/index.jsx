import Head from "next/head";
import Image from "next/image";
import LoginImageSection from "../components/LoginImageSection";
import LoginInputForm from "../components/LoginInputForm";

export default function Home() {
  return (
    <div className="flex columns-2">
      <LoginImageSection/>
      <LoginInputForm/>
    </div>
  );
}
