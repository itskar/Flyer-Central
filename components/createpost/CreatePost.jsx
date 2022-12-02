import UserImg from "../../public/static/user-icon.png";
import Image from "next/image";
import {useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import CreatePostButton from './CreatePostButton'


const CreatePost = () => {
    return (
        <div className="mb-2 flex flex-col justify-evenly relative">
            <div>
                <p className="pl-5 pt-3 font-bold text-xl">Home</p>
            </div>
            <div className="flex flex-row select-none">
                <div className="my-5 ml-5 mr-2 h-12 w-12 xl:h-14 xl:w-14 rounded-full overflow-hidden">
                    <Image src={UserImg} alt="User" />
                </div>
                <div className="mt-6 mb-1">
                    <TextareaAutosize
                    placeholder="What's happening?" 
                    className="bg-[#15161D] py-1 resize-none focus:outline-none
                    w-[500px] overflow-hidden placeholder:text-xl"/>
                    <div className="pl-[460px] pt-5">
                        <CreatePostButton/>
                    </div>
                    <div className="pt-12 flex justify-center gap-20">
                        
                    </div>
                </div>
                
            </div>
      </div>
    )

}

export default CreatePost;