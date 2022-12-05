import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { signOut, useSession } from "next-auth/react";
import { Picker } from "emoji-mart";
import data from "@emoji-mart/data";
import Image from "next/image";
import TextareaAutosize from 'react-textarea-autosize';

// new Picker({ data });

const CreatePost = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  
  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      // id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      // tag: session.user.tag,
      text: input,
      // timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div
      className={`border-b border-darkgray p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
        loading && "opacity-60"
      }`}
    >
      <Image
        src={session.user.image}
        alt=""
        width={50}
        height={50}
        className="h-11 w-11 rounded-full cursor-pointer"
        onClick={signOut}
      />
      <div className=" w-full">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
          <TextareaAutosize
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-textWhitePrimary text-md placeholder-lightgray w-full min-h-[50px] resize-none"
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XMarkIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        {!loading && (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div
                className="icon"
                onClick={() => filePickerRef.current.click()}
              >
                <PhotoIcon className="text-primaryPurple h-[22px]" />
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                />
              </div>

              <div className="icon rotate-90">
                <ChartBarIcon className="text-primaryPurple h-[22px]" />
              </div>

              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <FaceSmileIcon className="text-primaryPurple h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-primaryPurple h-[22px]" />
              </div>

              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  data={data}
                  // style={{
                  //   position: "absolute",
                  //   marginTop: "465px",
                  //   marginLeft: "-40px",
                  //   maxWidth: "320px",
                  //   borderRadius: "20px",
                  // }}
                  // theme="dark"
                />
              )}
            </div>
            <button
              className="bg-primaryPurple text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-primaryPurplehover disabled:hover:bg-primaryPurple disabled:opacity-50 disabled:cursor-default"
              disabled={!input && !selectedFile}
              onClick={sendPost}
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
