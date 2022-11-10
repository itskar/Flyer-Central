import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div class="bg-zinc-800 w-screen h-screen flex justify-center items-center">
      <div id="card" class="bg-black rounded-xl p-4 w-1/9">
        <div class="flex justify-center">
          <h1 class="text-4xl font-bold text-white">Flyer Central</h1>
        </div>

        <div class="flex justify-center">
          <img class="w-1/2 h-1/2"src="Flyer-Logo.PNG"></img>
        </div>
        
        <div class="flex justify-center">
          <a href="/login">
            <button class="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
              Sign In with your Lewis E-Mail
            </button>
          </a>
        </div>
      </div>
    </div>
    
    
    );
}
