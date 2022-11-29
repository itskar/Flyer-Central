import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginInputForm from "../components/login/LoginInputForm";
import { useRouter } from "next/router";

const Login = () => {
const router = useRouter();
const { data: session } = useSession();
  if (session) {
    if (session.user.email.endsWith("@lewisu.edu")) {
      router.push("/")
    } else {
      return (
        <div className="flex align-middle w-screen bg-login">
        <LoginInputForm/>
      </div>
      );
    }
  } else {
    return (
      <div className="flex align-middle w-screen bg-login">
        <LoginInputForm/>
      </div>
    );
  }
};

export default Login;
