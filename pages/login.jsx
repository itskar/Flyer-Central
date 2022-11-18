import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginImageSection from "../components/login/LoginImageSection";
import LoginInputForm from "../components/login/LoginInputForm";

const login = () => {
  const { data: session } = useSession();
  if (session) {
    if (session.user.email.endsWith("@lewisu.edu")) {
      return (
        <div>
          <p class="text-white">Welcome, {session.user.email}</p>
          <button
            className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
      <div className="flex columns-2">
        <LoginImageSection/>
        <LoginInputForm/>
      </div>
      );
    }
  } else {
    return (
      <div className="flex columns-2">
        <LoginImageSection/>
        <LoginInputForm/>
      </div>
    );
  }
};

export default login;
