import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  if (session) {
    if (session.user.email.endsWith("@lewisu.edu")) {
      return (
        <div>
          <p>Welcome, {session.user.email}</p>
          <button
            class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
            >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div class="bg-zinc-800 w-screen h-screen flex justify-center items-center">
        <div id="card" class="bg-black rounded-xl p-4 w-1/23">
          <div class="flex justify-center">
            <h1 class="text-4xl font-bold text-white">Flyer Central</h1>
          </div>

          <div class="flex justify-center">
            <img class="w-1/2 h-1/2" src="Flyer-Logo.PNG"></img>
          </div>
          <div class="flex justify-center">
            <p class="text-white font-bold">You must sign-in with a Lewis Account!</p>
          </div>

          <div class="flex justify-center">
            <button
              class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signIn("google")}
            >
              Sign in with your Lewis Account
            </button>
            ;
          </div>
        </div>
      </div>
      );
    }
  } else {
    return (
      <div class="bg-zinc-800 w-screen h-screen flex justify-center items-center">
        <div id="card" class="bg-black rounded-xl p-4 w-1/2">
          <div class="flex justify-center">
            <h1 class="text-4xl font-bold text-white">Flyer Central</h1>
          </div>

          <div class="flex justify-center">
            <img class="w-1/4 h-1/4" src="Flyer-Logo.PNG"></img>
          </div>

          <div class="flex justify-center">
            <button
              class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signIn("google")}
            >
              Sign in with your Lewis Account
            </button>
            ;
          </div>
        </div>
      </div>
    );
  }
};
<button
  class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
  onClick={() => signIn("google")}
>
  Sign In
</button>;
export default login;
