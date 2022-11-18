import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div class="flex columns-2">
      <div id="image-section" class="bg-black">
        <img class="h-full opacity-90" src="The-Encounter.jpg"></img>
      </div>
      <div
        id="login-section"
        class="flex justify-center items-center h-screen bg-black"
      >
        <div>
          <div class="flex justify-center">
            <img class="w-1/3" src="FLyer-Logo.png"></img>
          </div>
          <div class="flex justify-center mb-6">
            <p class="font Calibri text-5xl text-white m-3">FLYER CENTRAL</p>
          </div>
          <div class="flex justify-center">
            <div class="w-72">
              <div class="flex justify-center">
                <button
                  class="bg-white hover:bg-gray-200 text-black w-72 py-3 font-bold rounded-full"
                  onClick={() => signIn("google")}
                >
                  Sign in with Google
                </button>
              </div>
              <div class="relative flex py-2 items-center">
                <div class="flex-grow border-t border-gray-700"></div>
                <span class="flex-shrink mx-4 text-white">or</span>
                <div class="flex-grow border-t border-gray-700"></div>
              </div>
              <div class="flex justify-center">
                <button
                  class="bg-red-800 hover:bg-red-00 text-white w-72 py-3 font-bold rounded-full"
                  onClick={() => signIn("google")}
                >
                  Sign in with Lewis
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-center my-1">
            <div class="w-64">
              <div>
                <p class="text-white text-xs">By signing up with us you agree to <a href="">the Terms of Service</a> and <a href="">Privacy Policy</a>, including <a href="">Cookie Use</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
