import React from "react";
import Logo from "../../public/static/Logo.png";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginInputForm = () => {
  return (
    <div
      id="login-section"
        className= "flex justify-center items-center h-screen w-screen"
    >
      <div className="bg-[#ffffff] rounded-xl py-16">
        <div className="flex justify-center">
          <img className="w-1/4" src={Logo.src}></img>
        </div>
        <div className="flex justify-center mb-6">
          <p className="font-Belleza text-5xl text-[#15161D] m-3">FLYER CENTRAL</p>
        </div>
        <div className="flex justify-center">
          <div className="w-72">
            <div className="flex justify-center">
              <button
                className="bg-[#15161D] hover:bg-[#363636] text-white w-72 py-3 font-bold rounded-full"
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </button>
            </div>
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-medgray"></div>
              <span className="flex-shrink mx-4 text-darkgray">or</span>
              <div className="flex-grow border-t border-medgray"></div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-primaryPurple hover:bg-primaryPurplehover text-white w-72 py-3 font-bold rounded-full"
                onClick={() => signIn("google")}
              >
                Sign in with Lewis
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <div className="w-64">
            <div>
              <p className=" text-darkgray text-xs">
                By signing up with us you agree to{" "}
                <a href="" className="text-[#0F9AFB] hover:text-[#0f99fbe5]">
                  the Terms of Service
                </a>{" "}
                and{" "}
                <a href="" className="text-[#0F9AFB] hover:text-[#0f99fbe5]">
                  Privacy Policy
                </a>
                , including{" "}
                <a href="" className="text-[#0F9AFB] hover:text-[#0f99fbe5]">
                  Cookie Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInputForm;
