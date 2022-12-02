import { useState } from "react";
import {HeartIcon as InactiveIcon} from "@heroicons/react/24/outline";
import {HeartIcon as Icon} from "@heroicons/react/24/solid";


const CreatePostButton = () => {
  return (
    <div>
        <button 
        className="bg-primaryPurple hover:bg-opacity-80 
        text-white font-bold py-2 px-4 rounded-full
        w-20">
        Post
        </button>
    </div>
    
  );
  }
export default CreatePostButton;
